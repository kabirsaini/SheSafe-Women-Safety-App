import React from 'react';
import { useForm } from "react-hook-form";
import './Css/Signup.css';
// Correct relative path from components to assets


const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors,isSubmitting },
    } = useForm();

    async function onSubmit(data){
        await new Promise((resolve) => setTimeout(resolve, 2000)); //Just to provide a delay in submitting the form
        console.log("your data has been submitted",data);
    }
    return (
        
        <div className='signup-cont'>
            <div className='signup-form'>
            <h1>SignUp</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label> FirstName</label>
                <br/>
                <input  {...register('firstName',
                    {required:{value:true,message:"Firstname is required buddy"},
                    minLength:{value:3,message:"minimum length should be 3"},
                    maxLength:{value:10,message:"maximum length should be 10"}
                    })}/>
                    {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
                <br/>
                <label>Lastname </label>
                <br/>
                <input  {...register('lastName',
                    {required:{value:true,message:"LastName is required buddy"},
                    minLength:{value:3,message:"minimum length should be 3"},
                    maxLength:{value:10,message:"maximum length should be 10"}
                    })}/>
                    {errors.lastName && <p className='error-msg'>{errors.lastName.message}</p>}
                <br/>
                <label>Email</label>
                <br/>
                <input {...register('email',
                    {required:{value:true,message:"Email is required buddy"},
                    pattern:{value:/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,message:"Invalid Email"}
                    })}/>
                    {errors.email && <p className='error-msg'>{errors.email.message}</p>}
                <br/>
                <input type="submit" disabled={isSubmitting} 
                value={isSubmitting ? "Submitting" : "Submit"} />
            </form>
        </div>
        </div>
        
    )
}

export default Signup
