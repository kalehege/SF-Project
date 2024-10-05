<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class CourseController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Courses/Index');
    }

    public function create(): Response
    {
        return Inertia::render('Courses/Create');
    }

    public function store(Request $request): \Illuminate\Http\RedirectResponse
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

        return Redirect::route('courses.index');

    }
}
