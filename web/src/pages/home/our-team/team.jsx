import './team.css';
import { ReactComponent as BottomLeft } from '../../../assets/arrows/bottom-left.svg';

const Team = () =>{
    return(
        <div className='our-team'>
            <div className="title">
                <h1>Our team is ready to <br/>perform complex tasks</h1>
                <h6>The main asset of a design manager is the team. <span>To create a great product, you need a great team.</span></h6>
                <BottomLeft/>
            </div>
            <div className="slider">
                <div className="slide-wrapper">
                    {[1,2,3,4].map((item,index)=> (
                        <div key={index} className='slide-item'>{item}</div>
                    ))}
                </div>
                <div className="slide-wrapper">
                    {[1,2,3,4].map((item,index)=> (
                        <div key={index} className='slide-item'>{item}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Team;