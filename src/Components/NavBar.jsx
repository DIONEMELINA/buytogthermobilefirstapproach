import { useEffect, useState} from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { MdArrowBack } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoPersonOutline, IoLogOutOutline, IoSearchOutline,IoCart } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import '../Styles/navBar.css';
import { useAuth } from '../AuthenticationContext';

// eslint-disable-next-line react/prop-types
export default function NavBar({profile_pic}) {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isRouteOnProduct, setIsROuteOnProduct] = useState(false)

  const handleLogOut =  () => {
    try {
      logout();
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }
  const html = document.querySelector('html');
  html.addEventListener('click', () => setIsOpen(false))

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/productScreen') {
      setIsROuteOnProduct(true);
    } else {
      setIsROuteOnProduct(false)
    }
    
  },[location])

  

  return (
    <div className='header' style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        {
          isRouteOnProduct ? <MdArrowBack size={25} color='black' onClick={()=>navigate(-1)}/> : ""
        } 
        profile_pic ? <div className="profile-picture"><IoPersonOutline size={30}/></div>
        }
        <p style={{ color: "rgb(23, 3, 99)", fontWeight: "bold", fontSize: 23 }}>
          Unity<span style={{ color: "rgb(245, 0, 41)", fontWeight: "bold" }}>Shop</span>
        </p>
      </div>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        {
          isRouteOnProduct ? <IoCart size={25} color='black'  onClick={()=>navigate('/cart')}/> :""
        }
        <div className="links-container" onClick={(e)=>e.stopPropagation()}>
          <div className="toggle">
            {isOpen ? (
              <IoMdClose size={30} onClick={() => setIsOpen(false)} color='black' />
            ) : (
              <GiHamburgerMenu onClick={() => setIsOpen(true)} size={25} />
            )}
          </div>
          <div className={`links ${isOpen ? "responsive-toggle" : ""}`}>
            <ul>
              <NavLink to="/" className="dropdown-item">
                <IoHome size={22} color="black" />
                <li>Home</li>
              </NavLink>
              <NavLink to="/profile" className="dropdown-item">
                <IoPersonOutline size={22} color="black" />
                <li>Profile</li>
              </NavLink>
              <NavLink to="/group" className="dropdown-item">
                <FaUsers size={22} color="black" />
                <li>Groups</li>
              </NavLink>

              <NavLink to="/search" className="dropdown-item">
                <IoSearchOutline size={22} color="black" />
                <li>Search</li>
              </NavLink>
              <div className="dropdown-item" onClick={handleLogOut}>
                <IoLogOutOutline size={22} color="black" />
                  <li><span style={{fontSize:"18px", color:'black', textTransform:"capitalize", fontWeight:500}}>Logout</span></li>
                
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
