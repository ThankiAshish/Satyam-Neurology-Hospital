import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Accordion} from 'react-bootstrap';

// Elements
import LatestNewsSection from "../elements/latest-news-slider";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";

class Faq extends Component{
	
	render(){
		return (
			<>
				
				<div className="page-content bg-white">
					
					<div className="banner-wraper">
						<div className="page-banner" style={{backgroundImage: "url("+bnrImg1+")"}}>
							<div className="container">
								<div className="page-banner-entry text-center">
									<h1>Faq's</h1>
									<nav aria-label="breadcrumb" className="breadcrumb-row">
										<ul className="breadcrumb">
											<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</Link></li>
											<li className="breadcrumb-item active" aria-current="page">Faq's</li>
										</ul>
									</nav>
								</div>
							</div>
							<img className="pt-img1 animate-wave" src={waveBlue} alt=""/>
							<img className="pt-img2 animate2" src={circleDots} alt=""/>
							<img className="pt-img3 animate-rotate" src={plusBlue} alt=""/>
						</div>
					</div>
					
					<section className="section-sp3">
						<div className="container">
							<div className="row">
								<div className="col-lg-6">
									<Accordion defaultActiveKey="0" className="accordion ttr-accordion1">
										<Accordion.Item eventKey="0">
											<Accordion.Header>Who is Dr. Prakash?</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">Dr. Prakash Bhatt is s a young and dynamic Neurologist in Bhavnagar. He completed his MD from Nazareth Hospital, Shillong, and his DNB in Neurology at Sahyadri Speciality Hospital. He manages Acute and Chronic Neurological Disorders, such as disorders of the Brain, Spine, Nerves and Muscles. Dr. Prakash is open-minded in his approach and utilises both traditional and non-traditional methods of care. Since beginning his practice, he has strived to go above and beyond, taking the time to get to the root of his patient’s problems to improve their quality of life.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="1">
											<Accordion.Header>Who is Dr. Kirti?</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">Dr Kirti Jalela Bhatt is a clinical neurophysiologist. She did her EMG fellowship from Bombay Hospital and Medical research centre, Mumbai, under the mentorship of esteemed neurophysiologist Dr Khushnuma Mansukhani. Subsequently she worked as a neurophysiologist in Bombay hospital, Mumbai. We have an International standard EMG machine. In our clinic, we ensure that all EMG and EP studies are done by Dr Kirti, not by technicians. Advantage of special training in this field is reflected in test results and proper treatment decisions.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="2">
											<Accordion.Header>What service we provide at Satyam?</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="3">
											<Accordion.Header>When to see neuro doctor?</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">Your regular doctor may recommend that you see a neurologist if you have migraines or headaches, dizziness, vertigo, seizures, or other issues. Neurologists may check your mental status, speech, coordination, and reflexes. Come to Dr. Prakash, he will treat you in that conditions.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="4">
											<Accordion.Header>We Teach You How To Feel Better?</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="5">
											<Accordion.Header>How Can I Contact Doctor?</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
											</Accordion.Body>
										</Accordion.Item>
									</Accordion>
								</div>
								<div className="col-lg-6">
									<Accordion defaultActiveKey="2" className="accordion ttr-accordion1">
										<Accordion.Item eventKey="0">
											<Accordion.Header>How do I withdraw from a subject?</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="1">
											<Accordion.Header>What’s a payment statement?</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="2">
											<Accordion.Header>How Can I Contact You?</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="3">
											<Accordion.Header>How do I withdraw from a subject?</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="4">
											<Accordion.Header>Understand Doctor Before You Regret?</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="5">
											<Accordion.Header>How Doctor Can Ease Your Pain?</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
											</Accordion.Body>
										</Accordion.Item>
									</Accordion>
								</div>
							</div>
						</div>
					</section>
					
					{/* <LatestNewsSection /> */}
					
				</div>
			
			</>
		);
	}
}

export default Faq;