import React from 'react';
import doctor from '../../../images/doctorSm.png'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import Doctor from '../Doctor/Doctor';

const doctorData = [
    {
        id: 1,
        name: 'Dr. Coudi',
        img: doctor,
        phone: '+880-188-1151233',
        icon: faPhone,
    },
    {
        id: 2,
        name: 'Dr. Coudi',
        img: doctor,
        phone: '+880-188-1151233',
        icon: faPhone,
    },
    {
        id: 3,
        name: 'Dr. Coudi',
        img: doctor,
        phone: '+880-188-1151233',
        icon: faPhone,
    },
];

const Doctors = () => {
    return (
        <section className="doctors">
            <div className="container">
                <div className="doctor-header text-center">
                    <h4 style={{color: '#1CC7C1'}}>Our Doctor</h4>
                </div>
            
                <div className="card-deck">
                    {
                        doctorData.map(doctor => <Doctor key={doctor.id} doctor={doctor} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;