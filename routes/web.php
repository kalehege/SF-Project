<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\ContactsController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ExamController;
use App\Http\Controllers\ImagesController;
use App\Http\Controllers\OrganizationsController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\ReportsController;
use App\Http\Controllers\ResultController;
use App\Http\Controllers\UsersController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Auth

Route::get('login', [LoginController::class, 'create'])
    ->name('login')
    ->middleware('guest');

Route::post('login', [LoginController::class, 'store'])
    ->name('login.store')
    ->middleware('guest');

Route::delete('logout', [LoginController::class, 'destroy'])
    ->name('logout');


Route::get('/img/{path}', [ImagesController::class, 'show'])
    ->where('path', '.*')
    ->name('image');

Route::group(['middleware' => ['auth', 'verified']], function(){

    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');


    Route::get('/admin/courses', [CourseController::class, 'index'])->name('admin.courses.index');
    Route::get('/admin/courses/create', [CourseController::class, 'create'])->name('admin.courses.create');
    Route::POST('/admin/courses/store', [CourseController::class, 'store'])->name('admin.courses.store');
    Route::get('/admin/courses/{course_id}/overview', [CourseController::class, 'overview'])->name('admin.courses.overview');
    Route::put('/admin/courses/{course}', [CourseController::class, 'update'])->name('admin.courses.update');


    Route::get('/courses', [CourseController::class, 'indexStudent'])->name('courses.index');
    Route::get('/courses/{course_id}/overview', [CourseController::class, 'overviewStudent'])->name('courses.overview');
    Route::get('/courses/{course_id}/register', [CourseController::class, 'register'])->name('courses.register');


    Route::get('/admin/exams', [ExamController::class, 'index'])->name('admin.exams.index');
    Route::get('/admin/exams/create', [ExamController::class, 'create'])->name('admin.exams.create');
    Route::POST('/admin/exams/store', [ExamController::class, 'store'])->name('admin.exams.store');
    Route::get('/admin/exams/{exam_id}/overview', [ExamController::class, 'overview'])->name('admin.exams.overview');
    Route::put('/admin/exams/{exam}', [ExamController::class, 'update'])->name('admin.exams.update');


    Route::POST('/quiz/store', [QuizController::class, 'store'])->name('quiz.store');
    Route::get('/exams/{exam}/quizzes', [QuizController::class, 'getQuizzes'])->name('exams.quizzes');

    Route::get('/exams/{exam}/quiz', [QuizController::class, 'attendQuiz'])->name('quiz.attend');
    Route::post('/quiz/submit', [QuizController::class, 'submitQuiz'])->name('quiz.submit');
    Route::get('/exams/{exam}/results', [QuizController::class, 'showExamResults'])->name('exam.results');


    Route::get('/result', [ResultController::class, 'index'])->name('result.index');


    Route::get('users', [UsersController::class, 'index'])->name('users');
    Route::get('users/create', [UsersController::class, 'create'])->name('users.create');
    Route::post('users', [UsersController::class, 'store'])->name('users.store');
    Route::get('users/{user}/edit', [UsersController::class, 'edit'])->name('users.edit');
    Route::put('users/{user}', [UsersController::class, 'update'])->name('users.update');
    Route::delete('users/{user}', [UsersController::class, 'destroy'])->name('users.destroy');
    Route::put('users/{user}/restore', [UsersController::class, 'restore'])->name('users.restore');


});

Route::get('/test', function () {
    return Inertia::render('Result/Index');
});
