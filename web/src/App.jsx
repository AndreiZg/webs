import './App.css';
import NavBar from "./components/navbar/navbar";
import Welcome from "./pages/home/welcome/welcome";
import Services from "./pages/home/services/services";
import Projects from "./pages/home/Projects/projects";
import Blog from "./pages/home/blog/blog";
import Team from "./pages/home/our-team/team";
import Contacts from "./components/contacts/contacts";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
        <div className="home-page">
            <NavBar/>
            <Welcome/>
            <Services/>
            <Projects/>
            <Blog/>
            <Team/>
            <Contacts/>
            <Footer/>
        </div>
    </>
  );
}

export default App;
