<?php

namespace App\Http\Controllers;

use App\Models\Exam;
use App\Models\Quiz;
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

        return Inertia::render('Student/Exam/QuizAttendPage', [
            'exam' => $exam,
        ]);
    }
}
