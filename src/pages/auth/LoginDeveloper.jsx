// pages/auth/LoginDeveloper.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/AuthLayout';
import Input from '../../components/Input';
import { validateEmail } from '../../utils/helper';

export default function LoginDeveloper() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) return setError("Invalid email");
        if (!password) return setError("Password required");

        // Simulate login success
        console.log("Login as DEVELOPER", { email, password });
        setError('');
        navigate('/dashboard');
    };

    return (
        <AuthLayout>
            <h3 className="text-3xl font-bold text-blue-700 mb-4 text-center">Login as Developer</h3>
            <form onSubmit={handleSubmit}>
                <Input
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

                <button type="submit" className="btn-primary mt-2">Login</button>

                <div className="my-4 text-xs text-gray-500 text-center">or</div>
                <button className="btn-secondary w-full" disabled>Login with Google</button>

                <div className="mt-4 text-sm text-center">
                    <Link to="/forgot-password" className="text-blue-600 underline">Forgot Password?</Link>
                    <br />
                    Don’t have an account?{' '}
                    <Link to="/register/developer" className="text-blue-600 underline">Sign up</Link>
                </div>
            </form>
        </AuthLayout>
    );
}
