import React, { useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Reset = () => {
    const navigate = useNavigate();
    const {id, token}=useParams()
    const [formData, setFormData] = useState({
        password: '',
        password2: '',
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
        // Perform any action with the form data, e.g., send it to the server
        if (formData.password == ''){
            return toast.error("Please Enter New Password..!");
        }else if (formData.password2 == ''){
            return toast.error("Please Enter Conform Password..!");
        }else if (formData.password != formData.password2){
            return toast.error("Password not match..!");
        }
        try {

            const response = await axios.post(`http://127.0.0.1:8000/ac/reset/${id}/${token}/`, formData);
            console.log('Form submitted:', formData);
            toast.success("Password Reset success..!");
            navigate('/login')
        } catch (error) {
            console.error('Error posting data:', error);
        }
        
    };
    return (
        <div className='container my-5'>
        <div className='col-md-4 m-auto py-5'>
        <main className="mt-5">
                <form onSubmit={handleSubmit}>
                    <h1 className="display-5 fw-bold text-body-emphasis text-center mb-5">Reset Password</h1> 
                    <div className="form-floating">
                        <input 
                            name="password" 
                            value={formData.password} 
                            onChange={handleInputChange} 
                            type="password" className="form-control" placeholder="Password"
                            autoComplete="new-password" />
                        <label htmlFor="floatingInput">New Password</label>
                    </div>
                    <div className="form-floating mt-3">
                        <input 
                            name="password2"
                            value={formData.password2} 
                            onChange={handleInputChange}  
                            type="password" className="form-control" placeholder="Conform Password"
                            autoComplete="new-password" />
                        <label htmlFor="floatingPassword">Conform Password</label>
                    </div>
                    <button className="btn btn-primary w-100 py-2 mt-3" type="submit">Update Password</button>
                    <p className="mt-5 mb-3 text-body-secondary text-center">&copy; 2024</p>
                </form>
            </main>
        </div>
        </div>
    )
}

export default Reset