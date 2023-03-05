<x-splade-modal action="{{ route('students.store') }}">
    <h1 class="mb-2">Create new user</h1>

    <x-splade-form>
        <x-splade-input name="name" label="Name" class="mb-5" />
        <x-splade-input name="email" label="Email address" type="email" class="mb-5" />
        <x-splade-input name="phone_number" label="Phone Number" type="text" class="mb-5" />
        <x-splade-select name="section_id">
            <option value="" selected>Select a Section</option>
            @foreach ($sections as $section)
                <option value="{{ $section->id }}">
                    {{ $section->class->name }} / {{ $section->name }}
                </option>
            @endforeach
        </x-splade-select>

        <x-splade-submit class="mt-5" />
    </x-splade-form>
</x-splade-modal>
