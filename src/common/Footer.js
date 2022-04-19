import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () =>{

    return(
        <>
       
            <div className="container-fluid bg-dark text-body footer mt-5 pt-5 px-0 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6">
                            <h3 className="text-light mb-4">Address</h3>
                            <p className="mb-2"><i className="fa fa-map-marker-alt text-primary me-3"></i>123 Street, New York, USA</p>
                            <p className="mb-2"><i className="fa fa-phone-alt text-primary me-3"></i>+012 345 67890</p>
                            <p className="mb-2"><i className="fa fa-envelope text-primary me-3"></i>info@example.com</p>
                            <div className="d-flex pt-2">
                                <Link className="btn btn-square btn-outline-body me-1" to=""><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-square btn-outline-body me-1" to=""><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-square btn-outline-body me-1" to=""><i className="fab fa-youtube"></i></Link>
                                <Link className="btn btn-square btn-outline-body me-0" to=""><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <h3 className="text-light mb-4">Services</h3>
                            <Link className="btn btn-link" to="">Architecture</Link>
                            <Link className="btn btn-link" to="">3D Animation</Link>
                            <Link className="btn btn-link" to="">House Planning</Link>
                            <Link className="btn btn-link" to="">Interior Design</Link>
                            <Link className="btn btn-link" to="">Construction</Link>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <h3 className="text-light mb-4">Quick Links</h3>
                            <Link className="btn btn-link" to="">About Us</Link>
                            <Link className="btn btn-link" to="">Contact Us</Link>
                            <Link className="btn btn-link" to="">Our Services</Link>
                            <Link className="btn btn-link" to="">Terms & Condition</Link>
                            <Link className="btn btn-link" to="">Support</Link>
                        </div>
                    </div>
                </div>
                <div className="container-fluid copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <Link to="www.vibgyorweb.com">VibgyorWeb</Link>, All Right Reserved.
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                               
                                Designed & Developed By <Link target="_balnk" to="www.vibgyorweb.com">VibgyorWeb</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
        </>
    );

};

export default Footer;