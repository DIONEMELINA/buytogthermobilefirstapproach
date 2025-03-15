import { useState } from 'react';
import '../Styles/cart.css'
import { useNavigate } from 'react-router';
import { MdArrowBack } from "react-icons/md";
export default function Cart() {
  const [items, setItems] = useState([]);
  const updateQuantity = (id, change) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
    ));
  };

  const clearCart = () => setItems([]);
  const navigate = useNavigate();
  const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const savings = items.reduce((total, item) => total + ((item.oldPrice || item.price) - item.price) * item.quantity, 0);
  return (
    <>
      {
        items.length == 0 ?
          <div className='empty-array'>
              <div style={{display:"flex", justifyContent:"center", gap:"80px"}}>
                <MdArrowBack size={25} color='black' onClick={() => navigate(-1)} />
                <h2>CART</h2>
              </div>
            <div className="body">
              <h3 >YOUR CART IS</h3>
              <h3>EMPTY</h3>
              <p >looks like you havent added</p>
              <p >anything to your cart yet</p>

              <button>Browse Products</button>
            </div>

          </div> :
          <>
          <div className='cart-container'>
            <nav>
                <div className="cart-header">
                  <MdArrowBack size={25} color='black' onClick={()=>navigate(-1)}/>
                <h2>CART</h2>
                <button onClick={clearCart} className="clear-cart">CLEAR CART</button>
              </div>
            </nav>
            {items.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="cart-brand">{item.brand}</p>
                  <p className="cart-price">{item.price.toFixed(2)} € <span className="old-price">{item.oldPrice ? item.oldPrice.toFixed(2) + " €" : ""}</span></p>
                </div>
                <div className="cart-quantity">
                  <button onClick={() => updateQuantity(item.id, -1)} className="quantity-btn">−</button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} className="quantity-btn">+</button>
                </div>
              </div>
            ))}

            <div className="cart-summary">
              <p className="cart-items-count">4 Items</p>
              <p className="cart-savings">You save <strong>-{savings.toFixed(2)} €</strong></p>
                <p className="cart-total">TOTAL: {totalAmount.toFixed(2)} €</p>
                <button>Check Out</button>
            </div>
            </div>
            </>
      }</>
  )
}
