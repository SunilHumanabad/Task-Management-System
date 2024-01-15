import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';


import { NavLink, useNavigate } from 'react-router-dom';
const Card = ({data}) => {
  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      // Send a DELETE request to delete the record
      await axios.delete(`http://127.0.0.1:8000/task/${data.id}/`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        }
    });
      alert('Record deleted successfully!');
      navigate('/')
      // Optionally, you can redirect or perform other actions after deletion
    } catch (error) {
      console.error('Error deleting record:', error);
    }
  };
  return (
    <div>
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <p className="fst-italic m-0">Last Update: {data.updated_at}</p>
                <span className={data.status ? "badge text-bg-success rounded-pill" : "badge text-bg-secondary rounded-pill"}>{data.status ? "Completed" : "Pending"}</span>
            </div>
            <div className="card-footer">
                <Link to={`/task-edit/${data.id}`} className='btn btn-warning'>Edit</Link>
                <button onClick={handleDelete} className='btn btn-danger mx-2'>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default Card