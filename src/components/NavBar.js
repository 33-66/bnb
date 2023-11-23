import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
  const styles ={
    background: 'beige',
    padding: '20px',
    textAlign: 'left',
    marginRight:"20px"
  }
  return (
    < div style={styles}>
    
        <Link to="/"style={styles} >Home</Link>
        <Link to="/services" style={styles}>Services</Link>
        <Link to="/postingForm" style={styles}>Post Your Form </Link>
        <Link to="/reviews" style={styles}>What do you Think of our app</Link>

    
    
    </div>
  )
}

export default NavBar