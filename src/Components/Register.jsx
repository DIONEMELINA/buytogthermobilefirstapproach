import "../Styles/register.css"
export default function Register() {

  return (

    <div className="container">
      <div className="image">
        <img src='/photo_2025-02-18_15-16-22.jpg' alt="image" loading="eager"/>
      </div>
      <h1>Register</h1>
      <div className="input">
        <div className="input-container">
          <input type="text" required={true} placeholder='Name' />
        </div>
        <div className="input-container">
          <input type="email" required={true} placeholder='Email' />
        </div>

        <div className="input-container">
          <input type="text" required={true} placeholder='Password' />
        </div>
        <div className="input-container">
          <input type="text" required={true} placeholder='Contact' />
        </div>
      </div>
      <div className="account-check">
        <p >Already have an account? <a href="" style={{ textDecoration: "none" }}>Login</a></p>
      </div>
      <div className="button">
        <button>Submit</button>
      </div>
    </div>
  )
}
