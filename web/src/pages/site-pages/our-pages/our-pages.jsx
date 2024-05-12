import NavBar from "../../../components/navbar/navbar";
import Catalog from "../catalog/catalog";
import Redesign from "../redesign/redesign";
import CarouselPage from "../slider-page/slider-page";
import Steps from "../steps/steps";
import Contacts from "../../../components/contacts/contacts";
import Footer from "../../../components/footer/footer";

const OurPages = () =>{
    return(
        <>
            <div className="our-pages">
                <NavBar/>
                <Catalog/>
                <Redesign/>
                <CarouselPage/>
                <Steps/>
                <Contacts title='are you hesitating?'/>
                <Footer/>
            </div>
        </>
    )
}

export default OurPages;