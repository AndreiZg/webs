import './App.css';
import NavBar from "./components/navbar/navbar";
import Welcome from "./pages/home/welcome/welcome";
import Services from "./pages/home/services/services";
import Projects from "./pages/home/Projects/projects";

function App() {
  return (
    <div>
        <NavBar/>
        <Welcome/>
        <Services/>
        <Projects/>
    </div>
  );
}

export default App;
