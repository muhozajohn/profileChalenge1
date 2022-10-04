import React from 'react'
import './nav.css'
import {RiMenuFill} from 'react-icons/ri'
import {BiX} from 'react-icons/bi'
import Header from './Header'
import { useState } from 'react'

const Nav = () => {
  const [DisplayNav,SetDisplayNav] = useState(false);
  return (
    <>

    <nav>
        <div className="container nav_container ">
          <a href=""> <h4>The-Saint</h4> </a>

          <ul className={`${DisplayNav ? 'show-nav' : 'hide-nav'}`}>
                  <li> <a href="#about"> Home</a> </li>
                  <li> <a href="#about"> About</a> </li>
                  <li> <a href="#Courses"> Courses</a> </li>
                  <li> <a href="#about"> Contact</a> </li>
          </ul>
                  <button id="open-menu-btn" onClick={()=>SetDisplayNav(!DisplayNav)}> 
                  { DisplayNav ?<i> <BiX /> </i> : <i> <RiMenuFill /> </i>} 
                  </button>
                  
        </div>
        
    </nav>

    <Header />
    
      </>
  )
}

export default Nav


// ============ JavaScripts =========
{
  window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 150)

  })



  // const menu = document.querySelector(".nav_menu");
  // const menuBtn = document.querySelector("#open-menu-btn");
  // const closeBtn = document.querySelector("#close-menu-btn");
  
  // menuBtn.addEventListener('click', ()=>{
  //   menu.style.display = "flex";
  //   closeBtn.style.display ="inline-block";
  //   menuBtn.style.display ="none";
  // })


  // // close menu
  // const closeNav =() =>{
  //   menu.style.display = "none";
  //   closeBtn.style.display ="none";
  //   menuBtn.style.display ="inline-block";
  // }

  // closeBtn.addEventListener('click',closeNav);


}