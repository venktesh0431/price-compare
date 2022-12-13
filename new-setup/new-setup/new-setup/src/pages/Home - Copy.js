import React from 'react';
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () =>{
    const [data,setData] = useState([]) 
    const [data1,setData1] = useState([])
    const [data2,setData2] = useState([])
    const [firstid, setFirstId] = useState('');
    const [secondid, setSecondId] = useState('');
    const [show, setShow] = useState(false);
    console.log("result",firstid,secondid);
    useEffect(()=>{
        fetch(`http://localhost:6002/tasklist`).then((result)=>{
            result.json().then((resp)=>{
                //console.log("result",resp);  
                setData(resp)  
            })  
        });     
    },[])
    const productSubmit=()=>{
        fetch(`http://localhost:6002/tasklist/${firstid}`).then((result)=>{
            result.json().then((resp)=>{
                //console.log("result",resp);
                setData1(resp)  
            })
        });
        fetch(`http://localhost:6002/tasklist/${secondid}`).then((result)=>{
            result.json().then((resp)=>{
                //console.log("result",resp);
                setData2(resp)  
            })
        });
        setShow(true);
    }
    console.log(data1);
    console.log(data2);
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
                        <h1>Please Select Your Brand</h1>
                        <div className="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <select  value={firstid} 
              onChange={(e) => setFirstId(e.target.value)} class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option>Please Enter First Product</option>
                                {data.map((item) => 
                                    <option value={item._id}>{item.package_name}</option>
                                )}   
                            </select>    
                        </div>

                        <div className="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <select  value={secondid} 
              onChange={(e) => setSecondId(e.target.value)} class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option selected>Please Enter Second Product</option>
                                {data.map((item) => 
                                    <option value={item._id}>{item.package_name}</option>
                                )}  
                            </select>   
                        </div>

                        <div className="col-lg-2 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <button onClick={productSubmit} type="submit" class="btn btn-primary">Submit</button>
                        </div>

                    </div>
                </div>
            </div>
            { show?                         
                <div className="container addproductresult">
                    <div className="row">
                        <table>
                            <thead>
                                <tr>
                                    <td></td>
                                    <th>{data1.package_name}</th>
                                    <th>{data2.package_name}</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>PRICING (per person/month)</th>
                                    <td>{data1.price}</td>
                                    <td>{data2.price}</td>
                                </tr>
                                <tr>
                                    <th>MARGIN $(per person/month)</th>
                                    <td>{data1.magin_dollor}</td>
                                    <td>{data2.magin_dollor}</td>
                                </tr>
                                <tr>
                                    <th>MARGIN %</th>
                                    <td>{data1.magin_percentage}</td>
                                    <td>{data2.magin_percentage}</td>
                                </tr>

                                <tr>
                                    <th>Detail</th>
                                    <td> <Link to='/single-package' state={{name:data1}}> Read More </Link></td>
                                    <td> <Link to='/single-package' state={{name:data2}}> Read More </Link></td>
                                </tr>
                            </tbody>
                            <tbody></tbody>  
                        </table>
                    </div>
                </div> :null
            } 
            


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
                            <link to="/package" type="submit" class="btn btn-primary">Submit</link>
                        </div>

                    </div>
                </div>
            </div>
   

        <div class="container add_sect-tt">
            <div class="row"> 
                      
                <table class="dcf-table dcf-table-responsive dcf-table-bordered dcf-table-striped dcf-w-100%">
                    <thead>
                        <tr>
                            <td></td>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col">Comparison Package</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td>Custom Package</td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td data-label="Comparison Package">4</td>
                            <td>5</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>Microsoft 365 for Business 
                Premium 
                Azure Active Directory Premium P1 (Included)</td>
                            <td>Microsoft 365 for Business
                Standard
                Azure Active Directory Premium P1 (Add-on)</td>
                            <td>Microsoft 365 for Business
                Premium
                Azure Active Directory Premium P1 (Included)</td>
                            <td>Office 365 for Enterprise
                E1
                Azure Active Directory Premium P1 (Add-on)</td>
                            <td data-label="Comparison Package">Microsoft 365 for Enterprise
                E3
                Azure Active Directory Premium P1 (Included)</td>
                            <td>Office 365 for Enterprise
                E5
                Azure Active Directory Premium P1 (Add-on)</td>
                            <td>Microsoft 365 for Enterprise
                E5
                Azure Active Directory Premium P2 (Included)</td>
                        </tr>
                        <tr>
                            <th scope="row">PRICING 
                (per person/month)</th>
                            <td>$25.00</td>
                            <td>$18.50</td>
                            <td>$22.00</td>
                            <td>$16.00</td>
                            <td data-label="Comparison Package">$36.00</td>
                            <td>$44.00</td>
                            <td>$57.00</td>
                        </tr>
                        <tr>
                            <th scope="row">MARGIN $
                (per person/month)</th>
                            <td>$6.46</td>
                            <td>$3.33</td>
                            <td>$3.96</td>
                            <td>$2.88</td>
                            <td data-label="Comparison Package">$6.48</td>
                            <td>$7.92</td>
                            <td>$10.26</td>
                        </tr>
                        <tr>
                            <th scope="row">MARGIN %</th>
                            <td>26%</td>
                            <td>18%</td>
                            <td>18%</td>
                            <td>18%</td>
                            <td data-label="Comparison Package">18%</td>
                            <td>18%</td>
                            <td>18%</td>
                        </tr>
                        <tr>
                            <th scope="row">Microsoft 365 Apps</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Email, calendar, and scheduling</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Meetings, calling, and chat</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Social, intranet, and storage</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Knowledge, insights, and content</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Analytics</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Project and task management</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Automation, app building, and chatbots</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Viva learning</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Threat protection</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Microsoft Defender Antimalware</th>
                            <td>●</td>
                            <td></td>
                            <td>●</td>
                            <td>●</td>
                            <td data-label="Comparison Package">●</td>
                            <td>●</td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Microsoft Defender Firewall</th>
                            <td>●</td>
                            <td></td>
                            <td>●</td>
                            <td>●</td>
                            <td data-label="Comparison Package">●</td>
                            <td>●</td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Microsoft Defender Exploit Guard</th>
                            <td>●</td>
                            <td></td>
                            <td>●</td>
                            <td>●</td>
                            <td data-label="Comparison Package">●</td>
                            <td>●</td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Microsoft Defender Credential Guard</th>
                            <td>●</td>
                            <td></td>
                            <td>●</td>
                            <td>●</td>
                            <td data-label="Comparison Package">●</td>
                            <td>●</td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">BitLocker and BitLocker To Go</th>
                            <td>●</td>
                            <td></td>
                            <td>●</td>
                            <td>●</td>
                            <td data-label="Comparison Package">●</td>
                            <td>●</td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Windows Information Protection</th>
                            <td>●</td>
                            <td></td>
                            <td>●</td>
                            <td>●</td>
                            <td data-label="Comparison Package">●</td>
                            <td>●</td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Microsoft Defender for Endpoint Plan 2</th>
                            <td> </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Microsoft Defender for Identity</th>
                            <td> </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Microsoft Defender for Office 365 Plan 2</th>
                            <td> </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Application Guard for Office 365</th>
                            <td>●</td>
                            <td></td>
                            <td>●</td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Safe Documents</th>
                            <td> </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Cloud access security broker</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Microsoft Defender for Cloud Apps</th>
                            <td> </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Microsoft Defender for Cloud Apps Discovery</th>
                            <td>●</td>
                            <td>●</td>
                            <td>●</td>
                            <td>●</td>
                            <td data-label="Comparison Package">●</td>
                            <td>●</td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Office 365 Cloud App Security</th>
                            <td> </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td>●</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Identity and access management</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Azure Active Directory Premium Plan 1</th>
                            <td>●</td>
                            <td>●</td>
                            <td>●</td>
                            <td>●</td>
                            <td data-label="Comparison Package">●</td>
                            <td>●</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Azure Active Directory Premium Plan 2</th>
                            <td> </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">User Provisioning</th>
                            <td>●</td>
                            <td>●</td>
                            <td>●</td>
                            <td>●</td>
                            <td data-label="Comparison Package">●</td>
                            <td>●</td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Self Service Password Reset</th>
                            <td>●</td>
                            <td>●</td>
                            <td>●</td>
                            <td>●</td>
                            <td data-label="Comparison Package">●</td>
                            <td>●</td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Multi Factor Authentication</th>
                            <td>●</td>
                            <td>●</td>
                            <td>●</td>
                            <td>●</td>
                            <td data-label="Comparison Package">●</td>
                            <td>●</td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Conditional Access</th>
                            <td>●</td>
                            <td>●</td>
                            <td>●</td>
                            <td>●</td>
                            <td data-label="Comparison Package">●</td>
                            <td>●</td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Risk Based Conditional Access / Identity Protection</th>
                            <td> </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Privileged Identity Management</th>
                            <td> </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Access Reviews</th>
                            <td> </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Entitlement Management</th>
                            <td> </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">On-premises Active Directory sync for SSO</th>
                            <td>●</td>
                            <td>●</td>
                            <td>●</td>
                            <td>●</td>
                            <td data-label="Comparison Package">●</td>
                            <td>●</td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Windows Hello for Business</th>
                            <td>●</td>
                            <td>●</td>
                            <td>●</td>
                            <td>●</td>
                            <td data-label="Comparison Package">●</td>
                            <td>●</td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Windows Store Access Management</th>
                            <td>●</td>
                            <td></td>
                            <td>●</td>
                            <td></td>
                            <td data-label="Comparison Package">●</td>
                            <td></td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Endpoint and app management</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Microsoft Intune</th>
                            <td>●</td>
                            <td></td>
                            <td>●</td>
                            <td></td>
                            <td data-label="Comparison Package">●</td>
                            <td></td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Mobile Device Management</th>
                            <td>●</td>
                            <td></td>
                            <td>●</td>
                            <td>●</td>
                            <td data-label="Comparison Package">●</td>
                            <td>●</td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Microsoft Endpoint Manager</th>
                            <td>●</td>
                            <td></td>
                            <td>●</td>
                            <td></td>
                            <td data-label="Comparison Package">●</td>
                            <td></td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Mobile application management</th>
                            <td>●</td>
                            <td></td>
                            <td>●</td>
                            <td></td>
                            <td data-label="Comparison Package">●</td>
                            <td></td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Windows AutoPilot</th>
                            <td>●</td>
                            <td></td>
                            <td>●</td>
                            <td></td>
                            <td data-label="Comparison Package">●</td>
                            <td></td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Group Policy support</th>
                            <td>●</td>
                            <td></td>
                            <td>●</td>
                            <td></td>
                            <td data-label="Comparison Package">●</td>
                            <td>●</td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Shared computer activation for M365 Apps</th>
                            <td>●</td>
                            <td></td>
                            <td>●</td>
                            <td></td>
                            <td data-label="Comparison Package">●</td>
                            <td>●</td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Endpoint Analytics</th>
                            <td>●</td>
                            <td></td>
                            <td>●</td>
                            <td></td>
                            <td data-label="Comparison Package">●</td>
                            <td></td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Cortana management</th>
                            <td>●</td>
                            <td></td>
                            <td>●</td>
                            <td></td>
                            <td data-label="Comparison Package">●</td>
                            <td></td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Information Governance</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Information protection</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">eDiscovery and auditing</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Insider risk management</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Windows</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Windows 10 Edition</th>
                            <td>Business</td>
                            <td></td>
                            <td>Business</td>
                            <td></td>
                            <td data-label="Comparison Package">Enterprise</td>
                            <td></td>
                            <td>Enterprise</td>
                        </tr>
                        <tr>
                            <th scope="row">Azure Virtual Desktop</th>
                            <td>●</td>
                            <td></td>
                            <td>●</td>
                            <td></td>
                            <td data-label="Comparison Package">●</td>
                            <td></td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Universal Print</th>
                            <td>●</td>
                            <td></td>
                            <td>●</td>
                            <td></td>
                            <td data-label="Comparison Package">●</td>
                            <td></td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">SUPPLEMENTAL LICENSES/FEATURES</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Reference only -– Not changed by input selections
                See above for features reflecting packaging/combo selections</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">&quot;+&quot; denotes: Not included in the product line and plan, but available as an add-on</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Security and Compliance</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Microsoft 365 E5 Security</th>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td data-label="Comparison Package">+</td>
                            <td>N/A</td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Microsoft 365 E5 Compliance</th>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td data-label="Comparison Package">+</td>
                            <td>N/A</td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Microsoft 365 F5 Security</th>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td data-label="Comparison Package">N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                        </tr>
                        <tr>
                            <th scope="row">Microsoft 365 F5 Compliance</th>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td data-label="Comparison Package">N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                        </tr>
                        <tr>
                            <th scope="row">Microsoft 365 F5 Security + Compliance</th>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td data-label="Comparison Package">N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                        </tr>
                        <tr>
                            <th scope="row">Microsoft 365 E5 Info Protection and Governance</th>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>●</td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Microsoft 365 E5 Insider Risk Management</th>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>●</td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Microsoft 365 E5 eDiscovery and Audit</th>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>●</td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Microsoft Defender for Identity</th>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>+</td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Microsoft Defender for Office 365 Plan 1</th>
                            <td>●</td>
                            <td>+</td>
                            <td>●</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>●</td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Microsoft Defender for Office 365 Plan 2</th>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>●</td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Microsoft Defender for Cloud Apps</th>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>+</td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">App governance add-on for Microsoft Defender for Cloud Apps</th>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>+</td>
                            <td>+</td>
                        </tr>
                        <tr>
                            <th scope="row">Microsoft Defender for Endpoint Plan 1</th>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td data-label="Comparison Package">●</td>
                            <td>+</td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Microsoft Defender for Endpoint Plan 2</th>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>+</td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Premium Assessments add-on for Compliance Manager</th>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>+</td>
                            <td>+</td>
                        </tr>
                        <tr>
                            <th scope="row">Privacy Management for Microsoft 365 - risk</th>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>+</td>
                            <td>+</td>
                        </tr>
                        <tr>
                            <th scope="row">Privacy Management for Microsoft 365 - subjects rights request</th>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>+</td>
                            <td>+</td>
                        </tr>
                        <tr>
                            <th scope="row">Compliance Program for Microsoft Cloud</th>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>+</td>
                            <td>+</td>
                        </tr>
                        <tr>
                            <th scope="row">Office 365 Data Loss Prevention</th>
                            <td>●</td>
                            <td>+</td>
                            <td>●</td>
                            <td>+</td>
                            <td data-label="Comparison Package">●</td>
                            <td>●</td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Exchange Archiving</th>
                            <td>●</td>
                            <td>+</td>
                            <td>●</td>
                            <td>+</td>
                            <td data-label="Comparison Package">●</td>
                            <td>●</td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Azure Active Directory Premium Plan 1</th>
                            <td>●</td>
                            <td>+</td>
                            <td>●</td>
                            <td>+</td>
                            <td data-label="Comparison Package">●</td>
                            <td>+</td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Azure Active Directory Premium Plan 2</th>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>+</td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Microsoft Intune</th>
                            <td>●</td>
                            <td>+</td>
                            <td>●</td>
                            <td>+</td>
                            <td data-label="Comparison Package">●</td>
                            <td>+</td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">10-year Audit Log Retention</th>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td data-label="Comparison Package">N/A</td>
                            <td>+</td>
                            <td>+</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Teams Services</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Audio Conferencing</th>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>●</td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Extended Dial-out Minutes to US and Canada</th>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>+</td>
                            <td>+</td>
                        </tr>
                        <tr>
                            <th scope="row">Teams Phone3</th>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>●</td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Domestic Calling Plan</th>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>+</td>
                            <td>+</td>
                        </tr>
                        <tr>
                            <th scope="row">Domestic Calling 240 Minute Plan</th>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>+</td>
                            <td>+</td>
                        </tr>
                        <tr>
                            <th scope="row">Domestic Calling 120 Minute Plan</th>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>+</td>
                            <td>+</td>
                        </tr>
                        <tr>
                            <th scope="row">International Calling Plan (includes Domestic Plan)</th>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>+</td>
                            <td>+</td>
                        </tr>
                        <tr>
                            <th scope="row">Teams Phone with Calling Plan6</th>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>N/A</td>
                            <td>+</td>
                        </tr>
                        <tr>
                            <th scope="row">Business Voice7</th>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>+</td>
                            <td>+</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Microsoft Viva</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Viva Topics</th>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>+</td>
                            <td>+</td>
                        </tr>
                        <tr>
                            <th scope="row">Viva Insights</th>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>+</td>
                            <td>+</td>
                        </tr>
                        <tr>
                            <th scope="row">Viva Insights Capacity1</th>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>+</td>
                            <td>+</td>
                        </tr>
                        <tr>
                            <th scope="row">Viva Learning</th>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>+</td>
                            <td>+</td>
                        </tr>
                        <tr>
                            <th scope="row">Viva suite</th>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>+</td>
                            <td>+</td>
                        </tr>
                        <tr>
                            <th scope="row">Viva suite with Glint add-on</th>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>+</td>
                            <td>+</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Content Services</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">SharePoint Syntex</th>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>+</td>
                            <td>+</td>
                        </tr>
                        <tr>
                            <th scope="row">Extra Graph Connector Capacity</th>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td data-label="Comparison Package">+</td>
                            <td>+</td>
                            <td>+</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Storage</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Office 365 Extra File Storage</th>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>+</td>
                            <td>+</td>
                        </tr>
                        <tr>
                            <th scope="row">eDiscovery Storage</th>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>+</td>
                            <td>+</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Power Platform</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Power BI Pro</th>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>●</td>
                            <td>●</td>
                        </tr>
                        <tr>
                            <th scope="row">Power BI Premium</th>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>+</td>
                            <td>+</td>
                        </tr>
                        <tr>
                            <th scope="row">Power Apps per-app (1 app/user/month)</th>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>+</td>
                            <td>+</td>
                        </tr>
                        <tr>
                            <th scope="row">Power Apps per-user  (unlimited apps/user/month)</th>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>+</td>
                            <td>+</td>
                        </tr>
                        <tr>
                            <th scope="row">Power Automate per-user (unlimited flows/user/month)</th>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>+</td>
                            <td>+</td>
                        </tr>
                        <tr>
                            <th scope="row">Power Automate per-user w/ Unattended RPA (unlimited flows + 5K AI Builder credits/user/month)</th>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>+</td>
                            <td>+</td>
                        </tr>
                        <tr>
                            <th scope="row">Power Automate per-flow (5 flows/month for unlimited users)</th>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>+</td>
                            <td>+</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Other</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-label="Comparison Package"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Scheduler1</th>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                            <td data-label="Comparison Package">+</td>
                            <td>+</td>
                            <td>+</td>
                        </tr>
                        <tr>
                            <th scope="row">Universal Print Volume Add-on (500 print jobs)2</th>
                            <td>+</td>
                            <td>N/A</td>
                            <td>+</td>
                            <td>N/A</td>
                            <td data-label="Comparison Package">+</td>
                            <td>N/A</td>
                            <td>+</td>
                        </tr>
                        <tr>
                            <th scope="row">High Efficiency Video Codec (HEVC)2</th>
                            <td>+</td>
                            <td>N/A</td>
                            <td>+</td>
                            <td>N/A</td>
                            <td data-label="Comparison Package">+</td>
                            <td>N/A</td>
                            <td>+</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>  
          
        </>
    );

};

export default Home;


