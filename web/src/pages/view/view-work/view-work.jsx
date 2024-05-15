import NavBar from "../../../components/navbar/navbar";
import WorkDetails from "../work-details/work-details";
import WorkImages from "../work-images/work-images";
import Footer from "../../../components/footer/footer";

const ViewWork = () => {
  return(
      <>
          <NavBar/>
          <WorkDetails/>
          <WorkImages/>
          <Footer/>
      </>
  )
}

export default ViewWork;