// pages/auth/ForgotPassword.jsx
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helper';
import AuthLayout from '../../components/AuthLayout';
import Input from '../../components/Input';

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) return setError("Enter a valid email");

        setError("");
        setMessage("If your email exists, a reset link has been sent.");
        console.log("Forgot password request for:", email);
    };

    return (
        <AuthLayout>
            <h3 className="text-xl font-semibold">Forgot Password</h3>
            <form onSubmit={handleSubmit}>
                <Input label="Email" value={email} onChange={e => setEmail(e.target.value)} />
                {error && <p className='text-red-500 text-sm'>{error}</p>}
                {message && <p className='text-green-600 text-sm'>{message}</p>}
                <button type="submit" className="btn-primary w-full mt-4">Send Reset Link</button>
            </form>
        </AuthLayout>
    );
}
