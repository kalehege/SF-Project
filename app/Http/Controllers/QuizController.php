<?php

namespace App\Http\Controllers;

use App\Models\Exam;
use App\Models\ExamAttempt;
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
        // Validate the incoming data
        $validated = $request->validate([
            'exam_id' => 'required|exists:exams,id',
            'selectedAnswers' => 'required|array',
        ]);

        $examId = $validated['exam_id'];
        $selectedAnswers = $validated['selectedAnswers'];

        // Loop through the selected answers and store them in the database
        foreach ($selectedAnswers as $questionId => $answerId) {
            StudentAnswer::create([
                'student_id' => auth()->id(),   // The currently logged-in student
                'exam_id' => $examId,
                'question_id' => $questionId,
                'answer_id' => $answerId,
            ]);
        }

        $get_course_id = Exam::find($examId)->course_id;

        // Return a success message or redirect to a results page
        return redirect()->route('courses.overview', $get_course_id)->with('success', 'Quiz submitted successfully!');
    }
}
