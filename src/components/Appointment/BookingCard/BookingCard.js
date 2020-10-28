import React, { useState } from 'react';
import BookingForm from '../BookingForm/BookingForm';

const BookingCard = ({booking, date}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-5">
            <div className="card border-0 shadow-sm p-3">
                <div className="card-body text-center">
                    <h4 className="card-title  color-group ">{booking.subject}</h4>
                    <h6>{booking.visitingHour}</h6>
                    <p>{booking.totalSpace} Space Available</p>
                    <button onClick={openModal} className="btn btn-style">BOOK APPOINTMENT</button>
                    <BookingForm openModal={modalIsOpen}  booking={booking.subject} closeModal={closeModal} date={date}/>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;