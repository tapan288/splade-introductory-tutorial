<?php

namespace App\Http\Controllers;

use App\Http\Requests\DestroyRoleRequest;
use App\Models\Role;
use App\Tables\Roles;
use App\Models\Permission;
use Illuminate\Http\Request;
use App\Http\Requests\StoreRoleRequest;
use App\Http\Requests\UpdateRoleRequest;
use ProtoneMedia\Splade\Facades\Toast;

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

    public function edit(Role $role)
    {
        $permissions = Permission::all();

        return view('roles.edit', compact('permissions', 'role'));
    }

    public function update(UpdateRoleRequest $request, Role $role)
    {
        $role->update([
            'title' => $request->title,
        ]);

        $role->permissions()->sync($request->permissions);

        Toast::title('Role details updated successfully.');

        return redirect()->route('roles.index');
    }

    public function destroy(DestroyRoleRequest $request, Role $role)
    {
        $role->delete();

        Toast::title('Role deleted successfully.');

        return redirect()->route('roles.index');
    }
}
