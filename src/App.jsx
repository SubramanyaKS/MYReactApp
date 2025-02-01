import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import Routing from "./routes/Routing";
import { useSpinner } from "./hook/useSpinner";
import CustomLoader from "./components/CustomLoader";

function App() {
  const { spinner } = useSpinner();

  return spinner ? <CustomLoader size={60} speed="0.8s" /> : <Routing />;
}

export default App;
