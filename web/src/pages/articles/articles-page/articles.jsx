import NavBar from "../../../components/navbar/navbar";
import Blog from "../blog/blog";
import Footer from "../../../components/footer/footer";

const Articles = () =>{
    return (
        <>
            <div className="articles-page">
                <NavBar/>
                <Blog/>
                <Footer/>
            </div>
        </>
    )
}

export default Articles;