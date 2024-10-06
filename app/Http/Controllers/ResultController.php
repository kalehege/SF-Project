<?php

namespace App\Http\Controllers;

use App\Models\ExamResult;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class ResultController extends Controller
{
    public function index(): Response
    {
        $results = DB::table('exam_results')
            ->join('exams', 'exam_results.exam_id', '=', 'exams.id')
            ->join('users', 'exam_results.student_id', '=', 'users.id')
            ->select('exam_results.id', 'exams.name as exam', 'exam_results.score as result', 'users.first_name as student_name')
            ->get();

//        dd($results);
        return Inertia::render('Result/Index',[
            'allResults' => $results,
        ]);
    }
}
