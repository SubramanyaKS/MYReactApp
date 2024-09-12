import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import "./App.css";
import Spinner1 from "./components/Loader";
import Routing from "./routes/Routing";
import { useSpinner } from "./hook/useSpinner";

function App() {
  const {spinner} = useSpinner();

  return (
    <>
    {spinner ? (
     <Spinner1 />
   ) : (
    <Routing/>     
   )}
 </>
  );
}

export default App;
