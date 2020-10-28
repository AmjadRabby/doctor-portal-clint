import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <section className="contact my-5 py-5 text-white">
            <div className="container">
                <div className="contact-header text-center">
                    <h6 className="color-group">CONTACT US</h6>
                    <h2>Always connect with us</h2>
                </div>
                <div className="col-md-9 mx-auto mt-4">
                    <form action="">
                        <div className="form-group">
                            <input name="email" type="email" className="form-control" placeholder="Email Address*"/>
                        </div>
                        <div className="form-group">
                            <input name="subject" type="text" className="form-control" placeholder="Subject*"/>
                        </div>
                        <div className="form-group">
                            <textarea name="message" type="text" className="form-control" placeholder="Your Message*"/>
                        </div>
                        <div className="form-group text-center">
                           <input type="Submit" className="btn btn-style" value="Submit"/>
                       </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;