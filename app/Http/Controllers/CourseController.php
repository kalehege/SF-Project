<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\StudentCourse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class CourseController extends Controller
{
    public function index(): Response
    {
        $courses = Course::all();

        return Inertia::render('Teacher/Courses/Index',[
            'courses' => $courses
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Teacher/Courses/Create');
    }

    public function store(Request $request): RedirectResponse
    {
        $user = Auth::user();

        $request->validate([
            'name' => ['required'],
            'description' => ['required'],
        ]);

//        dd($request->all());


        $courses = new Course();
        $courses->name = $request->input('name');
        $courses->description = $request->input('description');
        $courses->assign_user_id = $user->id;

        $courses->save();

        return Redirect::route('admin.courses.index');

    }

    public function overview($course_id): Response
    {
        $get_course = Course::find($course_id);


        return Inertia::render('Teacher/Courses/CourseDetailPage',[
            'course' => $get_course,
        ]);
    }

    public function indexStudent(): Response
    {
        $registered_courses = StudentCourse::where('student_id', Auth::id())->with('courses')->get();

        $all_courses = Course::all();

        $registered_course_ids = $registered_courses->pluck('course_id')->toArray();

        $non_registered_courses = Course::whereNotIn('id', $registered_course_ids)->get();

        return Inertia::render('Student/Courses/Index',[
            'registered_courses' => $registered_courses->pluck('courses'),
            'non_registered_courses' => $non_registered_courses,
        ]);
    }

    public function overviewStudent($course_id): Response
    {
        $get_course = Course::where('id',$course_id)->with('exams','exams.questions')->first();

//        dd($get_course);

        return Inertia::render('Student/Courses/CourseDetailPage',[
            'course' => $get_course,
        ]);
    }

    public function register($course_id): RedirectResponse
    {
//        dd($course_id);

        $course_register = new StudentCourse();
        $course_register->student_id = Auth::id();
        $course_register->course_id  = $course_id;
        $course_register->save();

        return Redirect::route('courses.index');

    }
}
