import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TaskEdit = () => {
  const {id}=useParams()
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'False',
    user: ''
});
  useEffect(() => {
      const fetchUserDetails = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:8000/ac/profile/', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
          });
          setUserDetails(response.data);
          const response2 = await axios.get(`http://127.0.0.1:8000/task/e/${id}/`,{
            headers: {
              Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
          });
          setFormData(response2.data);
        } catch (error) {
          console.error('Error fetching user details:', error);
        }
      };
      fetchUserDetails();
    }, []);  



  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      if (formData.title == ''){
        return toast.error("Please Enter Title..!");
      }else if (formData.description == ''){
          return toast.error("Please Enter Description..!");
      }else if (formData.status == ''){
          return toast.error("Please Select Status..!");
      }
      try {
          const response = await axios.put(`http://127.0.0.1:8000/task/${id}/`, formData,{
              headers: {
                  Authorization: `Bearer ${localStorage.getItem('access_token')}`,
              }
          });

          console.log('Form submitted:', formData);
          toast.success("Task Updated success..!");
          navigate('/task')
      } catch (error) {
          return toast.error("Server Error");
      }
  };
  return (
    <div className='container col-md-4'>
        <form onSubmit={handleSubmit}>
            <h1 className="display-5 fw-bold text-body-emphasis text-center mb-5">Edit Task</h1>
            <input name="user" hidden value={userDetails ? formData.user = userDetails.id : ""} onChange={handleInputChange} type='number' />
            <div className="form-floating">
                <input 
                    name="title" 
                    value={formData.title} 
                    onChange={handleInputChange} 
                    type="text" className="form-control" placeholder="Task Title"  />
                <label htmlFor="floatingInput">Task Title</label>
            </div>
            <div className="form-floating mt-3">
                <textarea 
                    name="description" 
                    value={formData.description} 
                    onChange={handleInputChange} 
                    type="text" className="form-control" placeholder="Task Title" style={{height: "200px"}} />
                <label htmlFor="floatingInput">Task Description</label>
            </div>
            <div className="form-floating mt-3">
                    <select className="form-select" 
                      name="status"
                      value={formData.status} 
                      onChange={handleInputChange} 
                      >
                        <option value="False">Pending</option>
                        <option value="True">Completed</option>
                    </select>
                    <label>Task Status</label>
                </div>
            <button className="btn btn-warning w-100 py-2 mt-3" type="submit">Submit</button>
        </form>
    </div>
)
}

export default TaskEdit