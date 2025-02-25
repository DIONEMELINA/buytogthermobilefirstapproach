import '../Styles/uploadImage.css'
import cameraImage from '/camera.png'

export default function UploadImage() {
  return (
      <div className="container">
          <div className="navBar">
              <a href="">
                  <h3>
                      Skip
                  </h3>
              </a>
          </div>
          <div className='camera' style={{ backgroundImage: `url(${cameraImage})` }}>
          </div>
          <div className="button">
              <button>Upload Image</button>
        </div>

    </div>
  )
}
