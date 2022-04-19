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
              
            <div className="container-fluid page-header-img py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
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
                            </tbody>

                            <tbody></tbody>
                        </table>
                    </div>
                </div> :null
            } 
            <div className="container-xxl py-5">
                <div className="container pt-5">
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="fact-item text-center bg-light h-100 p-5 pt-0">
                                <div className="fact-icon">
                                    <img src="assets/img/icons/icon-2.png" alt="Icon"/>
                                </div>
                                <h3 className="mb-3">Design Approach</h3>
                                <p className="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="fact-item text-center bg-light h-100 p-5 pt-0">
                                <div className="fact-icon">
                                    <img src="assets/img/icons/icon-3.png" alt="Icon"/>
                                </div>
                                <h3 className="mb-3">Innovative Solutions</h3>
                                <p className="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="fact-item text-center bg-light h-100 p-5 pt-0">
                                <div className="fact-icon">
                                    <img src="assets/img/icons/icon-4.png" alt="Icon"/>
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
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="about-img">
                                <img className="img-fluid" src="assets/img/about-1.jpg" alt=""/>
                                <img className="img-fluid" src="assets/img/about-2.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h4 className="section-title">About Us</h4>
                            <h1 className="display-5 mb-4">A Creative Architecture Agency For Your Dream Home</h1>
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>
                            <div className="d-flex align-items-center mb-5">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center border border-5 border-primary" style={{ width: '120px', height: '120px' }}>
                                    <h1 className="display-1 mb-n2" data-toggle="counter-up">25</h1>
                                </div>
                                <div className="ps-4">
                                    <h3>Years</h3>
                                    <h3>Working</h3>
                                    <h3 className="mb-0">Experience</h3>
                                </div>
                            </div>
                            <Link className="btn btn-primary py-3 px-5" to="">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
                
        </>
    );

};

export default Home;


