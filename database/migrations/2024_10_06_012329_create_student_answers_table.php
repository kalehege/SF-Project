<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('student_answers', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('student_id')->index();
            $table->foreign('student_id')->references('id')->on('users');

            $table->unsignedBigInteger('exam_id')->index();
            $table->foreign('exam_id')->references('id')->on('exams');

            $table->unsignedBigInteger('question_id')->index();
            $table->foreign('question_id')->references('id')->on('questions');

            $table->unsignedBigInteger('answer_id')->index();
            $table->foreign('answer_id')->references('id')->on('answers');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('student_answers');
    }
};
