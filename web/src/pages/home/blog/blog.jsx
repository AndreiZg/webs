import './blog.css'
import { ReactComponent as BottomLeft } from '../../../assets/arrows/bottom-left.svg'
import NewsCards from "../../../helpers/newsData";

const Blog = () =>{
    return(
        <div className='blog'>
            <div className="title">
                <h1>News.blog</h1><h6>This Sunday's <span>Top 10 Design Articles</span></h6>
                <BottomLeft/>
            </div>
            <div className="blog-container">
                <div className="blog-buttons">
                    <button>all topics</button>
                    <button>web design</button>
                    <button>research</button>
                    <button>ux/ui</button>
                    <button>illustration</button>
                </div>
                <div className="card-container">
                    <NewsCards/>
                </div>
            </div>
        </div>
    )
}

export default Blog