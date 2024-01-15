import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Auth = () => {
    const navigate = useNavigate();

  useEffect(() => {
    // Check for the presence of access_token and refresh_token in local storage
    const accessToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');

    if (!accessToken || !refreshToken) {
      // Redirect to the login page if tokens are missing
        return navigate('/login');
    }
  });

  useState(() => {
    // Check for the presence of access_token and refresh_token in local storage
    const accessToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');

    if (!accessToken || !refreshToken) {
      // Redirect to the login page if tokens are missing
        return navigate('/login');
    }else{
        return navigate('/');
    }
  });
};

export default Auth;
