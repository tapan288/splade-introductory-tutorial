<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Tables\Roles;
use App\Models\Permission;
use Illuminate\Http\Request;
use ProtoneMedia\Splade\Facades\Toast;
use App\Http\Requests\StoreRoleRequest;
use App\Http\Requests\UpdateRoleRequest;
use App\Http\Requests\DestroyRoleRequest;

class RoleController extends Controller
{
    public function index()
    {
        $this->authorize('role_access');

        return view('roles.index', [
            'roles' => Roles::class,
        ]);
    }

    public function create()
    {
        $this->authorize('role_create');

        $permissions = Permission::all();

        return view('roles.create', compact('permissions'));
    }

    public function store(StoreRoleRequest $request)
    {
        $this->authorize('role_create');

        $role = Role::create([
            'title' => $request->title,
        ]);

        $role->permissions()->sync($request->permissions);

        return redirect()->route('roles.index');
    }

    public function edit(Role $role)
    {
        $this->authorize('role_edit');

        $permissions = Permission::all();

        return view('roles.edit', compact('permissions', 'role'));
    }

    public function update(UpdateRoleRequest $request, Role $role)
    {
        $this->authorize('role_edit');

        $role->update([
            'title' => $request->title,
        ]);

        $role->permissions()->sync($request->permissions);

        Toast::title('Role details updated successfully.');

        return redirect()->route('roles.index');
    }

    public function destroy(DestroyRoleRequest $request, Role $role)
    {
        $this->authorize('role_delete');

        $role->delete();

        Toast::title('Role deleted successfully.');

        return redirect()->route('roles.index');
    }
}
