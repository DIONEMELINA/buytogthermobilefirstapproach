import { useEffect, useState } from 'react';
import '../Styles/product_full_view.css'
export default function Product_full_view() {
    const [value, setValue] = useState(JSON.parse(localStorage.getItem('value'))||0);
    const categories = [
        {
            text: "Electronics",
            image: "/phone.jpg",
            amount: 4.45,
            decription: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quod. Odio suscipit sequi, repellendus quos ipsam praesentium ducimus quo quis consectetur provident dolorem sed nam, architecto, doloremque assumenda expedita et? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quam mollitia amet labore doloribus provident repudiandae nam, autem, corporis nobis laudantium? Eum impedit ab veritatis ex sit deserunt magnam debitis saepe ducimus mollitia? Debitis voluptate fugiat maxime provident consectetur. Assumenda explicabo velit molestias sint praesentium ex perspiciatis, nulla voluptatibus repudiandae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, adipisci eius ipsa accusamus blanditiis in pariatur, ipsam inventore consectetur distinctio nesciunt, cumque beatae asperiores? Doloribus numquam assumenda sit ab? Pariatur quasi asperiores totam vitae eius accusamus minus, laboriosam sapiente animi ratione alias aut odio consequuntur recusandae illo. Ad, nisi ipsa!",
            productName: "Phone"

        },
    ];
    const addProductQuantity = () => {
        setValue(prevValue => prevValue +1)
    }
    const subtractProductQuantity = () => {
        if (value == 0) {
            setValue(value)
        } else {
            setValue(prevValue => prevValue - 1)
        } 
        
    }
    useEffect(() => {
        localStorage.setItem('value', JSON.stringify(value));
    },[value]);
  return (
      <div className='main-container'>
          <div className="image">
              <img src={categories[0].image} alt="" />
          </div>
          <div className='content'>
              <p className='description'>{categories[0].decription}</p>
              <p className='quantity-p'>Quantity</p>
              <div className='quantity'>
                  <p className='value-p'>{value}</p>
                  <div className="button-div">
                      <button className='add-subtract' onClick={addProductQuantity}>+</button>
                      <button className='add-subtract' onClick={subtractProductQuantity}>-</button>
                  </div>
              </div>
              <div className="button">
                  <button className='button1'>Add to Cart</button>
                  <button className='button2'>Create GroupGoal</button>
              </div>
          </div>
          
    </div>
  )
}
