import React from 'react';
import {Link} from 'react-router-dom';

const Header = () =>{

    return(
        <>
       
            <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-border position-relative text-primary" style={{ width: '6rem', height: '6rem' }} role="status"></div>
                <img className="position-absolute top-50 start-50 translate-middle" src="assets/img/icons/icon-1.png" alt="Icon" />
            </div>
        
            <div className="container-fluid bg-dark p-0 wow fadeIn" data-wow-delay="0.1s">
                <div className="row gx-0 d-none d-lg-flex">
                    <div className="col-lg-7 px-5 text-start">
                        <div className="h-100 d-inline-flex align-items-center py-3 me-3">
                            <Link className="text-body px-2" to="tel:+0123456789"><i className="fa fa-phone-alt text-primary me-2"></i>+012 345 6789</Link>
                            <Link className="text-body px-2" to="mailto:info@example.com"><i className="fa fa-envelope-open text-primary me-2"></i>info@example.com</Link>
                        </div>
                    </div>
                    <div className="col-lg-5 px-5 text-end">
                        <div className="h-100 d-inline-flex align-items-center py-3 me-2">
                            <Link className="text-body px-2" to="">Terms</Link>
                            <Link className="text-body px-2" to="">Privacy</Link>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center">
                            <Link className="btn btn-sm-square btn-outline-body me-1" to=""><i className="fab fa-facebook-f"></i></Link>
                            <Link className="btn btn-sm-square btn-outline-body me-1" to=""><i className="fab fa-twitter"></i></Link>
                            <Link className="btn btn-sm-square btn-outline-body me-1" to=""><i className="fab fa-linkedin-in"></i></Link>
                            <Link className="btn btn-sm-square btn-outline-body me-0" to=""><i className="fab fa-instagram"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            
            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                <Link to="/" className="navbar-brand ms-4 ms-lg-0">
                    <h1 className="text-primary m-0"><img className="me-3" src="assets/img/icons/icon-1.png" alt="Icon" />Compare</h1>
                </Link>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <Link to="/" className="nav-item nav-link active"> Home </Link>
                        <Link to="/about" className="nav-item nav-link"> About Us </Link>
                        <Link to="/service" className="nav-item nav-link"> Services </Link>
                        
                        <Link to="/contact" className="nav-item nav-link"> Contact </Link>
                    </div>
                    <Link to="" className="btn btn-primary py-2 px-4 d-none d-lg-block">Appointment</Link>
                </div>
            </nav>
    
        </>
    );

};

export default Header;