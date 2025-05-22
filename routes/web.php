<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [RegisteredUserController::class, 'create'])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    Route::get('dashboard/commission', function () {
        return Inertia::render('dashboard/commission');
    })->name('commission');
    Route::get('dashboard/withdrawals', function () {
        return Inertia::render('dashboard/withdrawals');
    })->name('withdrawals');
    Route::get('dashboard/signups', function () {
        return Inertia::render('dashboard/signups');
    })->name('signups');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
