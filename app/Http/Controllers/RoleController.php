<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Tables\Roles;
use App\Models\Permission;
use Illuminate\Http\Request;
use App\Http\Requests\StoreRoleRequest;

class RoleController extends Controller
{
    public function index()
    {
        return view('roles.index', [
            'roles' => Roles::class,
        ]);
    }

    public function create()
    {
        $permissions = Permission::all();

        return view('roles.create', compact('permissions'));
    }

    public function store(StoreRoleRequest $request)
    {
        $role = Role::create([
            'title' => $request->title,
        ]);

        $role->permissions()->sync($request->permissions);

        return redirect()->route('roles.index');
    }
}
