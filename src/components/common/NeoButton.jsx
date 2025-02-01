import React from 'react';

const NeoButton = ({link,Icon}) => {
  return (
      <a href={link}>
          {" "}
          <button className="neo-button">
            <Icon/>
          </button>
      </a>
  )
}

export default NeoButton