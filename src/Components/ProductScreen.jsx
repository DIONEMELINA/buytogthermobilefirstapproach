import { useState } from 'react'
import '../Styles/productScreen.css'
import NavBar from './NavBar';
import Footer from './Footer'
import { MdFavoriteBorder } from "react-icons/md";
const categories = [
  {
    text: "Electronics",
    image: "/phone.jpg",
    amount: 4.45,
    description: "Awesome products with a guarantee",
    productName: "Phone",
  },
  {
    text: "Shoe",
    image: "/shoe.jpg",
    amount: 4.45,
    description: "Awesome products with a guarantee",
    productName: "Shoe",
  },
  {
    text: "Clothes",
    image: "/clothe.jpg",
    amount: 4.45,
    description: "Awesome products with a guarantee",
    productName: "Shirt",
  },
  {
    text: "Jewels",
    image: "/jwells.jpg",
    amount: 4.45,
    description: "Awesome products with a guarantee",
    productName: "Chain",
  },
];
  export default function ProductScreen() {
    const [categoryClick, setCategoryClicked] = useState(false);     
    const [isFavoriteClicked, setIsFavoriteClicked] = useState(false);

    

    return (
      <div style={{ height: "100vh", backgroundColor:"white", overflowY:"auto", overflowX:"hidden", display:"flex", flexDirection:"column"}}>
        {/* Navbar */}
        <NavBar/>
        {/* Body Content */}
        <div className="home-container" style={{ paddingLeft: "10px", paddingRight: "10px", flexGrow:1 }}>

          {/* Categories Section */}
          <div className="categories">
            <h3>Categories</h3>
            <div className="category" style={{ display: "flex", gap: "2rem", overflowX: "auto" }}>
              {categories.map((category, index) => (
                <div key={index} onClick={() => setCategoryClicked(!categoryClick)} style={{ textAlign: "center" }}>
                  <div style={{ borderColor: categoryClick ? "rgb(245, 0, 41)" : "" }}>
                    <img src={category.image} alt={category.text} style={{ width: 80, height: 60, borderRadius: "50%" }} />
                  </div>
                  <p>{category.text}</p>
                </div>
              ))}
            </div>
            <div className="view-all">
              <h3>Explore</h3>
              <p>view all</p>
            </div>
          </div>

          {/* Recommended Products */}
          <div className="recommend">
            {categories.map((item, index) => (
              <div key={index} className="card-recommend">
                <img src={item.image} alt={item.productName} />
                <div className="recommend-content">
                  <MdFavoriteBorder
                    className="favorite"
                    onClick={() => setIsFavoriteClicked(!isFavoriteClicked)}
                    style={{ color: isFavoriteClicked ? "rgb(245, 0, 41)" : "", fontWeight: "bold" }}
                  />
                  <p>${item.amount}</p>
                  <h3>{item.description}</h3>
                  <p>{item.productName}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer/>
      </div>
    );
  }
