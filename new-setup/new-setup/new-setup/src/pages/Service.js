import React from 'react';
import {Link} from 'react-router-dom';

const Service = () =>{

    return(
        <>

            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <h1 className="display-1 text-white animated slideInDown">Services</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb text-uppercase mb-0">
                            <li className="breadcrumb-item"><Link className="text-white" to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link className="text-white" to="#">Pages</Link></li>
                            <li className="breadcrumb-item text-primary active" aria-current="page">Services</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="container-xxl py-5">
                <div className="container pt-5">
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="fact-item text-center bg-light h-100 p-5 pt-0">
                                <div className="fact-icon">
                                    <img src="assets/img/icons/icon-2.png" alt="Icon" />
                                </div>
                                <h3 className="mb-3">Design Approach</h3>
                                <p className="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="fact-item text-center bg-light h-100 p-5 pt-0">
                                <div className="fact-icon">
                                    <img src="assets/img/icons/icon-3.png" alt="Icon" />
                                </div>
                                <h3 className="mb-3">Innovative Solutions</h3>
                                <p className="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="fact-item text-center bg-light h-100 p-5 pt-0">
                                <div className="fact-icon">
                                    <img src="assets/img/icons/icon-4.png" alt="Icon" />
                                </div>
                                <h3 className="mb-3">Project Management</h3>
                                <p className="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                        <h4 className="section-title">Our Services</h4>
                        <h1 className="display-5 mb-4">We Focused On Modern Architecture And Interior Design</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item d-flex position-relative text-center h-100">
                                <img className="bg-img" src="assets/img/service-1.jpg" alt="" />
                                <div className="service-text p-5">
                                    <img className="mb-4" src="assets/img/icons/icon-5.png" alt="Icon" />
                                    <h3 className="mb-3">Architecture</h3>
                                    <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <Link className="btn" to=""><i className="fa fa-plus text-primary me-3"></i>Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item d-flex position-relative text-center h-100">
                                <img className="bg-img" src="assets/img/service-2.jpg" alt="" />
                                <div className="service-text p-5">
                                    <img className="mb-4" src="assets/img/icons/icon-6.png" alt="Icon" />
                                    <h3 className="mb-3">3D Animation</h3>
                                    <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <Link className="btn" to=""><i className="fa fa-plus text-primary me-3"></i>Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item d-flex position-relative text-center h-100">
                                <img className="bg-img" src="assets/img/service-3.jpg" alt="" />
                                <div className="service-text p-5">
                                    <img className="mb-4" src="assets/img/icons/icon-7.png" alt="Icon" />
                                    <h3 className="mb-3">House Planning</h3>
                                    <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <Link className="btn" to=""><i className="fa fa-plus text-primary me-3"></i>Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item d-flex position-relative text-center h-100">
                                <img className="bg-img" src="assets/img/service-4.jpg" alt="" />
                                <div className="service-text p-5">
                                    <img className="mb-4" src="assets/img/icons/icon-8.png" alt="Icon" />
                                    <h3 className="mb-3">Interior Design</h3>
                                    <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <Link className="btn" to=""><i className="fa fa-plus text-primary me-3"></i>Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item d-flex position-relative text-center h-100">
                                <img className="bg-img" src="assets/img/service-5.jpg" alt="" />
                                <div className="service-text p-5">
                                    <img className="mb-4" src="assets/img/icons/icon-9.png" alt="Icon" />
                                    <h3 className="mb-3">Renovation</h3>
                                    <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <Link className="btn" to=""><i className="fa fa-plus text-primary me-3"></i>Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item d-flex position-relative text-center h-100">
                                <img className="bg-img" src="assets/img/service-6.jpg" alt="" />
                                <div className="service-text p-5">
                                    <img className="mb-4" src="assets/img/icons/icon-10.png" alt="Icon" />
                                    <h3 className="mb-3">Construction</h3>
                                    <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <Link className="btn" to=""><i className="fa fa-plus text-primary me-3"></i>Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                        <h4 className="section-title">Testimonial</h4>
                        <h1 className="display-5 mb-4">Thousands Of Customers Who Trust Us And Our Services</h1>
                    </div>
                    <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                        <div className="testimonial-item text-center" data-dot="<img className='img-fluid' src='assets/img/testimonial-1.jpg' alt=''>">
                            <p className="fs-5">Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                            <h3>Client Name</h3>
                            <span className="text-primary">Profession</span>
                        </div>
                        <div className="testimonial-item text-center" data-dot="<img className='img-fluid' src='assets/img/testimonial-2.jpg' alt=''>">
                            <p className="fs-5">Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                            <h3>Client Name</h3>
                            <span className="text-primary">Profession</span>
                        </div>
                        <div className="testimonial-item text-center" data-dot="<img className='img-fluid' src='assets/img/testimonial-3.jpg' alt=''>">
                            <p className="fs-5">Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                            <h3>Client Name</h3>
                            <span className="text-primary">Profession</span>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Service;