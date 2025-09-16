import React from 'react';
import { useForm } from "react-hook-form";
import {Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import '@components/Css/MiniPopup.css';


const Signup = ({onClose}) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const res = await fetch('http://localhost:3000/api/user/signup', {
                method: 'POST',
                credentials: 'include', // not needed for signup usually, but okay to keep
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    password: data.password,
                }),
            });

            const result = await res.json();

            if (res.ok) {
                alert("Signup successful ✅");
                localStorage.setItem("token", result.token);
                localStorage.setItem("user", JSON.stringify(result.user));
                navigate('/Register');

            } else {
                alert("Signup failed ❌\n" + result.message);
            }
        } catch (err) {
            console.error(err);
            alert("Something went wrong.");
        }
    };

    return (
        <div className="mini-popup-overlay">
            <div className="mini-popup-content">
                <button className='close-btn' onClick={onClose}>✕</button>
                <h2>Signup</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label>Username</label>
                    <input {...register('name', { required: "Username is required" })} />
                    {errors.username && <p className="error-msg">{errors.username.message}</p>}
                    

                    <label>Email</label>
                    <input {...register('email', {
                        required: "Email is required",
                        pattern: {
                            value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                            message: "Invalid email"
                        }
                    })} />
                    {errors.email && <p className="error-msg">{errors.email.message}</p>}
            

                    <label>Password</label>
                    <input
                        type="password"
                        {...register('password', {
                            required: "Password is required",
                            minLength: { value: 6, message: "Min 6 characters" }
                        })}
                    />
                    {errors.password && <p className="error-msg">{errors.password.message}</p>}

                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Signup"}
                    </button>
                </form>

                <div className='google-login'>
                    <GoogleLogin
                        onSuccess={async (credentialResponse) => {
                            try {
                                const res = await fetch('http://localhost:5000/api/users/google-login', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify({
                                        credential: credentialResponse.credential,
                                        role: 'customer'  // or 'vendor' based on context
                                    }),
                                });

                                if (!res.ok) {
                                    const errorData = await res.json();
                                    throw new Error(errorData.message || 'Login failed');
                                }

                                const data = await res.json();
                                toast.success("Google login successful ✅");
                                console.log('Login success:', data);

                                // Store token and user
                                localStorage.setItem('token', data.token);
                                localStorage.setItem('user', JSON.stringify(data.user));
                            } catch (err) {
                                toast.success("Google login successful ✅");
                                console.error('Google login failed:', err.message);
                            }
                        }}
                        onError={() => {
                            toast.success("Google login successful ✅");
                            console.log('Login Failed');
                        }}
                        auto_select={true}
                    />
                </div>

                <div className='signup-footer'>
                    <p>Already have an account? <Link to="/Login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
