import { useState } from "react"
import "../Styles/register.css"
import { useAuth } from "../AuthenticationContext";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const [email, setEMail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState('');
  const [name, setName] = useState('')
  const [imageError, setImageError] = useState('');
  const [passwordError, setPasswordError] = useState('')
  const [emailError, setEMailError] = useState('')
  const [contactError, setContactError] = useState('')
  const [nameError, setNameError] = useState('');
  const [activateError, setActivateError] = useState(false);
  const [confirmed_password, setConfirmed_Password] = useState('');
  const [confirmed_password_Error, setConfirmed_Password_Error] = useState('')
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const { registerUser } = useAuth();
  const navigate = useNavigate();
  
  const handleImageUpload = (e) => {
    const selectedFile = e.target.files[0];
    const fileSize = selectedFile.size / 1024;
    if (fileSize > 51200) {
      setImageError('*file shouldnt be more that 51.2MB')
    } else {
      setImage(selectedFile)
    }

  }

  const handleContact = (e) => {
    const newPhone = e.target.value;
    if (!/^[0-9]*$/.test(newPhone)) {
      return;
    } else {
      setPhone(newPhone)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      setNameError('*fill this space')
    } else {
      setNameError('')
    }
    if (!email) {
      setEMailError('*fill this space')
    } else if (!emailRegex.test(email)) {
      setEMailError('invalid email')
    } else {
      setEMailError('')
    }
    if (!phone) {
      setContactError('*fill this space')
    } else if (phone.length<9) {
      setContactError('*contact must be 9 digits')
    } else {
      setContactError('')
    }
    if (!password) {
      setPasswordError('*fill this space')
    } else if (password.length <= 7) {
      setPasswordError('*password should be atleast 8 characters')
    } else {
      setPasswordError('')
    }
    if (confirmed_password !== password) {
      setConfirmed_Password_Error('*wrong password')
    } else if (!confirmed_password) {
      setConfirmed_Password_Error('*fill this space')
    } else {
      setConfirmed_Password_Error("")
    }

    if (password.length>=8 && phone.length==9 && emailRegex.test(email) && name.length>0 && imageError.length == 0 && confirmed_password===password) {
      try {
        await registerUser({ name: name, email: email, contact: parseInt(phone, 10), password: password, password_confirmation: confirmed_password, address: address, image: image });
        alert("successful");
        navigate('/login')

      } catch (error) {
        alert("Registration failed! try again.", error.message)
      }
    } else {
      setActivateError(!activateError)
    }
  }

  const handleLogin = () => {
    navigate(-1);
  }
    return (

      <div className="register-container">
        <div className="register-image">
          <img src='/photo_2025-02-18_15-16-22.jpg' alt="image" loading="eager" />
        </div>
        <h1>Register</h1>
        <div className="input">
          <div className="input-container">
            <input type="text" required={true} placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            {
              activateError && nameError.length > 0 ? <p>{nameError}</p> : ''
            }
          </div>
          <div className="input-container">
            <input type="email" required={true} placeholder='Email' value={email} onChange={(e) => setEMail(e.target.value)} />
            {
              activateError && emailError.length > 0 ? <p>{emailError}</p> : ''
            }
          </div>

          <div className="input-container">
            <input type="password" required={true} placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            {
              activateError && passwordError.length > 0 ? <p>{passwordError}</p> : ""
            }
          </div>
          <div className="input-container">
            <input type="password" required={true} placeholder='confirmed password' value={confirmed_password} onChange={(e) => setConfirmed_Password(e.target.value)} />
            {
              activateError && confirmed_password_Error.length > 0 ? <p>{ confirmed_password_Error}</p> :""
            }
          </div>
          <div className="input-container">
            <input type="text" required={true} placeholder='Contact' value={phone} onChange={handleContact} />
            {
              activateError && contactError.length > 0 ? <p>{contactError}</p> : ''
            }
          </div>
          <div className="input-container">
            <input type="text" required={true} placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className="input-container" >
            <input type="file" placeholder='Upload image' name="file" onChange={handleImageUpload} />
            {
              activateError && imageError.length > 0 ? <p>{ imageError}</p> : ''
            }
          </div>
        </div>
        <div className="account-check">
          <p >Already have an account?<span style={{ color:"#0056b3", fontSize:"18px", fontWeight:"bold"}} onClick={handleLogin}>Login</span></p>
        </div>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "80%", marginLeft: "auto", marginRight: "auto" }}>
          <button onClick={handleSubmit} className="registerButton">Submit</button>
        </div>

      </div>
    )
  }
