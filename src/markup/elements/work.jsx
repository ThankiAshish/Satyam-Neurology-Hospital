import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import Images
import bg1 from '../../images/background/line-bg1.png';
import ptImg1 from '../../images/shap/circle-orange.png';
import ptImg2 from '../../images/shap/plus-orange.png';
import ptImg3 from '../../images/shap/circle-dots.png';

class aboutSection extends Component{
	render(){
		return(
			<>
				
				<section className="section-area section-sp5 work-area" style={{backgroundImage: "url("+bg1+")", backgroundRepeat:" no-repeat", backgroundPosition: "center", backgroundSize: "100%"}}>
					<div className="container-sm">
						<div className="heading-bx text-center">
							{/* <h6 className="title-ext header-text">How do we work</h6> */}
							<h2 className="title">How do we work?</h2>
						</div>
						<div className="row justify-content-center">
							<div className="col-lg-4 col-sm-6 mb-30">
								<div className="work-bx">
									<div className="work-num-bx">01</div>
									<div className="work-content">
										<h5 className="title  header-text mb-10">Make Appointment</h5>
										<p>Firstly book an appointment from the website. So, it is easy to proceed further</p>
									</div>
									<Link to="/services" className="btn btn-primary light">View More <i className="btn-icon-bx fas fa-chevron-right"></i></Link>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 mb-30">
								<div className="work-bx active">
									<div className="work-num-bx">02</div>
									<div className="work-content">
										<h5 className="title text-secondary mb-10"> Consult to Doctor</h5>
										<p>After an appointment,
visit the Satyam
Neuro Hospital and
make a diagnosis of
your neurological
illnesses</p>
									</div>
									<Link to="/services" className="btn btn-primary light">View More <i className="btn-icon-bx fas fa-chevron-right"></i></Link>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 mb-30">
								<div className="work-bx">
									<div className="work-num-bx">03</div>
									<div className="work-content">
										<h5 className="title text-secondary mb-10">Take Treatment</h5>
										<p>You can take the treatment of your problem related to the neural problem with Dr. Prakash</p>
									</div>
									<Link to="/services" className="btn btn-primary light">View More <i className="btn-icon-bx fas fa-chevron-right"></i></Link>
								</div>
							</div>
						</div>
					</div>
					{/* <img className="pt-img1 animate1" src={ptImg1} alt=""/>
					<img className="pt-img2 animate2" src={ptImg2} alt=""/>
					<img className="pt-img3 animate3" src={ptImg3} alt=""/> */}
				</section>
				
			</>
		);
	}
}

export default aboutSection;