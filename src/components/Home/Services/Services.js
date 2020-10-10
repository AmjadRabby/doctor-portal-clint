import React from 'react';
import Fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png'
import teeth from '../../../images/teeth.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const servicesData = [
    {
        name: 'Fluoride Treatment',
        img: Fluoride,
    },
    {
        name: 'Cavity Filling',
        img: cavity,
    },
    {
        name: 'Teeth Whitening',
        img: teeth,
    },
];

const Services = () => {
    return (
        <section className="services-container">
            <div className="text-center mt-5">
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
                <h2 style={{color: '#3A4256'}}>Services we provide</h2>
            </div>
            <div className="d-flex justify-content-center mt-5 pt-5">
                <div className="w-75 row">
                        {
                            servicesData.map(service => <ServiceDetail key={service.name} service={service} />)
                        }
                </div>
            </div>
        </section>
    );
};

export default Services;