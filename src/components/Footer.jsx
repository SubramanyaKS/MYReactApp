import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <div className="footer">
      <p  style={{fontFamily:"cursive"}} className="text-center">
        <b>
          &copy;2024. Designed with{" "}
          <Heart
            fill="red"
            color="red"
          />{" "}
          by &lt;Subramanya K S./&gt;
        </b>
      </p>
    </div>
  );
};
export default Footer;