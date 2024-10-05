<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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
}
