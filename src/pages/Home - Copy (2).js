import React from 'react';
import {Link} from 'react-router-dom';

const Home = () =>{
    
    return(
        <>

        <div className="container-xxl py-5">
            <div className="container">      
                <section className="intro">
                    <div className="row g-4 align-middle">
                        <div className="col-sm-12 col-md-6 columns">
                            <h1>Protect &amp; Monetize Your Clients' SaaS Applications</h1>
                            <p>MSP Exclusive Platform for Unified Monitoring and Alerting of Core Business SaaS Applications.</p>
                            <p><a href="https://manage.saasalerts.com/sign-up" target="_blank" className="button">start free trial</a></p>
                        </div>
                        <div className="col-sm-12 col-md-6 columns">
                            <img src="assets/img/saas_homepage_wheel_graphic.png" alt="SaaS Alerts" />
                        </div>
                    </div>
                </section>
            </div>
        </div>    


        <div className="container-xxl py-5">
            <div className="container pt-5">
                <div className="row g-4 addcomparesec">
                    <h1>Microsoft Security Packaging Calculator for MSPs</h1>
                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <select  value="" class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option>Please Select Microsoft Package</option>
                            
                                <option value="Microsoft">Microsoft</option>
                                <option value="SaaS Alerts">SaaS Alerts</option>
                                <option value="Popular Microsoft Packages">Popular Microsoft Packages</option>
                        </select>    
                    </div>

                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <select  value="" class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option selected>Please Select Microsoft Package</option>
                            
                                <option value="Product Line">Product Line</option>
                                <option value="Product Plans">Product Plans</option>
                                <option value="Add-On Options">Add-On Options</option>
                                <option value="Reseller Discount">Reseller Discount</option>
                                <option value="Reseller Discount">SaaS Alerts Inclusion</option>
                                <option value="SaaS Alerts Price (Write-In)">SaaS Alerts Price (Write-In)</option>
                        </select>   
                    </div>

                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <select  value="" class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option selected>Please Select Microsoft Package</option>
                            
                                <option value="Microsoft 365 for Business">Microsoft 365 for Business</option>
                                <option value="Premium">Premium</option>
                                <option value="Azure Active Directory Premium P1 (Included)">Azure Active Directory Premium P1 (Included)</option>
                                <option value="18%">18%</option>
                                <option value="Yes">Yes</option>
                                <option value="$3">$3</option>
                                <option value="$3">Microsoft 365 for Enterprise E3 Azure Active Directory Premium P1 (Included)</option>
                        </select>   
                    </div>

                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <select  value="" class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option selected>Please Select Microsoft Package</option>
                            
                                <option value="Microsoft 365 for Business">Microsoft 365 for Business</option>
                                <option value="Microsoft 365 for Enterprise">Microsoft 365 for Enterprise</option>
                                <option value="Office 365 for business">Azure Active Directory Premium P1 (Included)</option>
                                <option value="Basic">Basic</option>
                                <option value="Standard">Standard</option>
                                <option value="Premium">Premium</option>
                                <option value="Premium">Premium</option>
                                <option value="Azure Active Directory Premium P1 (Included)">Azure Active Directory Premium P1 (Included)</option>
                                <option value="Azure Active Directory Premium P1 (Included)">Azure Active Directory Premium P2 (Add-on)</option>
                                <option value="18%">18%</option>
                                <option value="17%">17%</option>
                                <option value="16%">16%</option>
                                <option value="CSP Indirect 15%">15%</option>
                                <option value="14%">14%</option>
                                <option value="13%">13%</option>
                                <option value="12%">12%</option>
                                <option value="11%">11%</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                                <option value="Microsoft 365 for BusinessStanadardAzure Active Directory Premium P1(Add-on)">Microsoft 365 for BusinessStanadardAzure Active Directory Premium P1(Add-on)</option>
                                <option value="Microsoft 365 for BusinessPremiumAzure Active Directory Premium P1(Included)">Microsoft 365 for BusinessPremiumAzure Active Directory Premium P1(Included)</option>
                                <option value="Office 365 for EnterpriseE1Azure Active Directory Premiun P1(Add-on)">Office 365 for EnterpriseE1Azure Active Directory Premiun P1(Add-on)</option>
                                <option value="Microsoft 365 for EnterpriseE3Azure Active Directory Premiun P1(Included)">Microsoft 365 for EnterpriseE3Azure Active Directory Premiun P1(Included)</option>
                                <option value="Office 365 for EnterpriseE5Azure Active Directory Premiun P1(Add-on)">Office 365 for EnterpriseE5Azure Active Directory Premiun P1(Add-on)</option>
                                <option value="Microsoft 365 for EnterpriseE5Azure Active Directory Premiun P2(Included)">Microsoft 365 for EnterpriseE5Azure Active Directory Premiun P2(Included)</option>
                        </select>   
                    </div>

                    <div className="col-lg-12 col-md-12 wow fadeInUp text-center" data-wow-delay="0.5s">
                        <Link to="/package" type="submit" class="btn btn-primary">Submit</Link>
                    </div>

                </div>
            </div>
        </div>
   

        
          
        </>
    );

};

export default Home;


