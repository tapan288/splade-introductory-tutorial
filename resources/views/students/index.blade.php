<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Students List') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            @can('student_create')
                <Link slideover href="{{ route('students.create') }}"
                    class="mb-5 inline-flex rounded-md shadow-sm bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline">
                Create Student
                </Link>
            @endcan
            <x-splade-table :for="$students">
                <x-slot:empty-state>
                    <p>Whoops!</p>
                    </x-slot>
                    <x-splade-cell avatar as="$student">
                        @if ($student->avatar)
                            <img src="{{ asset($student->avatar) }}" alt="{{ $student->name }}"
                                class="w-10 h-10 rounded-full">
                        @endif
                    </x-splade-cell>
                    <x-splade-cell actions as="$student">
                        @can('student_edit')
                            <Link slideover href="{{ route('students.edit', $student->id) }}" class="text-indigo-600"> Edit
                            </Link>
                        @endcan
                        @can('student_delete')
                            <x-splade-form action="{{ route('students.destroy', $student) }}" method="DELETE" confirm>
                                <button class="text-bold text-indigo-600" type="submit">Delete</button>
                            </x-splade-form>
                        @endcan
                    </x-splade-cell>

            </x-splade-table>
        </div>
    </div>
</x-app-layout>
