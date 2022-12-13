import React from 'react';
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Package = () =>{

    const location = useLocation(); 
    const dollorpercentage = location?.state;
    const dollorspercentage = dollorpercentage?.percentage;   
    const packagenamenew = dollorpercentage?.packagename;
    const productline   = dollorpercentage?.productline;
    const addoption = dollorpercentage?.addoption;
    const saasalert = dollorpercentage?.saasalert;
    const pricedollor = dollorpercentage?.pricedollor;
    //console.log(dollorpercentage);

  

    console.log(packagenamenew);
    return(
        <>

    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <h1 className="display-1 text-white animated slideInDown">Comparison Packages</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb text-uppercase mb-0">
                    <li className="breadcrumb-item"><Link className="text-white" to="/">Home</Link></li>
                    <li className="breadcrumb-item text-primary active" aria-current="page">Comparison Packages</li>
                </ol>
            </nav>
        </div>
    </div>

        <div class="container add_sect-tt">
            <div class="row"> 
                <h1>Comparison Packages</h1>      
                <table class="dcf-table dcf-table-responsive dcf-table-bordered dcf-table-striped dcf-w-100%">
                    <thead>
                        <tr>
                            <td></td>
                            <th scope="col"></th>
                            
                            <th scope="col" class={ packagenamenew == 'Microsoft 365 for Business Standard Azure Active Directory Premium P1 (Add-on)' ? 'acive' : 'deactive' }><b>Comparison Package</b></th>
                            <th scope="col" class={ packagenamenew == 'Microsoft 365 for Business Premium Azure Active Directory Premium P1 (Included)' ? 'acive' : 'deactive' }><b>Comparison Package</b></th>
                            <th scope="col" class={ packagenamenew == 'Office 365 for Enterprise E1 Azure Active Directory Premium P1 (Add-on)' ? 'acive' : 'deactive' }><b>Comparison Package</b></th>
                            <th scope="col" class={ packagenamenew == 'Microsoft 365 for Enterprise E3 Azure Active Directory Premium P1 (Included)' ? 'acive' : 'deactive' }><b>Comparison Package</b></th>
                            <th scope="col" class={ packagenamenew == 'Office 365 for Enterprise E5 Azure Active Directory Premium P1 (Add-on)' ? 'acive' : 'deactive' }><b>Comparison Package</b></th>
                            <th scope="col" class={ packagenamenew == 'Microsoft 365 for Enterprise E5 Azure Active Directory Premium P2 (Included)' ? 'acive' : 'deactive' }><b>Comparison Package</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td className="addtd">Custom Package</td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td data-label="Comparison Package">4</td>
                            <td>5</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td className="addtd brline"><Link to="/single-package">Microsoft 365 for Business 
                Premium 
                Azure Active Directory Premium P1 (Included)</Link></td>
                            <td className="brline"><Link state={{ saasalert:saasalert, packagenamenew:packagenamenew, value:18.50, dollorspercentage:dollorspercentage }} to="/single-package">Microsoft 365 for Business
                Standard
                Azure Active Directory Premium P1 (Add-on)</Link></td>
                            <td className="brline"><Link state={{ saasalert:saasalert, packagenamenew:packagenamenew, value:22, dollorspercentage:dollorspercentage }} to="/single-package">Microsoft 365 for Business
                Premium
                Azure Active Directory Premium P1 (Included)</Link></td>
                            <td className="brline"><Link state={{ saasalert:saasalert, packagenamenew:packagenamenew, value:16, dollorspercentage:dollorspercentage }} to="/single-package">Office 365 for Enterprise
                E1
                Azure Active Directory Premium P1 (Add-on)</Link></td>
                            <td className="brline"><Link state={{ saasalert:saasalert, packagenamenew:packagenamenew, value:36, dollorspercentage:dollorspercentage }} to="/single-package">Microsoft 365 for Enterprise
                E3
                Azure Active Directory Premium P1 (Included)</Link></td>
                            <td className="brline"><Link state={{ saasalert:saasalert, packagenamenew:packagenamenew, value:44, dollorspercentage:dollorspercentage }} to="/single-package">Office 365 for Enterprise
                E5
                Azure Active Directory Premium P1 (Add-on)</Link></td>
                            <td className="brline"><Link state={{ saasalert:saasalert, packagenamenew:packagenamenew, value:57, dollorspercentage:dollorspercentage }} to="/single-package">Microsoft 365 for Enterprise
                E5
                Azure Active Directory Premium P2 (Included)</Link></td>
                        </tr>
                        <tr>   
                            <th scope="row">PRICING 
                (per person/month)</th>
                            <td className="addtd">{saasalert == 'Yes' ? '$25.50' : ''  }</td>
                            <td name='$18.50'>{saasalert == 'Yes' ? '$18.50' : ''  }</td>
                            <td name='$22.00'>{saasalert == 'Yes' ? '$22' : ''  }</td>
                            <td name='$16.00'>{saasalert == 'Yes' ? '$16' : ''  }</td>
                            <td name='$36.00'>{saasalert == 'Yes' ? '$36' : ''  }</td>
                            <td name='$18.50'>{saasalert == 'Yes' ? '$44' : ''  }</td>
                            <td name='$18.50'>{saasalert == 'Yes' ? '$57' : ''  }</td>
                        </tr>  
                        <tr>
                            <th scope="row">MARGIN $    
                (per person/month)</th>
                            <td className="addtd">{saasalert == 'Yes' ? '$6.46' : ''  }</td>
                            <td>{saasalert == 'Yes' ? (18.50/100*(dollorspercentage)).toFixed(2) : '' }</td>
                            <td>{saasalert == 'Yes' ? (22/100*(dollorspercentage)).toFixed(2) : ''}</td>
                            <td>{saasalert == 'Yes' ? (16/100*(dollorspercentage)).toFixed(2) : ''}</td>
                            <td>{saasalert == 'Yes' ? (36/100*(dollorspercentage)).toFixed(2) : '' }</td>
                            <td>{saasalert == 'Yes' ? (44/100*(dollorspercentage)).toFixed(2) : '' }</td>
                            <td>{saasalert == 'Yes' ? (57/100*(dollorspercentage)).toFixed(2) : ''}</td>
                        </tr>
                        <tr>
                            <th scope="row">MARGIN %</th>
                            <td className="addtd">{saasalert == 'Yes' ? '$26' : '' }</td>
                            <td>{dollorspercentage}%</td>
                            <td>{dollorspercentage}%</td>
                            <td>{dollorspercentage}%</td>
                            <td data-label="Comparison Package">{dollorspercentage}%</td>
                            <td>{dollorspercentage}%</td>
                            <td>{dollorspercentage}%</td>
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

export default Package;