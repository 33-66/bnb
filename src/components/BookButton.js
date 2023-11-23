import React from 'react'
import { useNavigate } from 'react-router-dom'

function BookButton() {
    const navigate = useNavigate()
    function handleBookButton(){
        navigate ('/boking form')
    }
  return (
    <button onClick={handleBookButton}> Book Now</button>
  )
}

export default BookButton