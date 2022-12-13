import React from 'react';
import {Link} from 'react-router-dom';
import jsPDF from "jspdf";
import {useLocation} from 'react-router-dom';

const SinglePackage = () =>{
    //console.log(props,'Testing');

    const location = useLocation();
    const pname = location.state.name
    console.log(pname); 
   const  pdfGenerator = () =>{
        var doc = new jsPDF('p','pt', 'a4');
        doc.html(20, document.querySelector("#pdf_div"));
        doc.save("generated.pdf");  
    }

    return(
        <>
            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <h1 className="display-1 text-white animated slideInDown">{pname.package_name}</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb text-uppercase mb-0">
                            <li className="breadcrumb-item"><Link className="text-white" to="/">Home</Link></li>
                            <li className="breadcrumb-item text-primary active" aria-current="page">{pname.package_name}</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="container-xxl py-5">
                <div className="container">
                    <h1>Single Package Detail</h1>
                </div>
            </div>  
            
            <div id="pdf_div" class="container addproductresult">
                <div class="row">
                    <table>
                        <thead>
                            <tr>
                                <td></td>
                                <th>Microsoft 365 for Business Premium Azure Active Directory Premium P1 (Included)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>PRICING (per person/month)</th>
                                <td>{pname.price}</td>
                            </tr>
                            <tr>
                                <th>MARGIN $(per person/month)</th>
                                <td>{pname.magin_dollor}</td>
                            </tr>
                            <tr>
                                <th>MARGIN %</th>
                                <td>{pname.magin_percentage}</td>
                            </tr>
                        </tbody>
                        <tbody></tbody>
                    </table>
                </div>
            </div>


    <div class="container add_sect-tt">
        <div class="row">
                <h1>Microsoft Packaging Calculator</h1> 
            <table class="dcf-table dcf-table-responsive dcf-table-bordered dcf-table-striped dcf-w-100%">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col">Microsoft Package Comparison Summary for MSPs</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr>
                        <th scope="row"></th>
                        <td>The Custom Package you selected bears the following financial breakdown:</td>
                        <td></td>
                        <td></td>
                    </tr>
                    
                    <tr>
                        <th scope="row"></th>
                        <td>Price</td>
                        <td>Margin ($)</td>
                        <td>Margin (%)</td>
                    </tr>
                    <tr>
                        <th scope="row">Package (Total)</th>
                        <td>$25.00</td>
                        <td>$6.46</td>
                        <td>25.84%</td>
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
                    <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>Side-by-side, here's how it stacks up to the Comparison Package:</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>Microsoft 365 for Business 
            Premium 
            Azure Active Directory Premium P1 (Included)</td>
                        <td>Microsoft 365 for Enterprise
            E3
            Azure Active Directory Premium P1 (Included)</td>
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
                        <td>$25.00</td>
                        <td>$36.00</td>
                        <td>-$11.00</td>
                    </tr>
                    <tr>
                        <th scope="row">Margin $</th>
                        <td>$6.46</td>
                        <td>$6.48</td>
                        <td>-$0.02</td>
                    </tr>
                    <tr>
                        <th scope="row">Margin %</th>
                        <td>26%</td>
                        <td>18.0%</td>
                        <td>8%</td>
                    </tr>
                </tbody>
            </table> 
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

                 <button class="btn btn-primary" onClick={pdfGenerator}>Generate PDF</button>	
            </div>
        </div>
    </div>        


           
        </>
    );

};

export default SinglePackage;