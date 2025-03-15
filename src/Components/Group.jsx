import Footer from './Footer'
import NavBar from './NavBar'
import '../Styles/group.css'
import { FaUsers } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { useGroup } from '../purchaseContext';
;

export default function Group() {
  const navigate = useNavigate();
  const Group =[]

  const { Groups, ListOfGroup } = useGroup();

  useEffect(() => {
    ListOfGroup()
   console.log("Group State", Groups)
  },[])
 
  return (
    
    <section style={{width:"100vw", height:"100vh", overflow:"auto"}}>
      <NavBar />
        {
          Groups.length == 0 ?
            <div style={{ minHeight: "70%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "auto", gap:"2px", paddingLeft:"20px", paddingRight:"20px" }}>
              <h3 style={{fontSize:"25px", fontWeight:"bold"}}>Start Now</h3>
              <p style={{fontWeight:"500px", fontSize:"18px", marginTop:"5px",}}>Create your own goal and enjoy bulk purchases.</p>
              <button onClick={()=>navigate('/createGroupGoal')} className='group-button'>Create Goal</button>
          </div> :
          <div style={{minHeight: "100%", display: "flex", flexDirection: "column", overflow: "auto", gap:"2px",paddingTop:"100px", alignItems:"flex-start", justifyContent:"center"}}>
            {Groups.map((item, index) => {
              return (
                <div key={index} className='group-collection'>
                  <div style={{ display: "flex", alignItems:'center', justifyContent:'space-between', width:'100%'}}>
                    <div className='group-image'>
                      {
                        item.product && item.product.product_image ? <img src={item.product.product_image} alt="product_image" /> : <FaUsers size={30} color="black" style={{display:"flex", alignItems:"center", justifyContent:"center" }} />
                      }
                      <div style={{ display: 'flex', alignItems: "flex-start", justifyContent: "center", flexDirection: "column", gap: "2px",}}>
                        <h2 style={{fontSize:"18px", fontWeight:"bold"}}>{item.title}</h2>
                        <p style={{fontSize:'15px', fontWeight:"lighter"}}>participant {item.number_of_participants}</p>
                      </div>
                    </div>
                    <div style={{display:'flex', alignItems:"center", justifyContent:"center"}}>
                      <a href={item.group_link} style={{ color: "blue" }}>Jion </a>
                    </div>
                      
                  </div>
                  <div className="divider"></div>
              </div>
            )
          })}
          </div>
        }
      <Footer/>
    </section>
  )
}
