import React from 'react';

const IconContainer = ({containerClass,href,Icon,className,label}) => {
  return (
    <div  className={`${containerClass} pt-2 pb-2 shad rounded-circle`}>
        <a
          aria-label={label}
          href={href}
            target='_blank'
          className={className} rel="noreferrer"
        >
          <Icon/>
        </a>
    </div>
  )
}

export default IconContainer