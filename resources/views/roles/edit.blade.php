<x-splade-modal>
    <h1 class="mb-2">Edit Role ({{ $role->title }})</h1>

    <x-splade-form action="{{ route('roles.update', $role) }}" :default="$role" method="PUT">
        <x-splade-input name="title" label="Title" class="mb-5" />

        <x-splade-select name="permissions[]" placeholder="Select Permissions" multiple choices relation
            label="Select Permissions">
            @foreach ($permissions as $permission)
                <option value="{{ $permission->id }}">
                    {{ $permission->title }}
                </option>
            @endforeach
        </x-splade-select>

        <x-splade-submit class="mt-5" :spinner="true" />
    </x-splade-form>
</x-splade-modal>
