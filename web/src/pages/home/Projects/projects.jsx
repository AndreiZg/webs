import './projects.css'
import { ReactComponent as BottomLeft } from '../../../assets/arrows/bottom-left.svg'
import { ReactComponent as TopRight } from '../../../assets/arrows/top-right.svg'

const Projects = () =>{
    return(
        <div className="projects">
            <div className="title">
                <h1>our projects</h1><h6>This Sunday's <span>Top 10 Design Articles</span></h6>
                <BottomLeft/>
            </div>
            <div className="grid-container">
                <div className="element">
                    <div className="project-title"></div>
                    <div className="project-buttons">
                        <button className='project-item'>Project 1</button>
                        <TopRight/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects