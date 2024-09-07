import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import "./App.css";
import Spinner1 from "./components/Loader";
import Routing from "./routes/Routing";
import 'react-chatbot-kit/build/main.css'

function App() {
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 1000);
  }, []);

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
