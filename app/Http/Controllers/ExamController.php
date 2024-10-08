<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Exam;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ExamController extends Controller
{
    public function index(): Response
    {
        $exams = Exam::all();

        return Inertia::render('Teacher/Exams/Index',[
            'exams' => $exams
        ]);
    }

    public function create(): Response
    {
        $courses = Course::all();
        return Inertia::render('Teacher/Exams/Create', [
            'courses' => $courses
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
//        dd($request->all());

        $user = Auth::user();
//
        $request->validate([
            'name' => ['required'],
            'description' => ['required'],
            'course_id' => ['required'],
            'attempt_count' => ['required'],
            'start_date' => ['required'],
            'end_date' => ['required'],
        ]);

//        dd($request->all());


        $courses = new Exam();
        $courses->name = $request->input('name');
        $courses->description = $request->input('description');
        $courses->start_date = $request->input('start_date');
        $courses->end_date = $request->input('end_date');
        $courses->course_id = $request->input('course_id');
        $courses->attempt_count = $request->input('attempt_count');
        $courses->assign_user_id = $user->id;

        $courses->save();

        return Redirect::route('admin.exams.index');

    }

    public function overview($exam_id): Response
    {
        $exam = Exam::where('id',$exam_id)->with('courses','questions.answers')->first();
        $courses = Course::all();

//        dd($exam);
        return Inertia::render('Teacher/Exams/ExamDetailPage',[
            'exam' => $exam,
            'courses' => $courses
        ]);
    }

    public function update(Request $request, Exam $exam)
    {
        $validated = $request->validate([
            'course_id' => 'required|exists:courses,id',
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'attempt_count' => 'required|integer|min:1',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date',
        ]);

        $exam->update($validated);

        return redirect()->route('admin.exams.overview', $exam->id)->with('success', 'Exam updated successfully!');
    }


    public function destroy($exam)
    {
//        dd($exam);
        Exam::find($exam)->delete();

        return redirect()->route('admin.exams.index')->with('success', 'Destroy successfully!');

    }

}
