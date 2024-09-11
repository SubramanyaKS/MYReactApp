import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const PillButton = ({OnClick,title,icon})=>{
    return (
        <button onClick={OnClick} className="resume rounded-pill">{title}<FontAwesomeIcon icon={icon} /> </button>

    )

}
export default PillButton