<?php

namespace Database\Seeders;

use App\Models\Account;
use App\Models\Contact;
use App\Models\Organization;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $account = Account::create(['name' => 'SF Campus']);

        User::factory()->create([
            'account_id' => $account->id,
            'first_name' => 'Super',
            'last_name' => 'Admin',
            'email' => 'admin@example.com',
            'password' => 'admin@example.com',
            'owner' => 1,
        ]);

        User::factory()->create([
            'account_id' => $account->id,
            'first_name' => 'Ms',
            'last_name' => 'Lecture',
            'email' => 'lecture@example.com',
            'password' => 'lecture@example.com',
            'owner' => 2,
        ]);

        User::factory()->create([
            'account_id' => $account->id,
            'first_name' => 'Mr',
            'last_name' => 'Student',
            'email' => 'student@example.com',
            'password' => 'student@example.com',
            'owner' => 3,
        ]);

        DB::table('courses')->insert([
            [
                'name' => 'Computer Science',
                'description' => 'Computer Science Course',
                'assign_user_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Mathematics',
                'description' => 'Mathematics Course',
                'assign_user_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Physics',
                'description' => 'Physics Course',
                'assign_user_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);


        $exams = [
            [
                'name' => 'Mid Term Exam',
                'description' => 'This is the midterm exam.',
                'start_date' => Carbon::now()->addDays(5),
                'end_date' => Carbon::now()->addDays(7),
                'attempt_count' => 3,
                'assign_user_id' => 2,
                'course_id' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Final Exam',
                'description' => 'This is the final exam.',
                'start_date' => Carbon::now()->addDays(15),
                'end_date' => Carbon::now()->addDays(17),
                'attempt_count' => 2,
                'assign_user_id' => 2,
                'course_id' => 2,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Quiz 1',
                'description' => 'This is the first quiz.',
                'start_date' => Carbon::now()->addDays(2),
                'end_date' => Carbon::now()->addDays(3),
                'attempt_count' => 1,
                'assign_user_id' => 2,
                'course_id' => 3,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ];

        foreach ($exams as $exam) {
            $examId = DB::table('exams')->insertGetId($exam);

            for ($i = 1; $i <= 20; $i++) {
                $questionId = DB::table('questions')->insertGetId([
                    'exam_id' => $examId,
                    'question' => 'Sample Question ' . $i . ' for ' . $exam['name'],
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);

                $correctAnswerIndex = rand(1, 4);
                for ($j = 1; $j <= 4; $j++) {
                    DB::table('answers')->insert([
                        'question_id' => $questionId,
                        'answer' => 'Sample Answer ' . $j . ' for Question ' . $i,
                        'is_correct' => ($j === $correctAnswerIndex),
                        'created_at' => Carbon::now(),
                        'updated_at' => Carbon::now(),
                    ]);
                }
            }
        }

//        $organizations = Organization::factory(100)
//            ->create(['account_id' => $account->id]);
//
//        Contact::factory(100)
//            ->create(['account_id' => $account->id])
//            ->each(function ($contact) use ($organizations) {
//                $contact->update(['organization_id' => $organizations->random()->id]);
//            });
    }
}
