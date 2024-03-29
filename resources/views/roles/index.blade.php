<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Roles List') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <Link slideover href="{{ route('roles.create') }}"
                class="mb-5 inline-flex rounded-md shadow-sm bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline">
            Add Role
            </Link>
            <x-splade-table :for="$roles">
                <x-slot:empty-state>
                    <p>Whoops!</p>
                    </x-slot>
                    <x-splade-cell actions as="$role">
                        <Link slideover href="{{ route('roles.edit', $role->id) }}" class="text-indigo-600"> Edit
                        </Link>
                        <x-splade-form action="{{ route('roles.destroy', $role) }}" method="DELETE" confirm>
                            <button class="text-bold text-indigo-600" type="submit">Delete</button>
                        </x-splade-form>
                    </x-splade-cell>

            </x-splade-table>
        </div>
    </div>
</x-app-layout>
