import '../Styles/card.css'
import { useNavigate } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
export default function Card({ heading, subheading, description, navigate, action }) {
    const navigateRoute = useNavigate();
    return (
        <div className="Card-container">
            <h2 style={{ marginTop: "5px" , textAlign:"center"}}>{ heading}</h2>
            <h2 style={{ marginTop: "5px", marginBottom: "5px" , textAlign:"center", textWrap:'wrap'}}>{ subheading}</h2>
            <p>
                {description }
            </p>
            {
                // eslint-disable-next-line react/prop-types
                action.length == 0 ? "" : <button className='card-button' onClick={() => navigateRoute(navigate)}>{action}</button>
            }
            
        </div>
    )
}
