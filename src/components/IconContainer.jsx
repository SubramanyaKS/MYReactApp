import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const IconContainer = ({containerClass,href,icon,className,iconClass,label}) => {
  return (
    <div  className={`${containerClass} pt-2 pb-2 shad rounded-circle`}>
        <a
          aria-label={label}
          href={href}
            target='_blank'
          className={className} rel="noreferrer"
        >
          <FontAwesomeIcon icon={icon} className={iconClass} size="2x" />
        </a>
    </div>
  )
}

export default IconContainer