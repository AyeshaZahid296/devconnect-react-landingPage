import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/AuthLayout';
import Input from '../../components/Input';
import { validateEmail } from '../../utils/helper';

export default function RegisterDeveloper() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [techStack, setTechStack] = useState('');
    const [github, setGithub] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!fullName || !email || !password) return setError("All fields required");
        if (!validateEmail(email)) return setError("Invalid email");

        console.log("Register DEVELOPER", { fullName, email, password, techStack, github });
        navigate('/dashboard');
    };

    return (
        <AuthLayout>
            <h3 className="text-3xl font-bold text-blue-700 mb-4 text-center">Register as Developer</h3>
            <form onSubmit={handleSubmit}>
                <Input label="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Input label="Tech Stack" value={techStack} onChange={(e) => setTechStack(e.target.value)} />
                <Input label="GitHub / LinkedIn URL" value={github} onChange={(e) => setGithub(e.target.value)} />
                {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

                <button type="submit" className="btn-primary mt-2">Register</button>

                <div className="mt-4 text-sm text-center">
                    Already have an account?{' '}
                    <Link to="/login/developer" className="text-blue-600 underline">Login</Link>
                </div>
            </form>
        </AuthLayout>
    );
}
