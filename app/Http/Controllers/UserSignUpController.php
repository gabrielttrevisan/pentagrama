<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRegisterRequest;
use App\Http\Requests\UserSignUpRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Response;

class UserSignUpController extends Controller
{
    public function __invoke(UserSignUpRequest $request): JsonResponse
    {
        $validated = $request->validated();
        User::create(
            array_merge(
                $request->except('password'),
                [ 'password' => Hash::make($request->password) ],
            )
        );

        if (auth()->attempt($validated))
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
