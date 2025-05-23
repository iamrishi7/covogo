<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Settings\ProfileController;
use App\Models\User;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [RegisteredUserController::class, 'create'])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        if (auth()->user()->hasRole('driver')) {
            $route = 'dashboard/driver';
        } else {
            $route = 'dashboard/rider';
        }
        return Inertia::render(
            $route,
            [
                'signups' => User::where('referred_by', auth()->user()->id)->take(5)->latest()->get(['name', 'created_at']),
                'total_signups' => User::where('referred_by', auth()->user()->id)->count()
            ]
        );
    })->name('dashboard');

    Route::get('dashboard/commission', function () {
        return Inertia::render('dashboard/commission');
    })->name('commission');
    Route::get('dashboard/withdrawals', function () {
        return Inertia::render('dashboard/withdrawals');
    })->name('withdrawals');
    Route::get('dashboard/signups', [ProfileController::class, 'referrals'])->name('signups');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
