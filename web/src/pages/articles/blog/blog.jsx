import './blog.css'
import NewsCards from "../../../helpers/newsData";
import { ReactComponent as BottomLeft } from '../../../assets/arrows/bottom-left.svg'
import Pagination from "../../../components/pagination/pagination";

const Blog = () =>{
    return(
        <div className='blog'>
            <div className="blog-container">
                <div className="articles-path">
                    <h5>Home /  Portfolio <span> Blog</span></h5>
                </div>
                <div className="articles-title">
                    <h1>Articles</h1>
                    <BottomLeft/>
                </div>
                <div className="blog-items">
                    <div className="input-content flex">
                        <input type="text" placeholder='Search name'/>
                        <select>
                            <option>Test</option>
                        </select>
                    </div>
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
                    <Pagination/>
                </div>
            </div>
        </div>
    )
}

export default Blog