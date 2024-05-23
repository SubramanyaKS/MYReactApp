import { FidgetSpinner } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="loader w-100">
      
        <FidgetSpinner
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
          ballColors={["#ff0000", "#00ff00", "#0000ff"]}
          backgroundColor="#00ffff"
        />
    </div>
  );
};
export default Spinner;
