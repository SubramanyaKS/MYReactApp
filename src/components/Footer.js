import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
const Footer=()=>{
    return(
        <div className ="footer">
            <p class="text-center" ><b>&copy;2022. Designed with <FontAwesomeIcon icon={faHeart} style={{color:"red",fontSize: '20px'}} beat/> by
				Subramanya K S.</b></p>
        </div>

    );

}
export default Footer;