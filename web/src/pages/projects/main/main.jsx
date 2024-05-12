import './main.css';
import { ReactComponent as BottomLeft } from '../../../assets/arrows/bottom-left.svg'
import ProjectCardsData from "../../../helpers/project-cards";
import Pagination from "../../../components/pagination/pagination";


const Main = () =>{
    return(
        <>
            <div className="main-projects">
                <div className="projects-title">
                    <h5>Home /<span>  Portfolio</span></h5>
                </div>
                <main className="main-container">
                    <div className="title">
                        <h1>our projects</h1>
                        <h6><span>We possess an extensive</span> portfolio of projects,
                            showcased here. However, due to our commitment to non-disclosure agreements
                            (NDAs), we cannot display the full list of our works.
                            Please reach out to us for a tailored demonstration of specific projects.</h6>
                        <BottomLeft/>
                    </div>
                    <div className="main-items">
                        <ul className="tab-navigation flex">
                            <li>Websites (12)</li>
                            <li>SMM (7)</li>
                            <li>Internet-shop (9)</li>
                        </ul>
                        <div className="projects-cards__container">
                            <ProjectCardsData/>
                        </div>
                        <Pagination/>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Main;