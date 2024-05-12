import NavBar from "../../../components/navbar/navbar";
import Welcome from "../welcome/welcome";
import Services from "../services/services";
import Projects from "../Projects/projects";
import Blog from "../../articles/blog/blog";
import Team from "../our-team/team";
import Contacts from "../../../components/contacts/contacts";
import Footer from "../../../components/footer/footer";

const HomePage = () =>{
    return (
        <>
            <div className="home-page">
                <NavBar/>
                <Welcome/>
                <Services/>
                <Projects/>
                {/*<Blog/>*/}
                <Team/>
                <Contacts title='Want to join the team?'/>
                <Footer/>
            </div>
        </>
    )
}

export default HomePage;