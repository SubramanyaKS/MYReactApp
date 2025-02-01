const PillButton = ({OnClick,title,Icon})=>{
    return (
        <button onClick={OnClick} className="resume rounded-pill">{title}<Icon/> </button>

    )

}
export default PillButton