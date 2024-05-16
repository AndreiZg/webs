import './welcome.css'

const Welcome = () =>{
    return(
        <div className="home">
            <div className="container">
                <h1 className='main-title'>
                    <span className="welcome">Welcome to <span className='welcome-text'>KostCode</span></span>
                </h1>
                <div className="bottom-text">
                    <h3>
                        European IT company that offers<span> a
                    range of innovative digital solutions tailored to the fintech industry's needs,
                    including AI-driven services, cloud services,
                    mobile applications, consultancy, and software development</span>
                    </h3>
                </div>
                <div className="buttons">
                    <button className='main-button'>Services</button>
                    <button className='second-button'>Contact us</button>
                </div>
            </div>
        </div>
    )
}


export default Welcome;