'use client'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import { useForm, Controller } from 'react-hook-form'
import 'react-datepicker/dist/react-datepicker.css'


const MyForm = () => {



    const { control, register, handleSubmit } = useForm()

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <div className='flex bs-full justify-center'>
            <div className="flex 
                            bs-full 
                            items-center 
                            flex-1 
                            min-bs-[100dvh] 
                            relative 
                            p-6 
                            max-md:hidden 
                            border-ie"
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        {...register('username')}
                    />

                    <Controller
                        name="birthday"
                        control={control}                
                        render={({ field }) => (
                            <DatePicker
                                selected={field.value}
                                onChange={(date) => field.onChange(date)}  
                            />
                        )}
                    />
                    

                    <button type="submit">submit</button>
                </form>
            </div>
        </div>
    )

}

export default MyForm