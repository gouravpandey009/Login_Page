import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='form-container'>
            <form className='form-container-2'>
                <h1>Sign Up</h1>
                <div className='input-container'>
                    <label className='title'>Username</label>
                    <div>
                        <input className='username' type="text" placeholder='Gourav Pandey' required />
                    </div>
                </div>
                <div className='input-container'>
                    <label className='title'>Email</label>
                    <div>
                        <input className='email' type="email" placeholder='pandeygourav09@gmail.com' required />
                    </div>
                </div>
                <div className='input-container'>
                    <label className='title'>Password</label>
                    <div>
                        <input className='password' type="password" placeholder='123456' required />
                    </div>
                </div>
                <div className='input-container'>
                    <label className='title'>Confirm Password</label>
                    <div>
                        <input className='confirm-password' type="password" placeholder='123456' required />
                    </div>
                </div>
                <div className='sign-up-container'>
                    <button className='sign-up'>Sign up</button>
                </div>
                <p className='sign-up-bottom-text'>
                    <Link to="/login">
                        Already have an account? Login
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Signup;