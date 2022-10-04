import React from 'react'
import './stu.css'
import ME from '../../images/PXL_1.jpg'
import Fille from '../../images/fille.jpeg'
import {Navigation,Pagination} from 'swiper'
import {Swiper,SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const StuTesitimonials = () => {
  return (
    <section className='stuTesimonials'>
<h2>Student Testimonials</h2>
<Swiper className="container swiper-container"
modules={[Navigation,Pagination]}
slidesPerView={3}
spaceBetween={30}
pagination={{clickable: true}}
breakpoints={{
    400: {
        width: 400,
        slidesPerView: 1
    },
    // when window width is >= 640px
    600: {
      width: 600,
      slidesPerView: 1,
    },

    // when window width is >= 768px
    1120: {
      width: 1120,
      slidesPerView: 2,
    },
  }}
>
    <SwiperSlide className="stu-cards">
        <div className="stu-image">
            <img src={ME} alt="" className="stu-img" />
        </div>
        <div className="stu-card-info">
            <h5>The Saint</h5>
            <small>Student</small>
        </div>
        <div className="stu-card-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi assumenda quas autem laborum! Quibusdam unde laborum asperiores dolorum? Alias suscipit laboriosam voluptas in quam repellat consectetur autem assumenda nobis?</p>
        </div>
    </SwiperSlide>
    <SwiperSlide className="stu-cards">
        <div className="stu-image">
            <img src={Fille} alt="" className="stu-img" />
        </div>
        <div className="stu-card-info">
            <h5>Akaliza Fillette</h5>
            <small>The Great</small>
        </div>
        <div className="stu-card-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi assumenda quas autem laborum! Quibusdam unde laborum asperiores dolorum? Alias suscipit laboriosam voluptas in quam repellat consectetur autem assumenda nobis?</p>
        </div>
    </SwiperSlide>
    <SwiperSlide className="stu-cards">
        <div className="stu-image">
            <img src={ME} alt="" className="stu-img" />
        </div>
        <div className="stu-card-info">
            <h5>The Saint</h5>
            <small>Student</small>
        </div>
        <div className="stu-card-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi assumenda quas autem laborum! Quibusdam unde laborum asperiores dolorum? Alias suscipit laboriosam voluptas in quam repellat consectetur autem assumenda nobis?</p>
        </div>
    </SwiperSlide>
    <SwiperSlide className="stu-cards">
        <div className="stu-image">
            <img src={ME} alt="" className="stu-img" />
        </div>
        <div className="stu-card-info">
            <h5>The Saint</h5>
            <small>Student</small>
        </div>
        <div className="stu-card-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi assumenda quas autem laborum! Quibusdam unde laborum asperiores dolorum? Alias suscipit laboriosam voluptas in quam repellat consectetur autem assumenda nobis?</p>
        </div>
    </SwiperSlide>
    <SwiperSlide className="stu-cards">
        <div className="stu-image">
            <img src={ME} alt="" className="stu-img" />
        </div>
        <div className="stu-card-info">
            <h5>The Saint</h5>
            <small>Student</small>
        </div>
        <div className="stu-card-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi assumenda quas autem laborum! Quibusdam unde laborum asperiores dolorum? Alias suscipit laboriosam voluptas in quam repellat consectetur autem assumenda nobis?</p>
        </div>
    </SwiperSlide>
    <SwiperSlide className="stu-cards">
        <div className="stu-image">
            <img src={ME} alt="" className="stu-img" />
        </div>
        <div className="stu-card-info">
            <h5>The Saint</h5>
            <small>Student</small>
        </div>
        <div className="stu-card-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi assumenda quas autem laborum! Quibusdam unde laborum asperiores dolorum? Alias suscipit laboriosam voluptas in quam repellat consectetur autem assumenda nobis?</p>
        </div>
    </SwiperSlide>
    <SwiperSlide className="stu-cards">
        <div className="stu-image">
            <img src={ME} alt="" className="stu-img" />
        </div>
        <div className="stu-card-info">
            <h5>The Saint</h5>
            <small>Student</small>
        </div>
        <div className="stu-card-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi assumenda quas autem laborum! Quibusdam unde laborum asperiores dolorum? Alias suscipit laboriosam voluptas in quam repellat consectetur autem assumenda nobis?</p>
        </div>
    </SwiperSlide>
    <SwiperSlide className="stu-cards">
        <div className="stu-image">
            <img src={ME} alt="" className="stu-img" />
        </div>
        <div className="stu-card-info">
            <h5>The Saint</h5>
            <small>Student</small>
        </div>
        <div className="stu-card-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi assumenda quas autem laborum! Quibusdam unde laborum asperiores dolorum? Alias suscipit laboriosam voluptas in quam repellat consectetur autem assumenda nobis?</p>
        </div>
    </SwiperSlide>
    <SwiperSlide className="stu-cards">
        <div className="stu-image">
            <img src={ME} alt="" className="stu-img" />
        </div>
        <div className="stu-card-info">
            <h5>The Saint</h5>
            <small>Student</small>
        </div>
        <div className="stu-card-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi assumenda quas autem laborum! Quibusdam unde laborum asperiores dolorum? Alias suscipit laboriosam voluptas in quam repellat consectetur autem assumenda nobis?</p>
        </div>
    </SwiperSlide>
    <SwiperSlide className="stu-cards">
        <div className="stu-image">
            <img src={ME} alt="" className="stu-img" />
        </div>
        <div className="stu-card-info">
            <h5>The Saint</h5>
            <small>Student</small>
        </div>
        <div className="stu-card-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi assumenda quas autem laborum! Quibusdam unde laborum asperiores dolorum? Alias suscipit laboriosam voluptas in quam repellat consectetur autem assumenda nobis?</p>
        </div>
    </SwiperSlide>
    <SwiperSlide className="stu-cards">
        <div className="stu-image">
            <img src={ME} alt="" className="stu-img" />
        </div>
        <div className="stu-card-info">
            <h5>The Saint</h5>
            <small>Student</small>
        </div>
        <div className="stu-card-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi assumenda quas autem laborum! Quibusdam unde laborum asperiores dolorum? Alias suscipit laboriosam voluptas in quam repellat consectetur autem assumenda nobis?</p>
        </div>
    </SwiperSlide>
 
</Swiper>
    </section>
  )
}

export default StuTesitimonials