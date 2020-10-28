import React from 'react';
import aliza from '../../../images/aliza.png';
import ema from '../../../images/ema.png';
import wilson from '../../../images/wilson.png';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css'

const testimonialData = [
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos modi nisi fugiat eius praesentium ipsa repudiandae quo sequi magni, nemo quam. Dignissimos sunt nisi nostrum',
        name: 'Winson Herry',
        from: 'California',
        img : aliza,
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos modi nisi fugiat eius praesentium ipsa repudiandae quo sequi magni, nemo quam. Dignissimos sunt nisi nostrum',
        name: 'Winson Herry',
        from: 'California',
        img : ema,
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos modi nisi fugiat eius praesentium ipsa repudiandae quo sequi magni, nemo quam. Dignissimos sunt nisi nostrum',
        name: 'Winson Herry',
        from: 'California',
        img : wilson,
    },
    
]

const Testimonials = () => {
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="header-testimonial">
                    <h5 className="color-group">TESTIMONIAL</h5>
                    <h2 style={{color: '#3A4256'}}>What's Our Patients <br/> says</h2>
                </div>
                <div className="card-deck mt-5">
                    {
                        testimonialData.map(testimonial => <Testimonial key={testimonial.name} testimonial={testimonial} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;