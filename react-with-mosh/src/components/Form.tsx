import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
    name: z.string().min(3, {message: 'Name must be 3 characters long'}),
    age: z.number({invalid_type_error: "Age is required field."}).min(18, {message: "Age must be greater or equal to 18"}),
})

type FormData = z.infer<typeof schema>

function Form(){

    const { register, handleSubmit, formState : {errors, isValid} } = useForm<FormData>({resolver: zodResolver(schema)});

    const onSubmit = (data : any) => {
        console.log(data);
    }
   
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-3'>
                <label htmlFor='name' className='form-label'>Name</label>
                <input type='text'  className='form-control' id='name' 
                {...register('name', {required: true, minLength: 3}) }/>
                {errors.name && <p className='text-danger'>{errors.name.message}</p>}
            </div> 
            <div className='mb-3'>
                <label htmlFor='age' className='form-label'>Age</label>
                <input type='number' className='form-control' id='age' {...register('age', {valueAsNumber: true})} />
                {errors.age && <p className='text-danger'>{errors.age.message}</p>}
            </div>
            <button disabled={!isValid} className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Form;
