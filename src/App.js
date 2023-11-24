import React from 'react'
import NavBar from './components/NavBar'
import { Route ,Routes } from 'react-router-dom'
import Home from './components/Home'
//import Services from './components/Services'
import BookingForm from './components/BookingForm'
import PostingForm from './components/PostForm'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import ImageWrapper from './components/WrapperComponent'
function App() {
  return (
    <div>
      < NavBar />
      <Routes>
        <Route path='/'element={<Home/>}></Route>
      <Route path="/services"element={<ImageWrapper/>}  ></Route>
      <Route path='/home'element={<Home/>}></Route>
      <Route path= "/boking form"element={<BookingForm/>}></Route>
      <Route path="/postingForm"element={<PostingForm/>}></Route>
      <Route path="/reviews" element={<Reviews/>}></Route>
          </Routes>
          <Footer />
    </div>
  )
}

export default App