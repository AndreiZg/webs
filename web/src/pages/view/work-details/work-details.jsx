import './work-details.css'
import { ReactComponent as BottomLeft } from '../../../assets/arrows/bottom-left.svg'


const WorkDetails = () =>{
    return(
        <>
            <div className="work-details">
                <div className="projects-title">
                    <h5>Home / Portfolio<span>  Landing Page</span></h5>
                </div>
                <div className="details-wrapper">
                    <div className="title">
                        <h1>The BOATS - In-Person Boat Monitoring</h1>
                        <h6><span>Let's examine</span> one of our case studies, offering insights
                            into our capabilities. While each case is distinct, it provides a glimpse into our
                            expertise. We're open to discussing various topics except those related to DNA</h6>
                        <BottomLeft/>
                    </div>
                </div>
                <div className="details-description">
                    <div className="description-container">
                        <div className="details-title">
                            <h1>Client</h1>
                        </div>
                        <div className="detils-description">
                            <h3>The BOATS - Cross-continental security service provider</h3>
                        </div>
                    </div>
                    <div className="description-container">
                        <div className="details-title">
                            <h1>Challenge</h1>
                        </div>
                        <div className="detils-description">
                            <ul>
                                <li>To create brand identity from scratch</li>
                                <li>To create website</li>
                                <li>To offer payment solutions</li>
                                <li>To provide secure and privacy about yachts/boats owners</li>
                                <li>To provide custom support 24/7</li>
                            </ul>
                        </div>
                    </div>
                    <div className="description-container">
                        <div className="details-title">
                            <h1>Solution</h1>
                        </div>
                        <div className="detils-description">
                            <ul>
                                <li>Brandbook</li>
                                <li>Website</li>
                                <li>Customer service management</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default WorkDetails;