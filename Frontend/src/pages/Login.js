import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.email == ''){
            return toast.error("Please Enter Email..!");
        }else if (formData.password == ''){
            return toast.error("Please Enter Password..!");
        }
        try {
            const response = await axios.post('http://127.0.0.1:8000/ac/login/', formData);
            const token = response.data.token;
            localStorage.setItem('access_token', token.access);
            localStorage.setItem('refresh_token', token.refresh);
            console.log('Form submitted:', formData);
            toast.success("Login success..!");
            navigate('/')
        } catch (error) {
            toast.error("Invalid Credential...");
            console.error('Error posting data:', error);
        }
    };
    return (
        <div className='container my-5'>
            <div className='col-md-4 m-auto py-5'>
            <main className="mt-5">
                <form onSubmit={handleSubmit}>
                    <h1 className="display-5 fw-bold text-body-emphasis text-center mb-5">Login Form</h1>  
                    <div className="form-floating">
                        <input 
                            name="email" 
                            value={formData.email} 
                            onChange={handleInputChange} 
                            type="email" className="form-control" placeholder="name@example.com"
                            autoComplete="username" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mt-3">
                        <input 
                            name="password"
                            value={formData.password} 
                            onChange={handleInputChange}  
                            type="password" className="form-control" placeholder="Password"
                            autoComplete="new-password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>  
                    <button className="btn btn-primary w-100 py-2 mt-3" type="submit">Login</button>
                    <center>
                    <Link to="/forgot" className="nav-link text-primary mt-4">Forgot Password?</Link>
                    <Link to="/Register" className="nav-link text-primary mt-4 border rounded p-2">Create an Account</Link>
                    </center>
                </form>
                    <p className="mt-5 mb-3 text-body-secondary text-center">&copy; 2024</p>
            </main>
        </div>
        </div>
    )
}

export default Login