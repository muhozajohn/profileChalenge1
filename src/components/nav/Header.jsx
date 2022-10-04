import React from 'react'
import './header.css'
import PXL_1 from '../../images/ME.png'
const Header = () => {
  return (
    <section>
        <header>
            <div className="container header_container">
                <div className="header_left">
                    <h1>Grow Your Skill To Your Career Path</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos nisi incidunt delectus maxime perspiciatis soluta veritatis corrupti magni, neque fuga.</p>
                    <a className="btn btn-primary"> Get Started </a>
                </div>
                <div className="header_right">
                    <div className="header_right-image">
                    <img src={PXL_1} alt="" />
                    </div>
                </div>
            </div>
        </header>
    </section>
  )
}

export default Header