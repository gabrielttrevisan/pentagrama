<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\City;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        $user = \App\Models\User::factory()->create([
             'name' => 'Desenvolvedor Pentagrama',
             'email' => 'dev@pentagrama.com',
             'password' => Hash::make('10203040'),
        ]);

        $cities = \App\Models\City::factory(20)->create(
            fn () => [
                'name' => fake()->city(),
                'state' => Str::random(2),
                'consolidated_at' => fake()->date(),
                'user_id' => $user->id,
            ]
        );

        $cities->each(
            fn (City $city) => \App\Models\Neighborhood::factory(3)->create(
                fn () => [
                    'name' => fake()->words(2, true),
                    'city_id' => $city->id,
                ]
            )
        );
    }
}
