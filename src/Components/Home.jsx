import { useState } from 'react'
import NavBar from './NavBar';
import '../Styles/home.css'
import Footer from '../Components/Footer'
import { MdFavoriteBorder } from "react-icons/md";
import backgorundImage from '/pexels-ivan-samkov-7621020.jpg'
const categories = [
  {
    text: "Electronics",
    image: "/phone.jpg",
    amount: 4.45,
    decription: "awesome producst with gaurantee",
    productName:"Phone"

  },
  {
    text: "Shoe",
    image: "/shoe.jpg",
    amount: 4.45,
    decription: "awesome producst with gaurantee",
    productName: "Shoe"
  },
  {
    text: "clothes",
    image: "/clothe.jpg",
    amount: 4.45,
    decription: "awesome producst with gaurantee",
    productName: "Shirts"
  },
  {
    text: "Jwells",
    image: "/jwells.jpg",
    amount: 4.45,
    decription: "awesome producst with gaurantee",
    productName: "chain"
  },
]
export default function Home() {
  const [categoryClick, setCategoryClicked] = useState(false)
  const [isFavoriteclicked, setIsFavoriteClicked] = useState(false)
  return (
    <div style={{width:"100vw", height:"100vh"}}>
      <NavBar/>
      <div className="card">
        <div className="content">
          <h2>New Collections</h2>
          <div className="discount" style={{ display: "flex" }}>
            <h3 style={{ fontSize: 80 }}>20</h3>
            <div style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
              <p>%</p>
              <p style={{ fontSize: 15, }}>off</p>
            </div>
          </div>
          <div className="button" style={{backgroundColor:"black",}}>
            <button style={{border:"none", background:"none", color:"white", fontWeight:'bold', paddingLeft:"8px", paddingRight:"8px", paddingTop:"5px", paddingBottom:"5px"}}>Shop Now</button>
          </div>
        </div>
        <div className="image">
          <img src={backgorundImage} alt="image" className='image' />
        </div>
      </div>


      <div className="categories">
        <h3 style={{marginTop:'1rem', marginBottom:"1rem", fontSize:26, fontWeight:"bold"}}>Categories</h3>
        <div className="category" style={{ display: "flex", gap: "2rem", overflowX: "auto", scrollBehavior:"smooth", scrollbarWidth:"none", }}>
          {
            categories.map((category, index) => {
              return (
                <div key={index}>
                  <div style={{ borderColor: `${categoryClick ? "rgb(245, 0, 41)" : ""}` }} onClick={() => { setCategoryClicked(!categoryClick) }}>
                    <img src={category.image} alt="image" style={{ objectFit: "cover", width: 80, height: 60, display: "block", borderRadius: "50%", marginBottom: "0.3rem", }} />
                  </div>
                  <p style={{textAlign:"center", fontWeight:500}}>{category.text}</p>
                </div>
              )
            })
          }
        </div>
          <div className="view-all">
            <h3 style={{fontSize:26}}>Explore</h3>
            <p onClick={()=>{}}>view all</p>
          </div>
      </div>
      <div className="recommend">
        {
          categories.map((item, index) => {
            return (
              <div key={index} className='card-recommend'>
                <img src={item.image} alt="" />
                <div className="recommend-content">
                  <MdFavoriteBorder className='favorite' onClick={() => { setIsFavoriteClicked(!isFavoriteclicked) }} style={{ color: `${isFavoriteclicked ? "rgb(245, 0, 41)" : ""}`, fontWeight: "bold" }} />
                  <p style={{ fontWeight: 200 }}>${item.amount}</p>
                  <h3 style={{maxLines:2, wordWrap:true,fontSize:16}}>{item.decription}</h3>
                  <p style={{fontWeight:200}}>{item.productName}</p>
                </div>
             </div>
           )
         })
        }
      </div>
      <Footer />
    </div>
  )
}
