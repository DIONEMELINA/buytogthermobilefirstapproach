import '../Styles/footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="container-footer">
      <div className='footer-navbar'>
        <Link to='/'> <li>Home</li></Link>
        <Link to='/profile'><li>Profile</li></Link>
        <Link to='/search'><li>Search</li></Link>
        <Link to='/group'><li>Groups</li></Link>

      </div>
      <h3 className="footer-heading">Contact Us</h3>
      <div className="footer-contact-container">
        <div className="footer-contact-item">
          <img src="" alt="WhatsApp Icon" className="footer-icon" />
          <a href="https://wa.me" className="footer-link">WhatsApp</a>
        </div>
        <div className="footer-contact-item">
          <img src="" alt="Instagram Icon" className="footer-icon" />
          <a href="https://instagram.com" className="footer-link">Instagram</a>
        </div>
        <div className="footer-contact-item">
          <img src="" alt="LinkedIn Icon" className="footer-icon" />
          <a href="https://linkedin.com" className="footer-link">LinkedIn</a>
        </div>
        <div className="footer-contact-item">
          <img src="" alt="Twitter Icon" className="footer-icon" />
          <a href="https://twitter.com" className="footer-link">Twitter</a>
        </div>
      </div>
      <p className="footer-copy">@unityShop2024</p>
    </div>
  );
}
