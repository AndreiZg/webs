import './redesign.css';

const Redesign = () =>{
    return(
        <div className='redesign flex'>
            <div className="redesign-container">
                <div className="left-side">
                    <ul className='redesign-items'>
                        <li className='redesign-left__items'>Development of HTML code.</li>
                        <li className='redesign-left__items'>Logo redesign.</li>
                        <li className='redesign-left__items'>Updating content.</li>
                        <li className='redesign-left__items'>Animation.</li>
                        <li className='redesign-left__items'>Color, font and style.</li>
                        <li className='redesign-left__items'>Convenience</li>
                    </ul>
                </div>
                <div className="right-side">
                    <div className="redesign-right__items">
                        <p className='method'>Our method</p>
                        <h2 className='redesign-title'>Redesign</h2>
                        <p className='redesign-description'>We are working on redesigning your site,
                            updating it and refresh its appearance in order to increase your
                            brand awareness and increase conversion sales
                        </p>
                        <h5 className='redesign-list__title'>Redesign of the site,
                            this is an improvement:</h5>
                        <ul className='redesign-list'>
                            <li className='redesign-list__item'>Structures</li>
                            <li className='redesign-list__item'>Functional</li>
                            <li className='redesign-list__item'>Content</li>
                            <li className='redesign-list__item'>Ease of use of the site</li>
                        </ul>
                        <button className='redesign-btn'>BUTTON</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export  default  Redesign;