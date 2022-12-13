import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Home = () =>{

    const [productline , setProductLine] = useState();
    const [productplan , setProductPlan] = useState();
    const [addoption , setAddOption] = useState(); 
    const [pricedollor , setPriceDollor] = useState();
    const [dPercenatge , setDPercenatge] = useState();
    const [packagename , setPackageName] = useState();
    const [saasalert , setSaasAlert] = useState();
    
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
                        <h3>Microsoft</h3>
                        <div className="col-lg-3 col-md-3 wow fadeInUp" data-wow-delay="0.1s">
                            <label>Product Line</label>
                            <select  value={productline} 
              onChange={(e) => setProductLine(e.target.value)} class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option>Please Select Product Line</option>
                                <option value="25">Microsoft 365 for Business</option>
                                <option value="3">Microsoft 365 for Enterprise</option>
                                <option value="3">Office 365 for Enterprise</option>
                            </select>    
                        </div>

                        <div className="col-lg-3 col-md-3 wow fadeInUp" data-wow-delay="0.1s">
                            <label>Product Plans</label>
                            <select  value={productplan} 
              onChange={(e) => setProductPlan(e.target.value)} class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option>Please Select Product Plans</option>
                                <option value="25">Premium</option>
                                <option value="40">Basic</option>
                                <option value="30">Standard</option>
                            </select>    
                        </div>

                        <div className="col-lg-3 col-md-3 wow fadeInUp" data-wow-delay="0.1s">
                            <label>Add-On Options</label>
                            <select  value={addoption} 
              onChange={(e) => setAddOption(e.target.value)} class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option>Please Select Add-On Options</option>
                                <option value="Azure Active Directory Premium P1 (Included)">Azure Active Directory Premium P1 (Included)</option>
                                <option value="Azure Active Directory Premium P1 (Included)">Azure Active Directory Premium P2 (Add-on)</option>
                            </select>    
                        </div>

                        <div className="col-lg-3 col-md-3 wow fadeInUp" data-wow-delay="0.1s">
                            <label>Reseller Discount</label>
                            <select value={dPercenatge} 
              onChange={(e) => setDPercenatge(e.target.value)} class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option>Please Select Reseller Discount</option>
                                <option value="20">CSP Indirect 20%</option>
                                <option value="19">19%</option>
                                <option value="18">18%</option>
                                <option value="17">17%</option>
                                <option value="16">16%</option>
                                <option value="15">CSP Indirect 15%</option>
                                <option value="14">14%</option>
                                <option value="13">13%</option>
                                <option value="12">12%</option>
                                <option value="11">11%</option>
                                <option value="10">10%</option>
                            </select>    
                        </div>

                        <h3>SaaS Alert</h3>
                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <label>Saas Alert Inclusion</label>
                            <select  value={saasalert} 
              onChange={(e) => setSaasAlert(e.target.value)} class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option>Please Select Saas Alert Inclusion</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>    
                        </div>

                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <label>SaaS Alert Price (Write-In)</label>
                            <select  value={pricedollor} 
              onChange={(e) => setPriceDollor(e.target.value)} className={ saasalert == 'Yes' ? '3 form-select form-select-sm' : 'disabled form-select form-select-sm' } aria-label=".form-select-sm example">
                                <option>Please Select SaaS Alert Price (Write-In)</option>
                                <option value="3">$3</option>
                            </select>    
                        </div>


                        <h3>Popular Microsoft Packages</h3>
                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <label>Popular Microsoft Packages</label>
                            <select  value={packagename} 
              onChange={(e) => setPackageName(e.target.value)} class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option>Please Select Popular Microsoft Packages</option>
                                <option value="Microsoft 365 for Business Standard Azure Active Directory Premium P1 (Add-on)">Microsoft 365 for Business Standard Azure Active Directory Premium P1 (Add-on)</option>
                                <option value="Microsoft 365 for Business Premium Azure Active Directory Premium P1 (Included)">Microsoft 365 for Business Premium Azure Active Directory Premium P1 (Included)</option>
                                <option value="Office 365 for Enterprise E1 Azure Active Directory Premium P1 (Add-on)">Office 365 for Enterprise E1 Azure Active Directory Premium P1 (Add-on)</option>
                                <option value="Microsoft 365 for Enterprise E3 Azure Active Directory Premium P1 (Included)">Microsoft 365 for Enterprise E3 Azure Active Directory Premium P1 (Included)</option>
                                <option value="Office 365 for Enterprise E5 Azure Active Directory Premium P1 (Add-on)">Office 365 for Enterprise E5 Azure Active Directory Premium P1 (Add-on)</option>
                                <option value="Microsoft 365 for Enterprise E5 Azure Active Directory Premium P2 (Included)">Microsoft 365 for Enterprise E5 Azure Active Directory Premium P2 (Included)</option>
                            </select>    
                        </div>


                        <div className="col-lg-12 col-md-12 wow fadeInUp text-center" data-wow-delay="0.5s">
                            <Link to="/package" state={{percentage:dPercenatge, packagename:packagename, productline:productline , productplan:productplan, addoption:addoption, saasalert:saasalert, pricedollor:pricedollor}} type="submit" class="btn btn-primary">Submit</Link>
                        </div>

                    </div>
                </div>
            </div>
   
        </>
    );

};

export default Home;


