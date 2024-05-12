import './pagination.css'
import {ReactComponent as PreviousBtn} from "../../assets/arrows/previous.svg";
import {ReactComponent as NextBtn} from "../../assets/arrows/next.svg";

const Pagination = () =>{
    return (
        <div className="pagination">
            <ul className='pagination-items'>
                <li className='pagination-items__list'><PreviousBtn/></li>
                <li className='pagination-items__list'>1</li>
                <li className='pagination-items__list'>2</li>
                <li className='pagination-items__list'>3</li>
                <li className='pagination-items__list'><NextBtn/></li>
            </ul>
        </div>
    )
}

export default Pagination;