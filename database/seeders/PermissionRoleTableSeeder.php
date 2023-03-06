<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\Permission;
use Illuminate\Database\Seeder;

class PermissionRoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin_permissions = Permission::all();

        $user_permissions = Permission::whereIn('title', [
            'student_access',
        ])->get();

        Role::findOrFail(1)->permissions()->sync($admin_permissions);
        Role::findOrFail(2)->permissions()->sync($user_permissions);
    }
}
