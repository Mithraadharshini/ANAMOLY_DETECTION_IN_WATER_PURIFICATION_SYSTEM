import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css'; // Import your CSS file

function Dashboard() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    const handlePredictClick = () => {
        // Redirect to the Streamlit app
        window.location.href = 'https://anomaly-detections-k7pxdautrxyeusrluusmsu.streamlit.app/';
    };
    const handleLogout = () => {
        
        localStorage.removeItem('authToken');   // Assuming you're storing authToken in localStorage
        localStorage.removeItem('userInfo');    // Remove any other user-specific info
    
    
        navigate('/login');
      };
      
      const handleContactSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (send data to backend or display a thank you message)
        alert(`Thank you, ${name}. We have received your message.`);
        setName('');
        setEmail('');
        setMessage('');
    };

    
        
      
    return (
        <div>
            <h2 className="dashboard-title">Anomaly Detection in Water Purification System</h2> {/* Title above the container */}
            <div className="dashboard-container">
                <div className="about-us">
                    <p>
                        Our project focuses on anomaly detection in water purifiers. 
                        Anomaly detection helps identify unusual patterns or deviations 
                        from the normal functioning of the water purification system. 
                        By detecting these anomalies early, we can prevent potential 
                        failures, ensure the water's quality, and maintain the system's 
                        efficiency.
                    </p>
                </div>
                <div className="predict-button-container">
                <button className="predict-button" onClick={handlePredictClick}>
                Predict
                </button><br></br><br></br>
                
                </div>
            
            </div>
          
        {/* Contact Us Section */}
        <div className="contact-us-section">
        <h2 className="contact-us-title">Contact Us</h2>
        <form className="contact-us-form" onSubmit={handleContactSubmit}>
            <div className="form-group">
                <label>Name:</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required
                />
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required
                />
            </div>
            <div className="form-group">
                <label>Message:</label>
                <textarea 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    required
                />
            </div>
            <button type="submit" className="submit-button">Submit</button>
        </form>
    </div>

    <button className="logout-button" onClick={handleLogout}>
        <i className="fas fa-sign-out-alt"></i> Logout
    </button>
</div>


    );
}

export default Dashboard;
