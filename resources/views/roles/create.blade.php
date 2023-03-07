<x-splade-modal>
    <h1 class="mb-2">Create new Role</h1>

    <x-splade-form action="{{ route('roles.store') }}">
        <x-splade-input name="title" label="Title" class="mb-5" />

        <x-splade-select name="permissions[]" placeholder="Select Permissions" multiple choices label="Select Permissions">
            @foreach ($permissions as $permission)
                <option value="{{ $permission->id }}">
                    {{ $permission->title }}
                </option>
            @endforeach
        </x-splade-select>

        <x-splade-submit class="mt-5" :spinner="true" />
    </x-splade-form>
</x-splade-modal>
