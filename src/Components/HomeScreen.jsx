import Footer from "./Footer";
import NavBar from "./NavBar";
import '../Styles/homeScreen.css'
import Card from "./Card";
import { useEffect } from "react";
import { useAuth } from "../AuthenticationContext";
import { useNavigate } from "react-router-dom";

const data = [
    { heading: "Group Goals", subheading: "Create a Vision, Join a Movement", description: "At Unity Shop, we don’t just sell products—we build communities around shared goals! Users can create a Group Goal, outlining a purchase plan for a specific product or bulk order. Others who share the same vision can join, contributing their resources to unlock exclusive discounts and cost-sharing benefits. This collaborative approach ensures that no one shops alone, making premium products affordable and accessible to all.", navigate: "/createGroupGoal", action: "start now" },
    { heading: " Hassle-Free Delivery", subheading: "From Bulk to Your Doorstep", description: 'Once a group order is successfully funded, we handle the rest! Our seamless delivery system ensures that every item is packaged, shipped, and delivered with speed and reliability. Whether you prefer doorstep delivery or pickup from a central location, we provide flexible options tailored to your convenience. With real-time tracking and secure logistics partners, your order is always in safe hands.', action: "", navigate: "" },
    { subheading: "A Wide Range of Products for Every Need", heading: "", description: "From everyday essentials to exclusive bulk deals, Unity Shop offers a diverse range of high-quality products. Whether you’re looking for electronics, home essentials, groceries, fashion, or business supplies, you can find it all here—at unbeatable prices. Our platform is designed to bring people together to access premium products at wholesale rates, making every purchase a smart investment.", action: "view Product", navigate: "/productScreen" },
    {
        heading: "Easy & Secure Payment Options",
        description: "We prioritize security and flexibility when it comes to payments. Users can contribute their share through multiple trusted payment methods, including mobile money. Our escrow system ensures that funds are held securely until the group order is fulfilled, providing 100% transparency and protection for every transaction.", action: "", navigate: '',
        subheading: ""
    },

];


export default function HomeScreen() {
   const { user } = useAuth();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [user,navigate])
  
    return (
        <section className="main-section">
            <NavBar profile_pic={user.profile_pic} />
            
            <div className="home-body">
                <div>
                    <div className="background-image">
                        <h3 style={{ fontSize: "22px" }}>Unity Shop</h3>
                        <h2 style={{ color: "whitesmoke", fontSize: "20px" }}>A Marketplace for Collective Buying</h2>
                        <p>
                            Welcome to Unity Shop, the ultimate marketplace where collaboration meets affordability! We believe in the power of unity—helping individuals come together to achieve better deals, bulk discounts, and lower shipping costs. By leveraging group purchasing, we eliminate unnecessary expenses and make high-quality products more accessible. Whether you're a small business owner, a community group, or an individual shopper, our platform empowers you to buy smarter and save more.
                        </p>
                    </div>
                </div>
                <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                    {
                        data.map((item, index) => {
                            return (
                                <Card key={index} description={item.description} heading={item.heading} subheading={item.subheading} action={item.action} navigate={item.navigate}/>
                            )
                        })
                    }
                    
                </div>

            </div>
            <Footer />
        </section>
    )
}
