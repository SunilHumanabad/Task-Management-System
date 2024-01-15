import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        tc: 'False',
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
        if (formData.name == ''){
            return toast.error("Please Enter Name..!");
        }else if (formData.email == ''){
            return toast.error("Please Enter Email..!");
        }else if (formData.password == ''){
            return toast.error("Please Enter Password..!");
        }else if (formData.password2 == ''){
            return toast.error("Please Enter Conform Password..!");
        }else if (formData.password != formData.password2){
            return toast.error("Password not match..!");
        }
        try {
            const response = await axios.post('http://127.0.0.1:8000/ac/register/', formData);
            console.log('Form submitted:', formData);
            toast.success("Register success..!");
            navigate('/login')
        } catch (error) {
            console.error('Error posting data:', error);
        }        
    };
    return (
<div className='container my-5'>
            <div className='col-md-4 m-auto py-3'>
            <main className="">
                <form onSubmit={handleSubmit}>
                    <h1 className="display-5 fw-bold text-body-emphasis text-center mb-5">Register Form</h1>   
                    <div className="form-floating">
                        <input 
                            name="name" 
                            value={formData.name} 
                            onChange={handleInputChange} 
                            type="text" className="form-control" placeholder="Name"/>
                        <label htmlFor="floatingInput">Name</label>
                    </div>
                    <div className="form-floating mt-3">
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
                            type="password" className="form-control" placeholder="Password" autoComplete="new-password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating mt-3">
                        <input 
                            name="password2" 
                            value={formData.password2} 
                            onChange={handleInputChange} 
                            type="password" className="form-control" placeholder="Password" autoComplete="new-password" />
                        <label htmlFor="floatingPassword">Conform Password</label>
                    </div>    
                    <div className="form-check text-start my-3">
                        <input className="form-check-input" type="checkbox" value="True" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Remember me
                        </label>
                    </div>
                    <button className="btn btn-primary w-100 py-2" type="submit">Register</button>
                    <center>
                    <Link to="/login" className="nav-link text-primary mt-4 border rounded p-2">Already Have Account?</Link>
                    </center>
                </form>
                    <p className="mt-5 mb-3 text-body-secondary text-center">&copy; 2024</p>
            </main>
        </div>
        </div>
    )
}

export default Register