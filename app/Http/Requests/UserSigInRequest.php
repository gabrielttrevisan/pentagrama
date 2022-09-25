<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserSigInRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'email' => [ 'required', 'email', 'present' ],
            'password' => [ 'required', 'string', 'min:8' ],
        ];
    }

    public function messages()
    {
        return [
            'email.required' => 'O campo e-mail deve ser preenchido',
            'email.email' => 'O campo e-mail é inválido',
            'email.present' => 'O campo e-mail não pode estar vazio',
            'password.required' => 'O campo senha deve ser preenchido',
            'password.string' => 'O campo senha deve ser do tipo texto',
            'password.min' => 'O campo senha deve ter no mínimo 8 caracteres',
        ];
    }
}
