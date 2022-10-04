import React from 'react'
import './courses.css'
import Card from '../../images/PORT4.webp'
import Card1 from '../../images/PORT6.webp'
import Card2 from '../../images/PORT1.webp'

const Courses = () => {

const course =[
  {
    Cardz: Card,
    headingz: 'Responsive Soccial Media website UI Design',
    pragraphs: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, maxime velit! Exercitationem minus voluptates inventore officiis tempora tenetur temporibus corporis.',
  },
  {
    Cardz: Card1,
    headingz: 'Responsive Soccial Media website UI Design',
    pragraphs: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, maxime velit! Exercitationem minus voluptates inventore officiis tempora tenetur temporibus corporis.',
  },
  {
    Cardz: Card2,
    headingz: 'Responsive Soccial Media website UI Design',
    pragraphs: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, maxime velit! Exercitationem minus voluptates inventore officiis tempora tenetur temporibus corporis.',
  },
]

  return (
    <section id="Courses">
      <h2>Our Popular Courses</h2>
      <div className="container courses_container">
{
        course.map(({Cardz,headingz,pragraphs},index) =>{return(

          <article className="cards" key={index}>
          <div className="cards-image">
            <img src={Cardz} alt="" className="img-card" />

          </div>
            <div className="cards-info">
              <h3>{headingz}</h3>
              <p>{pragraphs}</p>
            <a href="" className='btn btn-primary'>Learn More</a>
            </div>
        </article>

        )})
}
      </div>
    </section>
  )
}

export default Courses