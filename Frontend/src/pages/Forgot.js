import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Forgot = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
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
            return toast.error("Please Enter Name..!");
        }
        try {
            const response = await axios.post('http://127.0.0.1:8000/ac/reset/', formData);
            const token = response.data;
            console.log('Form submitted:', formData);
            toast.success(token.msg);
            navigate('/login')
        } catch (error) {
            toast.error('Error posting data:', error);
        }        
    };
    return (
        <div className='container my-5'>
            <div className='col-md-4 m-auto py-5'>
            <main className="mt-5">
                <form onSubmit={handleSubmit} className='pt-5'> 
                    <h1 className="display-5 fw-bold text-body-emphasis text-center mb-5">Forgot Password</h1>   
                    <div className="form-floating">
                        <input 
                            name="email" 
                            value={formData.email} 
                            onChange={handleInputChange} 
                            type="email" className="form-control" placeholder="name@example.com"
                            autoComplete="username" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <button className="btn btn-primary w-100 py-2 mt-3" type="submit">Submit</button>
                    <center>
                    <Link to="/Register" className="nav-link text-primary mt-4 border rounded p-2">Create an Account</Link>
                    </center>
                </form>
                <p className="mt-5 mb-3 text-body-secondary text-center">&copy; 2024</p>
            </main>
            </div>
        </div>
    )
}

export default Forgot