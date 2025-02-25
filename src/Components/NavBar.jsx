import { useState } from 'react'
import { IoHome,} from "react-icons/io5";
import { MdClose } from 'react-icons/md';
import {GiHamburgerMenu} from 'react-icons/gi'
import { IoPersonOutline, IoLogOutOutline, IoSearchOutline, IoPeopleOutline, IoCart } from "react-icons/io5";
import '../Styles/navBar.css'
import assetProfile from '/images.jpg'
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const html = document.querySelector('html');
  html.addEventListener("click", ()=>setIsOpen(false))
  return (
    <nav>
      <div className="container">
        <div className="container1">
          <div className="profile-picture" style={{ backgroundImage: `url(${assetProfile})` }}>
          </div>
          <p style={{ color: "rgb(23, 3, 99)", fontWeight: "bold", fontSize: 23 }}>Unity<span style={{ color: "rgb(245, 0, 41)", fontWeight: "bold" }}>Shop</span></p>
        </div>

        <div className="container2">
          <IoCart size={25} />
          <div className="links-container" onClick={(e) => {
            e.stopPropagation();
          }}>
            <div className="toggle">
              {
                isOpen ? (
                  <MdClose onClick={() => setIsOpen(false)} size={50} color='green' />
                ) : <GiHamburgerMenu onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(true)
                }
                } size={25} />
              }
            </div>
            <div className={`links ${isOpen ? "responsive-toggle" : ""}`}>
              <ul>
                <div className="dropdown-item">
                  <IoHome size={20} color='white'/>
                  <li><a href="">Home</a></li>
                </div>
                <div className="dropdown-item">
                  <IoPersonOutline size={20}  color='white'/>
                  <li><a href="">Profile</a></li>
                </div>
                <div className="dropdown-item">
                  <IoSearchOutline size={20} color='white' />
                  <li><a href="">Search</a></li>
                </div>
                <div className="dropdown-item">
                  <IoPeopleOutline size={20}  color='white'/>
                  <li><a href="">Group-Goal</a></li>
                </div>
                <div className="dropdown-item">
                  <IoLogOutOutline size={20} color='white' />
                  <li><a href="">Logout</a></li>
                </div>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </nav>
      
   
  )
}
