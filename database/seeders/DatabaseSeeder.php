<?php

namespace Database\Seeders;

use App\Models\Account;
use App\Models\Contact;
use App\Models\Organization;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $account = Account::create(['name' => 'Acme Corporation']);

        User::factory()->create([
            'account_id' => $account->id,
            'first_name' => 'Super',
            'last_name' => 'Admin',
            'email' => 'admin@example.com',
            'password' => 'admin@example.com',
            'owner' => true,
        ]);


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
