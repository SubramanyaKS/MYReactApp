import React from 'react'

const SkillPill = ({text}) => {
  return (
    <div className=' px-2 rounded-pill' style={{backgroundColor:"#0fd"}}>
      {text}
    </div>
  )
}

export default SkillPill