<?php

namespace App\Http\Controllers;

use App\Models\Section;
use App\Models\Student;
use App\Tables\Students;
use Illuminate\Http\Request;
use App\Http\Requests\StoreStudentRequest;
use App\Http\Requests\UpdateStudentRequest;

class StudentController extends Controller
{
    public function index()
    {
        return view('students.index', [
            'students' => Students::class,
        ]);
    }

    public function create()
    {
        $sections = Section::with('class')->get();

        return view('students.create', compact('sections'));
    }

    public function store(StoreStudentRequest $request)
    {
        $section = Section::findOrFail($request->section_id);

        $student = Student::create(
            $request->validated() + ['class_id' => $section->class_id]
        );

        return redirect()->route('students.index')->with('success', 'Student created successfully.');
    }

    public function edit(Student $student)
    {
        $sections = Section::with('class')->get();

        return view('students.edit', compact('student', 'sections'));
    }

    public function update(UpdateStudentRequest $request, Student $student)
    {
        $section = Section::findOrFail($request->section_id);

        $student->update($request->validated() + ['class_id' => $section->class_id]);

        return redirect()->route('students.index')->with('success', 'Student created successfully.');
    }

    public function destroy(Student $student)
    {
        $student->delete();

        return redirect()->route('students.index')->with('success', 'Student deleted successfully.');
    }
}
