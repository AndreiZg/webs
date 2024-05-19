import './services.css'
import ServiceData from "../../../helpers/serviceData";
import { ReactComponent as BottomLeft } from '../../../assets/arrows/bottom-left.svg'

const Services = () => {
    return(
        <div className='services'>
            <div className="title">
                <h1>Our Services</h1>
                <BottomLeft/>
            </div>
            <div className="container-cards">
                <ServiceData/>
            </div>
            <div className="services-btn">
                <button>Contact Us</button>
            </div>
        </div>
    )
}

export  default Services