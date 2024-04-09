import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GIRLPIC_URL } from '../utils/constants';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin(); // Indicate successful login
    navigate('/'); // Redirect to the main application
  };

  const loginStyles = {
    container: {
      display: 'flex',
      flexDirection: 'column', // Adjusted to stack elements vertically
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 40px)', // Adjusted to reduce space
    },
    loginBox: {
      backgroundColor: '#FFCBA4',  
      maxWidth: '400px',
      width: '100%',
      padding: '20px',
      boxSizing: 'border-box',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px', // Added margin at the bottom
    },
    input: {
      width: '100%',
      marginBottom: '15px',
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      boxSizing: 'border-box',
    },
    button: {
      width: '100%',
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    girlPic: {
        width: '400px', // Adjust width as needed
        height: 'auto', // Automatically adjust height to maintain aspect ratio
      },
  };

  return (
    <div style={loginStyles.container}>
      <div style={loginStyles.loginBox}>
        <h2>Please Enter Your Credentials</h2>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={loginStyles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={loginStyles.input}
        />
        <button
          onClick={handleLogin}
          style={loginStyles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = loginStyles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = loginStyles.button.backgroundColor)}
        >
          Login
        </button>
      </div>
      <div className='flex justify-center'>
        <img style={loginStyles.girlPic} src={GIRLPIC_URL} alt="Girl Pic" />
      </div>
    </div>
  );
}

export default Login;
