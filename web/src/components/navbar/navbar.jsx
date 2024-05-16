import './navbar.css'
import { ReactComponent as ViberIcon } from '../../assets/icons/viber.svg'
import { ReactComponent as WhatsApp } from '../../assets/icons/whatsapp.svg'
import { ReactComponent as Telegram } from '../../assets/icons/telegram.svg'
import { ReactComponent as Logo } from '../../assets/images/logo.svg'

const NavBar = () =>{
    return(
        <>
            <nav>
                <div className="logo">
                    <Logo/>
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
                    </ul>
                </ul>
            </nav>
        </>
    )
}


export default NavBar;