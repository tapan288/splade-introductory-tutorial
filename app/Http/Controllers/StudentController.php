<?php

namespace App\Http\Controllers;

use App\Tables\Students;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function index()
    {
        return view('students.index', [
            'students' => Students::class,
        ]);
    }
}
