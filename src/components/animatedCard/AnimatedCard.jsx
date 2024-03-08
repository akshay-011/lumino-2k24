import React from 'react'

const AnimatedCard = ({ description, registerLink}) => {

  return (
    <>
      <p>{description}</p>
      <a href={registerLink} target="_blank" rel="noopener noreferrer">Register Now</a>
    </>
  )
}

export default AnimatedCard