import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import Spinner from "./components/Spinner";
import Routing from "./routes/Routing";
import { useSpinner } from "./hook/useSpinner";

function App() {
  const { spinner } = useSpinner();

  return spinner ? <Spinner /> : <Routing />;
}

export default App;
