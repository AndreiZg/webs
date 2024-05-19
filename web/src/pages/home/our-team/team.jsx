import './team.css';
import { ReactComponent as BottomLeft } from '../../../assets/arrows/bottom-left.svg';

const Team = () =>{
    return(
        <div className='our-team'>
            <div className="title">
                <h1>Our team is ready to <br/>perform complex tasks</h1>
                <h6>With expertise spanning various fields, <span> we confidently engage cross-continental
                    experts to tackle even the most complex tasks. Through certification programs, knowledge
                    exchange, active participation in IT events,and regular assessments, we consistently
                    elevate our team's capabilities..</span></h6>
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