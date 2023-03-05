<x-splade-modal>
    <h1 class="mb-2">Edit User ({{ $student->name }})</h1>

    <x-splade-form action="{{ route('students.update', $student) }}" :default="$student" method="PUT">
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
