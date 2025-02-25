import '../Styles/login.css'

export default function Login() {
  return (
    <div className="container">
      <div className="image">
        <img src='/photo_2025-02-18_15-14-02.jpg' alt="image" loading="eager" />
      </div>
      <h1>Login</h1>
      <div className="input">
        <div className="input-container">
          <input type="email" required={true} placeholder='Email' />
        </div>

        <div className="input-container">
          <input type="text" required={true} placeholder='Password' />
        </div>
      </div>
      <div className="a">
        <p>Dont have an account?<a href="">Register</a></p>
        <a href="">Forgot Password</a>
      </div>
      <div className="button">
        <button>Submit</button>
      </div>
    </div>
  )
}
