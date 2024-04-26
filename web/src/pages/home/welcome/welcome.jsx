import './welcome.css'
import { ReactComponent as RightArrow } from '../../../assets/arrows/right.svg'

const Welcome = () =>{
    return(
        <div className="home">
            <div className="container">
                <p>We bring your ideas to life</p>
                <h1 className='main-title'>
                    <RightArrow/>
                    <span className="welcome"><span className='welcome-text'>WELCOME TO </span>
                        <span className='to-right'>IT WEB —STUDIO</span></span>
                </h1>
                <h3 className='bottom-text'>is a Ukrainian studio <span>that develops websites and digital marketing</span></h3>
                <div className="buttons">
                    <button className='main-button'>Консультація</button>
                    <button className='second-button'>Кнопка</button>
                </div>
            </div>
        </div>
    )
}


export default Welcome;