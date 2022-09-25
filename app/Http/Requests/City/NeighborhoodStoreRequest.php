<?php

namespace App\Http\Requests\City;

use Illuminate\Foundation\Http\FormRequest;

class NeighborhoodStoreRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => [ 'required', 'string', 'present' ],
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'O campo nome deve ser preenchido',
            'name.string' => 'O campo nome deve ser do tipo texto',
            'name.present' => 'O campo nome não pode estar vazio',
        ];
    }
}
