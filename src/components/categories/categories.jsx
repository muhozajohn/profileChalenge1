import React from 'react'
import './categories.css'
import { AiFillApi } from 'react-icons/ai'
import { BiMusic } from 'react-icons/bi'
import { BiUserVoice } from 'react-icons/bi'
import { BiMessageRoundedAdd } from 'react-icons/bi'
import { BiGrid } from 'react-icons/bi'
import { RiMapPinRangeFill } from 'react-icons/ri'
const Categories = () => {
  return (
    <section id='about' >
    <div className='container categories_container'>
        <div className="cat-left">
        <h1>Categories</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eaque ipsum ut quos blanditiis eveniet dolores nisi. Excepturi nisi eum incidunt fugit eveniet, corrupti dicta soluta tempore ut, nemo architecto?</p>
        <a href="" className='btn'>Learn More</a>
        </div>

        <div className="cat-right">
            <div className="cat-right-card">
                <span><BiMessageRoundedAdd className='icons'/> </span>
                <h5>BlockChain</h5>
                {/* <p></p> */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, libero!</p>
            </div>
            <div className="cat-right-card">
            <span><AiFillApi className='icons'/> </span>
                <h5>graphic Design</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, perferendis?</p>
            </div>
            <div className="cat-right-card">
            <span><BiGrid className='icons'/> </span>
                <h5>Finance</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, perferendis?</p>
            </div>
            <div className="cat-right-card">
            <span><RiMapPinRangeFill className='icons'/> </span>
                <h5>marketing</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, perferendis?</p>
            </div>
            <div className="cat-right-card">
            <span><BiMusic className='icons'/> </span>
                <h5>Music</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, perferendis?</p>
            </div>
            <div className="cat-right-card">
            <span><BiUserVoice className='icons'/> </span>
                <h5>Business</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, perferendis?</p>
            </div>

        </div>
        </div>
    </section>
  )
}

export default Categories