import './catalog.css';
import { ReactComponent as BottomLeft } from '../../../assets/arrows/bottom-left.svg'

const Catalog = () =>{
    return(
        <div className='catalog'>
            <div className="catalog-container">
                <div className="catalog-wrapper">
                    <div className="tabs">
                        <ul className='tabs-items'>
                            <li className='tab-list'>Created your own eco-system (website, app, chatbots)</li>
                            <li className='tab-list'>Develop your own AI specific bot</li>
                            <li className='tab-list'>Optimize your work processes</li>
                        </ul>
                        <ul className='catalog-items'>
                            <li className='catalog-list'>Creation of an online store
                                <BottomLeft/>
                            </li>
                            <li className='catalog-list'>
                                Site Catalog
                                <BottomLeft/>
                            </li>
                            <li className='catalog-list'>
                                Business card site
                                <BottomLeft/>
                            </li>
                            <li className='catalog-list'>
                                Single page site
                                <BottomLeft/>
                            </li>
                            <li className='catalog-list'>
                                Redesign
                                <BottomLeft/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catalog;