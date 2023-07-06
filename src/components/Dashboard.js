import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();

            setTimeout(() => {
                navigate("/");
            }, 2000);


    return(
        <div style={{color: "white"}}>
            <h1>Welcome {location.state.username}</h1>
            <p>Redirecting you to Home Page...</p>
        </div>
    )
}

export default Dashboard;