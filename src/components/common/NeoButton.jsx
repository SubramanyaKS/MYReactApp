import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const NeoButton = ({link,icon}) => {
  return (
      <a href={link}>
          {" "}
          <button className="neo-button">
              <FontAwesomeIcon
                  icon={icon}
                  style={{ fontSize: "24px" }}
              />{" "}
          </button>
      </a>
  )
}

export default NeoButton