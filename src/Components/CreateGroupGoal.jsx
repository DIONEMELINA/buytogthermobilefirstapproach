import { useState } from 'react'
import '../Styles/creategroupgoal.css'
import { MdArrowBack } from "react-icons/md";
import Footer from './Footer'
import { CreateGoal } from '../purchaseService';
import { useNavigate } from 'react-router-dom';

export default function CreateGroupGoal() {
    const [title, setTitle] = useState('');
    const [titleError, setTitleError] = useState('');
    const [descriptionError, setDescriptionError] = useState('')
    const [description, setDescription] = useState('');
    const [target_amount, setTarget_Amount] = useState('')
    const [targetAmountError, setTargetAmountError] = useState('')
    const [product_name, setProduct_name] = useState('');
    const [productnameError, setProductNameError] = useState('')
    const [product_description, setProduct_Description] = useState('');
    const [product_descriptionError, setProduct_DescriptionError] = useState('');
    const [product_unit_price, setProduct_Unit_Price] = useState('');
    const [productUnitPriceError, setProductUnitPriceError] = useState('')
    const [product_bulk_price, setProduct_Bulk_Price] = useState('');
    const [productBulkPriceError, setProductBulkPriceError] = useState('')
    const [product_quantity, setProduct_Quantity] = useState('');
    const [productQuantityError, seProductQuantityError] = useState('')
    const [imageError, setImageError] = useState('')
    const [image, setImage] = useState('');
    const [group_link, setGroup_Link] = useState('');
    const [groupLinkError, setGroupLinkError] = useState('')
    const [startDate, setStartDate] = useState('');
    const[startDateError, setStartDateError] = useState('')
    const [endDate, setEndDate] = useState('')
    const [enddateError, setEndDateError]=useState('')
      
    const navigate = useNavigate();

    const handleTargetAmount = (e) => {
        const newTargetAmount = e.target.value;
        if (!/^[0-9]*$/.test(newTargetAmount)) {
            setTargetAmountError('*Enter a n')
        } else {
            setTarget_Amount(newTargetAmount);
        }
    }

    const handleProductUnitPrice = (e) => {
       const newProductUnitPrice = e.target.value;
        if (!/^[0-9]*$/.test(newProductUnitPrice)) {
            return;
        } else {
            setProduct_Unit_Price(newProductUnitPrice)
        }
    }

    const handleProductBulkPrice = (e) => {
        const newProductBulkPrice = e.target.value
        if (!/^[0-9]*$/.test(newProductBulkPrice)) {
            return;
        } else {
            setProduct_Bulk_Price(newProductBulkPrice);
        }
    }

    const hnadleBackClick = () => {
        navigate(-1)
    }

    const handleProductQuantity = (e) => {
        const newProductQuantity = e.target.value;
        if (!/^[0-9]*$/.test(newProductQuantity)) {
            return;
        } else {
            setProduct_Quantity(newProductQuantity)
        }
    }
    
    const handleImageUpload = (e) => {
        const selectedFile = e.target.files[0];
        const fileSize = selectedFile.size / 1024;
        if (fileSize > 51200) {
            setImageError('*file shouldnt be more that 51.2MB')
        } else {
            setImage(selectedFile)
        }
    }

    const handleSubmit = async (e) => {
        let errors = {}
        e.preventDefault();
        if (!title) {
            errors.titleError='*fill this space';
        } else if (title.length > 255) {
            errors.titleError='*title should not be more than 255 character'
        }

        if (!description) {
            errors.descriptionError='*fill this space';
        }

        if (!target_amount) {
            errors.targetAmountError='*fill this space';
        } 

        if (!product_name) {
            errors.productnameError='*fill this space';
        } 

        if (!product_description) {
            errors.product_descriptionError='*fill this space';
        } 

        if (!product_unit_price) {
            errors.productUnitPriceError='*fill this space';
        }
        if (!product_bulk_price) {
        errors.productBulkPriceError='*fill this space'
        }
        if (!product_quantity) {
            errors.productQuantityError='*fill this space'
        }
        if (!startDate) {
            errors.startDateError='*fill this space';
        }
        if (!endDate) {
            errors.enddateError='*fill this space';
        }
        if (!group_link) {
            errors.groupLinkError='*fill this space';
        }
        if (imageError.length > 0) {
            errors.imageError = imageError;
        }
        setTitleError(errors.titleError || '');
        setDescriptionError(errors.descriptionError || '');
        setTargetAmountError(errors.targetAmountError || '');
        setProductNameError(errors.productnameError || '');
        setProduct_DescriptionError(errors.product_descriptionError || '');
        setProductUnitPriceError(errors.productUnitPriceError || '');
        setProductBulkPriceError(errors.productBulkPriceError || '');
        seProductQuantityError(errors.productQuantityError || '');
        setStartDateError(errors.startDateError || '');
        setEndDateError(errors.enddateError || '');
        setGroupLinkError(errors.groupLinkError || '');

        if (Object.keys(errors).length === 0) {
            try {
                await CreateGoal({ title: title, description: description, target_amount: target_amount, product_name: product_name, product_description: product_description, product_unit_price: parseInt(product_unit_price,10), product_bulk_price: parseInt(product_bulk_price,10), product_quantity: parseInt(product_quantity,10), group_link: group_link, start_date: startDate, end_date: endDate, product_image: image })
                navigate(-1);
            } catch (error) {
                alert('Goal creation failed!, check your internet connection');
                console.log(error)
            }
           
        }    
        else {
            console.log('failed');
      }
    }
  return (
      <div className="main-container">
          <nav>
              <div className='navBar'>
                 <MdArrowBack color='black' size={25} onClick={hnadleBackClick}/>
                  <h3>CreateGroupGoal</h3>
              </div>
              
          </nav>
          <div className="groupgoal-body">
              <div className="body-container">
                  <div className="content-container">
                      <h3>Group name</h3>
                      <input type="text" required={true} maxLength={255} value={title} onChange={(e) => setTitle(e.target.value)} />
                      {
                          titleError.length > 0 ? <p>{ titleError}</p> : ""
                      }
                  </div>
                  <div className="content-container">
                      <h3>Group description</h3>
                      <input type="text" required={true} value={description} onChange={(e) => setDescription(e.target.value)} />
                      {
                          descriptionError.length > 0 ? <p>{ descriptionError}</p> : ""
                      }
                  </div>
                  <div className="content-container">
                      <h3>Target amount</h3>
                      <input type="text" pattern='[0-9]*' required={true} value={target_amount} onChange={handleTargetAmount} />
                      {
                          targetAmountError.length > 0 ? <p>{targetAmountError }</p> :""
                      }
                  </div>
                  <div className="content-container">
                      <h3>Product name</h3>
                      <input type="text" required={true} value={product_name} onChange={(e) => setProduct_name(e.target.value)} />
                      {
                          productnameError.length > 0 ? <p>{ productnameError}</p>:""
                      }
                  </div>
                  <div className="content-container">
                      <h3>Product description</h3>
                      <input type="text" required={true} value={product_description} onChange={(e) => setProduct_Description(e.target.value)} />
                      {
                          product_descriptionError.length > 0 ? <p>{product_descriptionError }</p>:""
                      }
                  </div>
                  <div className="content-container">
                      <h3>Product unit price</h3>
                      <input type="text" pattern='[0-9]*' required={true} value={product_unit_price} onChange={handleProductUnitPrice} />
                      {
                          productUnitPriceError.length > 0 ? <p>{ productUnitPriceError}</p> : ""
                      }
                  </div>
                  <div className="content-container">
                      <h3>Product bulk price</h3>
                      <input type="text" pattern='[0-9]*' required={true} value={product_bulk_price} onChange={handleProductBulkPrice} />
                      {
                          productBulkPriceError.length > 0 ? <p>{ productBulkPriceError}</p> :""
                      }
                  </div>
                  <div className="content-container">
                      <h3>Product quantity</h3>
                      <input type="text" pattern='[0-9]*' required={true} value={product_quantity} onChange={handleProductQuantity} />
                      {
                          productQuantityError.length > 0 ? <p>{ productQuantityError}</p> : ""
                      }
                  </div>
                  <div className="content-container">
                      <h3>Product image</h3>
                      <input type="file" name='file' onChange={handleImageUpload} />
                      {
                          imageError.length > 0 ? <p>{ imageError}</p>  :''
                      }
                  </div>
                  <div className="content-container">
                      <h3>Whatsapp group link</h3>
                      <input type="text" required={true} value={group_link} onChange={(e) => setGroup_Link(e.target.value)} />
                      {
                          groupLinkError.length > 0 ? <p>{ groupLinkError}</p> :""
                      }
                  </div>
                  <div className="content-container">
                      <h3>Start date</h3>
                      <input type="date" required={true} value={startDate} onChange={(e) => {
                          const date = e.target.value
                          setStartDate(date);
                      }} />
                      {
                          startDateError.length > 0 ? <p>{ startDateError}</p> :""
                      }
                  </div>
                  <div className="content-container">
                      <h3>End date</h3>
                      <input type="date" required={true} value={endDate} onChange={(e) => {
                          const date = e.target.value;
                          setEndDate(date)
                      }} />
                      {
                          enddateError.length > 0 ? <p>{enddateError }</p> :""
                      }
                  </div>
                  <button className='group-goal-button' onClick={handleSubmit}>Create Goal</button>
              </div>
          </div>
          <Footer/>
    </div>
  )
}
