import React from 'react'

const HeaderPhoto = ({image}) => {
  return (
      <div className="hero-box">
          <div className="hero-content">
              <img src={image} alt="avatar" />
          </div>
    </div>
  )
}

export default HeaderPhoto