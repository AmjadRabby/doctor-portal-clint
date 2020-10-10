import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const infoData = [

    {
        title: 'Opening Hours',
        description: 'Lorem ipsum dolor sit amet consectetur',
        icon: faClock,
        background: 'primary',
    },
    {
        title: 'Visit our location',
        description: 'Brooklyn, NY 10036, United States',
        icon: faMapMarker,
        background: 'dark',
    },
    {
        title: 'Contact as now',
        description: '+000 123 456 789',
        icon: faPhone,
        background: 'primary',
    },

];

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
           <div className="w-75 row">
                {
                    infoData.map(info => <InfoCard key={info.title} info={info} />)
                }
           </div>
        </section>
    );
};

export default BusinessInfo;