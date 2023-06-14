import React from 'react'

function About({Aboutname,Aboutbio,Aboutemail}) {
  return (
    <>
    <div className='Name'>Name: {Aboutname}</div>
    <div className='email'>Email: {Aboutemail}</div>
    <div className='bio'>Description: {Aboutbio}</div>
    <div className='skills'>Key Expertise:
    <ul>
        <li>Front-End Web Development</li>
        <li>Immersive Web Experience</li>
        <li>Full-Stack Development</li>
    </ul>
    </div>
    </>
  )
}

export default About