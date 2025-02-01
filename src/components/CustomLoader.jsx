import React from 'react'
import '../assets/loader.css';
import { Loader, Shell } from 'lucide-react';

const CustomLoader = ({ size = 50, speed = "1s" }) => {
  return (
    <div className="d-flex justify-content-center align-items-center loader-container">
    <Loader
    color='#00ff00'
    // color='green'
      style={{
        width: size,
        height: size,
        borderWidth: "4px",
        borderRightColor: "transparent",
        animation: `spin ${speed} linear infinite`,
      }}
    />
  </div>
  )
}

export default CustomLoader