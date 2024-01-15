import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Profile = () => {
    const [userDetails, setUserDetails] = useState(null);
    useEffect(() => {
        const fetchUserDetails = async () => {
          try {
            const response = await axios.get('http://127.0.0.1:8000/ac/profile/', {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
              },
            });
            setUserDetails(response.data);
          } catch (error) {
            console.error('Error fetching user details:', error);
          }
        };
        fetchUserDetails();
      }, []);    
    return (
        <div>
              {userDetails ? (
                <div>
                  <div className="px-4 py-5 my-5 text-center">
                    <img className="d-block mx-auto mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3g0kIKYCB-w9U0l4Srnvq3s7KLnR6JnArw&usqp=CAU" alt="" width="100" height="100" />
                    <h1 className="display-5 fw-bold text-body-emphasis">{userDetails.name}</h1>
                    <div className="col-lg-6 mx-auto">
                      <p className="lead mb-4">{userDetails.email}</p>
                      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <Link to="/" className="btn btn-outline-primary me-2 px-4">Home</Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <p>Loading user details...</p>
              )}


        </div>
    )
}

export default Profile