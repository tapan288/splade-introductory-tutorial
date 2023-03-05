<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Students List') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <x-splade-table :for="$students">
                <x-slot:empty-state>
                    <p>Whoops!</p>
                    </x-slot>
            </x-splade-table>
        </div>
    </div>
</x-app-layout>
