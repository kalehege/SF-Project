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
        $user = Auth::user();
//
        $request->validate([
            'name' => ['required'],
            'description' => ['required'],
            'course_id' => ['required'],

        ]);

//        dd($request->all());


        $courses = new Exam();
        $courses->name = $request->input('name');
        $courses->description = $request->input('description');
        $courses->course_id = $request->input('course_id');
        $courses->assign_user_id = $user->id;

        $courses->save();

        return Redirect::route('exams.index');

    }

    public function overview($exam_id): Response
    {
        $exam = Exam::where('id',$exam_id)->with('courses','questions.answers')->first();


//        dd($exam);
        return Inertia::render('Teacher/Exams/ExamDetailPage',[
            'exam' => $exam,
        ]);
    }
}
