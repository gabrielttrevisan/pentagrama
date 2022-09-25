<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class UserInfoController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    public function __invoke(Request $request): JsonResponse
    {
        /** @var \App\Models\User $user */
        $user = $request->user();

        if (is_null($user))
        {
            return Response::json([
                'error' => 'Não autorizado',
            ], 401);
        }

        return Response::json([
            'name' => $user->name,
            'email' => $user->email,
        ]);
    }
}
