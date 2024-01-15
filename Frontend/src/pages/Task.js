import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const Task = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://127.0.0.1:8000/task/',{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                  },
            });
            setData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);
      if (loading) {
        return <p>Loading...</p>;
      }
  return (
    <div className='container'>
        <div className='row'>
            {
                data.map(item => (
                    <div className='col-md-4 p-3' key={item.id}>
                        <Card data={item} />
                    </div>
                ))
            }
        </div>
        
    </div>
  )
}

export default Task