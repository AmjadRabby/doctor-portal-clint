import React from 'react';
import './MakeAppointment.css';
import doctor from '../../../images/doctors.png';

const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt=""/>
                    </div>
                    <div className="col-md-7 text-white py-5">
                        <h5 className="my-3 color-group" >APPOINTMENT</h5>
                        <h2 >Make an appointment <br/> Today</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam hic ex ratione! Inventore in a nihil aperiam, ad fugit quia?</p>

                        <button className="btn btn-style mt-5">Learn More</button>
                    </div>
                </div>
            </div>            
        </section>
    );
};

export default MakeAppointment;