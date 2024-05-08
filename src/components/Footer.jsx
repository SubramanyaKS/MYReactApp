import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <p  style={{fontFamily:"cursive"}} className="text-center">
        <b>
          &copy;2024. Designed with{" "}
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: "red", fontSize: "20px" }}
            className="fa-beat"
          />{" "}
          by &lt;Subramanya K S./&gt;
        </b>
      </p>
    </div>
  );
};
export default Footer;