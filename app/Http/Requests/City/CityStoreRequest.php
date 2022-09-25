<?php

namespace App\Http\Requests\City;

use Illuminate\Foundation\Http\FormRequest;

class CityStoreRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => [ 'required', 'string', 'present' ],
            'state' => [ 'required', 'string', 'min:2', 'max:2' ],
            'consolidated_at' => [ 'required', 'date' ],
        ];
    }

    public function messages()
    {
        return [
            'state.required' => 'O campo estado deve ser preenchido',
            'state.string' => 'O campo estado deve ser do tipo texto',
            'state.min' => 'O campo estado não pode ter menos que 2 caracteres',
            'state.max' => 'O campo estado não pode ter mais que 2 caracteres',
            'consolidated_at.required' => 'O campo fundação deve ser preenchido',
            'consolidated_at.date' => 'O campo fundação deve ser do tipo data',
            'password.confirmed' => 'O campo senha deve ser confirmado',
            'name.required' => 'O campo nome deve ser preenchido',
            'name.string' => 'O campo nome deve ser do tipo texto',
            'name.present' => 'O campo nome não pode estar vazio',
        ];
    }
}
