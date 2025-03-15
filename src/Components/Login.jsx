import { useAuth } from '../AuthenticationContext';
import '../Styles/login.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function Login() {
  const { login } = useAuth()
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [passwordError, setPasswordError] = useState('')
  const [emailError, setEMailError] = useState('')
  const [email, setEMail] = useState('');
  const [activateError, setActivateError] = useState(false);
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async () => {
   // e.preventDefault();
    if (!password) {
      setPasswordError('*fill this space')
    } else {
      setPasswordError('')
    }

    if (!email) {
      setEMailError('*fill this space')
    } else if (!emailRegex.test(email)) {
      setEMailError('invalid email')
    } else {
      setEMailError('')
    }

   

    if (password.length !=0 && emailRegex.test(email)) {
      try {
        await login({ email: email, password: password });
        navigate('/')
        setPassword('');
        setEMail('');

      } catch (error) {
        console.log(error)
      }
    } else {
      setActivateError(!activateError)
     // e.preventDefault();
    }
  }

  const handleRegister = () => {
    navigate('/register')
  }



  return (
    <div className="login-container">
      <div className="login-image">
        <img src='/photo_2025-02-18_15-14-02.jpg' alt="image" loading="eager" />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>Login</h1>
        <div className="input">
          <div className="input-container">
            <input type="email" required={true} placeholder='Email' value={email} onChange={(e) => setEMail(e.target.value)}  name='email' autoComplete='email' />
            {
              activateError==false && emailError.length > 0 ? <p>{emailError}</p> : ''
            }
          </div>

          <div className="input-container">
            <input type="password" required={true} placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} name='password' />
            {
              activateError && passwordError.length > 0 ? <p>{passwordError}</p> : ""
            }
          </div>
        </div>
        <div className="a">
          <p>Dont have an account?<span className='register-color' onClick={handleRegister}>Register</span></p>
          <p className='forgotPassword-color'>forgot password</p>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "80%", marginLeft: "auto", marginRight: "auto" }}>
          <button onClick={handleSubmit} className='loginButton'>Submit</button>
        </div>
      </div>

    </div>
  )
}
