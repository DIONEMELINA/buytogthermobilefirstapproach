import '../Styles/profile.css'
import NavBar from './NavBar'
import Footer from './Footer'
import assetProfile from '/images.jpg'
import { useAuth } from '../AuthenticationContext'

export default function Profile() {
    const { user } = useAuth();
    return (
        <div className="profile-container">
            <NavBar />
            <div style={{minHeight: "100%", width: "100vw", overflow:"auto", paddingTop:"180px"}}>
                <div className="profile-card">
                    <div className="profile-image">
                        <img src={assetProfile} alt="Profile" />
                    </div>
                    <div className="profile-info">
                        <p><strong>{ user.name}</strong></p>
                        <div className="divider"></div>
                        <p><strong>{ user.phone_number}</strong></p>
                        <div className="divider"></div>
                        <p><strong>{ user.email}</strong></p>
                        <div className="divider"></div>
                        {
                            user.address.length === 0 ? 'Address' : <p><strong>{user.address}</strong></p>
                        }
                        <div className="divider"></div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}
