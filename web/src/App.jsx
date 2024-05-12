import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from "./pages/home/home-page/home-page";
import OurPages from "./pages/site-pages/our-pages/our-pages";
import OurProjects from "./pages/projects/our-projects/our-projects";
import Articles from "./pages/articles/articles-page/articles";
import ViewWork from "./pages/view/view-work/view-work";

function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route index element={<HomePage/>}/>
                  <Route path='/pages' element={<OurPages/>}/>
                  <Route path='/our-projects' element={<OurProjects/>}/>
                  <Route path='/articles' element={<Articles/>}/>
                  <Route path='/view' element={<ViewWork/>}/>
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
