import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import './LoginPage.css'
import video from './videoplayback.mp4'
function LoginPage() {
  const history = useHistory();

  return (
    <div className='content'>

<video className = "loginVideo" src= {video} autoPlay loop muted

></video>
  
      <LoginForm />

      <center>
        <button
          type="button"
          className="btn btn_asLink "
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </button>
      </center>
 
    </div>
  );
}

export default LoginPage;
