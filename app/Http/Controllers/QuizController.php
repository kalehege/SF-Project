<?php

namespace App\Http\Controllers;

use App\Models\Exam;
use App\Models\ExamAttempt;
use App\Models\ExamResult;
use App\Models\Quiz;
use App\Models\StudentAnswer;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class QuizController extends Controller
{
    public function store(Request $request): RedirectResponse
    {
        $user = Auth::user();
//
//        $request->validate([
//            'name' => ['required'],
//            'description' => ['required'],
//            'course_id' => ['required'],
//
//        ]);
//
//        dd($request->all());

        $validated = $request->validate([
            'exam_id' => 'required|exists:exams,id',
            'question' => 'required|string|max:255',
            'answers' => 'required|array|min:2|max:4',
            'answers.*' => 'required|string|max:255',
            'correctAnswerIndex' => 'required|integer|min:0|max:3',
        ]);

        $exam = Exam::findOrFail($validated['exam_id']);

        $question = $exam->questions()->create([
            'question' => $validated['question'],
        ]);

        foreach ($validated['answers'] as $index => $answerText) {
            $question->answers()->create([
                'answer' => $answerText,
                'is_correct' => $index == $validated['correctAnswerIndex'], // Set correct answer
            ]);
        }

        return redirect()->route('admin.exams.overview', $exam->id);
//
//
//        $courses = new Exam();
//        $courses->name = $request->input('name');
//        $courses->description = $request->input('description');
//        $courses->course_id = $request->input('course_id');
//        $courses->assign_user_id = $user->id;
//
//        $courses->save();
//
//        return Redirect::route('exams.index');

    }

    public function attendQuiz(Exam $exam)
    {
        $exam->load('questions.answers');

        $studentId = Auth::id();
        $maxAttempts = $exam->attempt_count;

        $attempt = ExamAttempt::firstOrNew([
            'student_id' => $studentId,
            'exam_id' => $exam->id,
        ]);

        if ($attempt->exists && $attempt->attempt_count >= $maxAttempts) {
            return redirect()->back()->with('error', 'You have no attempts left for this exam.');
        }

        $attempt->attempt_count += 1;
        $attempt->save();

        return Inertia::render('Student/Exam/QuizAttendPage', [
            'exam' => $exam,
        ]);
    }

    public function submitQuiz(Request $request)
    {
//        dd($request->all());
        $validated = $request->validate([
            'exam_id' => 'required|exists:exams,id',
            'selectedAnswers' => 'required|array',
        ]);

        $examId = $validated['exam_id'];
        $selectedAnswers = $validated['selectedAnswers'];

        foreach ($selectedAnswers as $questionId => $answerId) {
            StudentAnswer::create([
                'student_id' => auth()->id(),
                'exam_id' => $examId,
                'question_id' => $questionId,
                'answer_id' => $answerId,
            ]);
        }

        $get_course_id = Exam::find($examId)->course_id;

        $exam = Exam::with(['questions.answers'])->findOrFail($examId);

        $exam_currect = Exam::with(['questions.answers' => function ($query) {
            $query->where('is_correct', true);
        }])->findOrFail($examId);

        $studentId = Auth::id();
        $studentAnswers = StudentAnswer::where('student_id', $studentId)
            ->where('exam_id', $examId)
            ->pluck('answer_id', 'question_id')
            ->toArray();

        $correctAnswersCount = 0;
        $totalQuestions = $exam->questions->count();

        foreach ($exam_currect->questions as $question) {
            $correctAnswerId = $question->answers->first()->id;
            if (isset($studentAnswers[$question->id]) && $studentAnswers[$question->id] == $correctAnswerId) {
                $correctAnswersCount++;
            }
        }

        $scorePercentage = ($correctAnswersCount / $totalQuestions) * 100;

        ExamResult::updateOrCreate(
            [
                'student_id' => auth()->id(),
                'exam_id' => $examId,
            ],
            [
                'score' => $scorePercentage,
            ]
        );

        return redirect()->route('courses.overview', $get_course_id)->with('success', 'Quiz submitted successfully!');
    }

    public function showExamResults($examId)
    {
        $exam = Exam::with(['questions.answers'])->findOrFail($examId);

        $exam_currect = Exam::with(['questions.answers' => function ($query) {
            $query->where('is_correct', true);
        }])->findOrFail($examId);

        $studentId = Auth::id();
        $studentAnswers = StudentAnswer::where('student_id', $studentId)
            ->where('exam_id', $examId)
            ->pluck('answer_id', 'question_id')
            ->toArray();

        $correctAnswersCount = 0;
        $totalQuestions = $exam->questions->count();

        foreach ($exam_currect->questions as $question) {
            $correctAnswerId = $question->answers->first()->id;
            if (isset($studentAnswers[$question->id]) && $studentAnswers[$question->id] == $correctAnswerId) {
                $correctAnswersCount++;
            }
        }

        $scorePercentage = ($correctAnswersCount / $totalQuestions) * 100;

        ExamResult::updateOrCreate(
            [
                'student_id' => auth()->id(),
                'exam_id' => $examId,
            ],
            [
                'score' => $scorePercentage,
            ]
        );

//        dd($scorePercentage);

        return Inertia::render('Student/Exam/ResultQuizPage', [
            'exam' => $exam,
            'studentAnswers' => $studentAnswers,
            'correctAnswersCount' => $correctAnswersCount,
            'totalQuestions' => $totalQuestions,
            'scorePercentage' => $scorePercentage,
        ]);
    }

}
