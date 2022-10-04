import React from 'react'
import Categories from './components/categories/categories'
import Courses from './components/courses/Courses'
import Nav from './components/nav/Nav'
import Welcome from './components/welcome/welcome'
import StuTesitimonials from './components/StudentTestimonial/StuTesitimonials'

const App = () => {
  return (
    <div>
          <Nav />
          <Categories/>
          <Courses />
          <Welcome />
          <StuTesitimonials />



    </div>
  )
}

export default App