<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ExamController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Exams/Index');
    }

    public function create(): Response
    {
        $courses = Course::all();
        return Inertia::render('Exams/Create', [
            'courses' => $courses
        ]);
    }
}
