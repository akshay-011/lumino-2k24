import React from 'react'

const AnimatedCard = ({ description, registerLink, regFee, time}) => {

  return (
    <>
      <p>{description}</p>
      <div className="last-conatiner">
        <p className="fee">Registration Fee : {regFee}</p>
        <p className="fee">Schedule: {time}</p>
        <a href={registerLink} target="_blank" rel="noopener noreferrer">Register Now</a>
      </div>
    </> 
  )
}

export default AnimatedCard