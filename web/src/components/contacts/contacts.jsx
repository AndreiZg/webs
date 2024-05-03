import './contacts.css';

const Contacts = () =>{
    return(
        <div className='contacts'>
            <div className="join-team__form">
                <h2 className='join-team__title'>Want to join the team?</h2>
            </div>
            <div className="contact-info__form">
                <div className="contact-info__body">
                    <p>We will help you understand and answer all your questions</p>
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