import React from 'react';
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const SinglePackage = () =>{
    
    const location = useLocation();
    const dollorpercentage = location?.state;
    const packagenamenew = dollorpercentage?.packagenamenew;
    const dollorspercentage = dollorpercentage?.dollorspercentage;
    const value = dollorpercentage?.value;
    const saasalert = dollorpercentage?.saasalert;
    //console.log(dollorpercentage);

    return(
        <>
            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <h1 className="display-1 text-white animated slideInDown">Microsoft 365 for BusinessStanadardAzure Active Directory Premium P1(Add-on)</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb text-uppercase mb-0">
                            <li className="breadcrumb-item"><Link className="text-white" to="/">Home</Link></li>
                            <li className="breadcrumb-item text-primary active" aria-current="page">Microsoft 365 for BusinessStanadardAzure Active Directory Premium P1(Add-on)</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div class="container add_sect-tt">
                <div class="row">
                    <div class="add_single_cls">
                        <h1>Microsoft Package Comparison Summary for MSPs</h1> 
                        <h3>The Custom Package you selected bears the following financial breakdown:</h3>
                        <table class="dcf-table dcf-table-responsive dcf-table-bordered dcf-table-striped dcf-w-100%">
                            <tbody>
                                <tr>
                                    <th scope="row"></th>
                                    <td>Price</td>
                                    <td>Margin ($)</td>
                                    <td>Margin (%)</td>
                                </tr>
                                <tr>
                                    <th scope="row">Package (Total)</th>
                                    <td className="addtd">$25.00</td>
                                    <td className="addtd">$6.46</td>
                                    <td className="addtd">25.84%</td>
                                </tr>
                                <tr>
                                    <th scope="row"> Microsoft Base</th>
                                    <td>$22.00</td>
                                    <td>$3.96</td>
                                    <td>18.00%</td>
                                </tr>
                                <tr>
                                    <th scope="row">Microsoft Add-on</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">SaaS Alerts</th>
                                    <td>$3.00</td>
                                    <td>$2.50</td>
                                    <td>83.33%</td>
                                </tr>
                            </tbody>
                        </table> 
                    </div>

                    <div class="add_single_cls_nl">
                        <h2>Side-by-side, here's how it stacks up to the Comparison Package:</h2>
                        <table class="dcf-table dcf-table-responsive dcf-table-bordered dcf-table-striped dcf-w-100%">
                            <tbody>
                                <tr>
                                    <th scope="row"></th>
                                    <td className="brline">Microsoft 365 for Business 
                        Premium 
                        Azure Active Directory Premium P1 (Included)</td>
                                    <td className="brline">{packagenamenew}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row"></th>
                                    <td>Custom Package</td>
                                    <td>Comparison Package</td>
                                    <td>Difference</td>
                                </tr>
                                <tr>
                                    <th scope="row">Pricing</th>
                                    <td className="addtd">$25.00</td>
                                    <td className="addtd">${value}</td>
                                    <td className="addtd">{(25-value)}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Margin $</th>
                                    <td className="addtd">$6.46</td>
                                    <td className="addtd">{(value/100*(dollorspercentage)).toFixed(2)}</td>
                                    <td className="addtd">${(6.46-(value/100*(dollorspercentage))).toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Margin %</th>
                                    <td className="addtd">26%</td>
                                    <td className="addtd">{dollorspercentage}%</td>
                                    <td className="addtd">{26-dollorspercentage}%</td>
                                </tr>
                            </tbody>
                        </table> 
                    </div>    
                    <div class="cont-add">
                        <h3>Security packaging tip:</h3> 
                        <p>Because you have selected Business Premium + Azure Active Directory P1 + SaaS Alerts for your package, you're not only offering more robust security by bridging cloud app security gaps with SaaS Alerts,
                            you're making more margin than if you had instead selected the same package without SaaS Alerts, and offering price savings for equivalent practical security features of E3 or E5.</p>  
                        <h3>Packaging implications of SaaS Alerts:</h3>

                        <p>By adding SaaS Alerts to your package, you're offering your clients an additional, critical layer of protection. </p>

                        <p>SaaS application monitoring through SaaS Alerts is specifically aimed at safeguarding access to the sensitive data residing in the cloud-based tools 
                            responsible for driving your clients' daily operations.</p>

                        <p>Enabling constant, real-time monitoring of SaaS applications, SaaS Alerts delivers unique benefits to small-to-medium businesses, such as:</p>

                        <b>PURPOSE-BUILT</b>
                        <p>Detects threats that your SaaS application vendors would otherwise overlook, offering unbiased protection for the specific needs of small businesses.</p>

                        <b>INTELLIGENT</b>
                        <p>Leverages automation to identify risk drivers and expedite remediation, while alerts may be fine tuned to address your risk sensitivity.</p>

                        <b>CONNECTED</b>
                        <p>Provides comprehensive alerting across all of your business-critical SaaS applications, instead of limiting monitoring to one app at a time.</p>	

                        <p><Link state={{ packagenamenew:packagenamenew, value:18.50 }} to="/pdf-generate">Respective to the Comparison Package, your Custom Package...	</Link></p>
                    </div>
                </div>
            </div>        

        </>
    );

};

export default SinglePackage;