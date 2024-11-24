import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// Elements
import FeatureSection3 from "../elements/feature-section3";
import TeamSection from "../elements/team";
import LatestNewsSection from "../elements/latest-news-slider";

import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";

import eggimg from '../../images/services/eeg.png';
import emgimg from '../../images/services/emg.jpg';
import Autonomicimg from '../../images/services/Autonomic Nervous system test.png';
import Plasmapharesis from '../../images/services/Plasmapharesis for Autoimmune Neurological disorders.jpg';
import BAEPimg from '../../images/services/BAEP.jpg';
import vepimg from '../../images/services/vep.jpg';
import  Botoximg from '../../images/services/Botox therapy in Neurology.jpg';

class Services extends Component{
	
	render(){
		return (
			<>
				
				<div className="page-content bg-white">
					
					<div className="banner-wraper">
						<div className="page-banner" >
							<div className="container">
								<div className="page-banner-entry text-center">
									<h1>Services</h1>
									<nav aria-label="breadcrumb" className="breadcrumb-row">
										<ul className="breadcrumb">
											<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</Link></li>
											<li className="breadcrumb-item active" aria-current="page">Services</li>
										</ul>
									</nav>
								</div>
							</div>
							<img className="pt-img3 animate-rotate" src={plusBlue} alt=""/> */}
						</div>
					</div>
					
					<section className="section-area section-sp1">
						<div className="container">
							<div className="row">
								<div className="col-lg-4 col-md-6 mb-30">
								<div className="feature-container feature-bx2 feature1">
										<div className="feature-box-xl mb-30">
												<img src={eggimg} alt="" className='servcesliderimg' style={{width: "100%" , height: "100%"}}/>
										
										</div>
										<div className="icon-content">
											<h3 className="ttr-title">EEG</h3>
											<p>EEG is a primary diagnostic tool for epilepsy and is also crucial in diagnosing other brain </p>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 mb-30">
								<div className="feature-container feature-bx2 feature2">
										<div className="feature-box-xl mb-20">
										<img src={emgimg} alt="" className='servcesliderimg' style={{width: "100%" , height: "100%"}}/>

									
										</div>
										<div className="icon-content">
											<h3 className="ttr-title">NCS/EMG</h3>
											<p>Electromyography (EMG), Nerve Conduction Studies (NCS), and Repetitive Nerve Stimulation (RNS)At Satyam Neurology Hospital</p>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 mb-30">
								<div className="feature-container feature-bx2 feature3">
										<div className="feature-box-xl mb-20">
										<img src={Autonomicimg} alt="" className='servcesliderimg' style={{width: "100%" , height: "100%"}}/>

										</div>
										<div className="icon-content">
											<h3 className="ttr-title">Autonomic Function Tests</h3>
											<p>Autonomic nervous system testing focuses on the nerve connections between the brain, heart and other organs.</p>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 mb-30">
								<div className="feature-container feature-bx2 feature1">
										<div className="feature-box-xl mb-20">
										<img src={Plasmapharesis} alt="" className='servcesliderimg' style={{width: "100%" , height: "100%"}}/>

										</div>
										<div className="icon-content">
											<h3 className="ttr-title">Autoimmune Neurological disorders</h3>
											<p> who are suffering from various neurological disorders</p>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 mb-30">
								<div className="feature-container feature-bx2 feature2">
										<div className="feature-box-xl mb-20">
										<img src={BAEPimg} alt="" className='servcesliderimg' style={{width: "100%" , height: "100%"}}/>
										</div>
										<div className="icon-content">
											<h3 className="ttr-title">BAEP</h3>
											<p>A BAEP is an evoked potential caused by a sound, usually a series of 'clicks'. Electrodes positioned on the scalp record responses to the sounds</p>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 mb-30">
								<div className="feature-container feature-bx2 feature2">
										<div className="feature-box-xl mb-20">
										<img src={vepimg} alt="" className='servcesliderimg' style={{width: "100%" , height: "100%"}}/>
										</div>
										<div className="icon-content">
											<h3 className="ttr-title">VEP</h3>
											<p>VEP is a procedure where electrical activity of occipital area of brain is recorded by electrode after visual stimuli. It is a simple test taking approx 40 mints.</p>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 mb-30">
								<div className="feature-container feature-bx2 feature2">
										<div className="feature-box-xl mb-20">
										<img src={Botoximg} alt="" className='servcesliderimg' style={{width: "100%" , height: "100%"}}/>
										</div>
										<div className="icon-content">
											<h3 className="ttr-title"> Botox therapy in Neurology</h3>
											<p>Botulinum toxin therapy, also known as Botox, is a treatment that uses a muscle-relaxing agent to treat a variety of neurological conditions</p>
										</div>
									</div>
								</div>
							</div>	
						</div>
					</section>
				</div>
			</>
		);
	}
}
export default Services;