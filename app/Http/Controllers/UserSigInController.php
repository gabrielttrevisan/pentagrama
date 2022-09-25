<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserSigInRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class UserSigInController extends Controller
{
    public function __invoke(UserSigInRequest $request): JsonResponse
    {
        if (auth()->attempt($request->validated()))
        {
            /** @var \App\Models\User $user */
            $user = auth()->user();

            /** @var \Laravel\Sanctum\NewAccessToken $token */
            $token = $user->createToken($user->email);

            return Response::json([
                'token' => $token->plainTextToken
            ]);
        }

        return Response::json([
            'errors' => [
                'Credenciais inválidas',
            ],
        ], 401);
    }
}
