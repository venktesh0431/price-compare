import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () =>{

    return(
        <>
       
            <div className="container-fluid bg-dark text-body footer mt-5 px-0 wow fadeIn" data-wow-delay="0.1s">
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