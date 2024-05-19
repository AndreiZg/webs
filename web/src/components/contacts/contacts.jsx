import './contacts.css';

const Contacts = (props) =>{
    return(
        <div className='contacts'>
            <div className="join-team__form">
                <h2 className='join-team__title'>{props.title}</h2>
            </div>
            <div className="contact-info__form">
                <div className="contact-info__body">
                    <p>We are constantly searching for talented individuals to provide top-tier services for our clients. If you believe you are the right fit, don't hesitate to apply now!</p>
                </div>
                <div className="second-part">
                    <div className="input-form">
                        <div className="name-input">
                            <input placeholder='Name'/>
                        </div>
                        <div className="email-input">
                            <input type="email" placeholder='Email'/>
                        </div>
                    </div>
                    <div className="consultation-button">
                        <button>Order a consultation</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts;