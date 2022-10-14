import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div className="footer">
      <p className="text-center">
        <b>
          &copy;2022. Designed with{" "}
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: "red", fontSize: "20px" }}
            className="fa-beat"
          />{" "}
          by Subramanya K S.
        </b>
      </p>
    </div>
  );
};
export default Footer;
