import './navbar.css'
import { ReactComponent as ViberIcon } from '../../assets/icons/viber.svg'
import { ReactComponent as WhatsApp } from '../../assets/icons/whatsapp.svg'
import { ReactComponent as Telegram } from '../../assets/icons/telegram.svg'
import { ReactComponent as Be } from '../../assets/icons/be.svg'

const NavBar = () =>{
    return(
        <>
            <nav>
                <div className="logo">
                    <h1>logo</h1>
                </div>
                <ul>
                    <li>Main</li>
                    <li>Contacts</li>
                    <li>Services</li>
                    <li>Career</li>
                    <li>Our Projects</li>
                    <ul className={'icons'}>
                        <li><ViberIcon/></li>
                        <li><WhatsApp/></li>
                        <li><Telegram/></li>
                        <li><Be/></li>
                    </ul>
                </ul>
            </nav>
        </>
    )
}


export default NavBar;