import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

// Import Images
import testShape from "../../images/testimonials/1.png"
import testPic1 from "../../images/testimonials/testimonial1.png"
import testPic2 from "../../images/testimonials/testimonial2.png"
import testPic3 from "../../images/testimonials/testimonial3.png"
import testPic4 from "../../images/testimonials/testimonial4.png"
import testPic5 from "../../images/testimonials/pic5.jpg"
import testPic6 from "../../images/testimonials/pic6.jpg"
import plusOrange from "../../images/shap/plus-orange.png"
import squareBlue from "../../images/shap/square-blue.png"
import circleDots from "../../images/shap/circle-dots.png"
import circleOrange2 from "../../images/shap/circle-orange-2.png"

class testimonialSection extends Component{
	
	render(){
			
		const settings = {
			dots: false,
			infinite: true,
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
		};
		
		return(
			<>
					
				
				<section className="section-area section-sp3 testimonial-wraper">
					<div className="container">
						<div className="heading-bx text-center">
							<h6 className="title-ext text-secondary">Testimonial</h6>
							<h2 className="title m-b0">See What Are The Patients <br/>Saying About us</h2>
						</div>
						<div className="row align-items-center">
							<div className="col-lg-6 text-center">
								<div className="thumb-wraper">
									<img className="bg-img" src={testShape} alt=""  style={{width: "436px"}} />
									<ul>
										<li data-member="1"><Link to="https://maps.app.goo.gl/Zch5U6wJk4gvjhL2A"><img src={testPic1} alt=""/></Link></li>
										<li data-member="2"><Link to="https://maps.app.goo.gl/CrqumfVaAhVZaqzU7"><img src={testPic2} alt=""/></Link></li>
										<li data-member="3"><Link to="https://maps.app.goo.gl/q6T7bGuS5ykbmF4S6"><img src={testPic3} alt=""/></Link></li>
										<li data-member="4"><Link to="https://maps.app.goo.gl/fzcDGjWUzbSTJXHi6"><img src={testPic4} alt=""/></Link></li>
										{/* <li data-member="5"><Link to="#"><img src={testPic5} alt=""/></Link></li>
										<li data-member="6"><Link to="#"><img src={testPic6} alt=""/></Link></li> */}
									</ul>
								</div>
							</div>
							<div className="col-lg-6">
								<Slider {...settings} className="testimonial-slide">
									<div className="slider-item">
										<div className="testimonial-bx">
											<div className="testimonial-content">
												<p>I recently took my grandmother to Satyam Neurology Hospital, and I am incredibly impressed with the care we received. Dr. Prakash Bhatt is an exceptional neurologist who combines deep expertise with genuine compassion. He took the time to thoroughly explain the diagnosis and treatment options, which gave us great confidence.
I highly recommend Dr. Bhatt and Satyam Neurology Hospital to anyone seeking top-notch neurological care. Their dedication to patient well-being truly sets them apart.
</p>
											</div>
											<div className="client-info">
												<h5 className="name">Karan Jalela</h5>
												<p>patient</p>
											</div>
											<div className="quote-icon">
												<i className="fas fa-quote-left"></i>
											</div>
										</div>
									</div>
									<div className="slider-item">
										<div className="testimonial-bx">
											<div className="testimonial-content">
												<p>Dr. Prakash Bhatt is an exceptional neurologist whose dedication to patient care and medical expertise is truly commendable. From my very first appointment, his thorough understanding of my condition and his ability to explain complex medical information in a clear and compassionate manner were impressive. His treatment plan has significantly improved  quality of life. Dr. Bhatt's professionalism, skill, and kindness make every visit a positive experience. I highly recommend him to anyone seeking top-notch neurological care. His commitment to excellence is evident in every interaction.</p>
											</div>
											<div className="client-info">
												<h5 className="name">Dr Prakash Valiya</h5>
												<p>patient</p>
											</div>
											<div className="quote-icon">
												<i className="fas fa-quote-left"></i>
											</div>
										</div>
									</div>
									<div className="slider-item">
										<div className="testimonial-bx">
											<div className="testimonial-content">
												<p>Dr Prakash is very straightforward & concerned at the same time with patients. His promptness is appreciative. He was the first neurologist I met for my mother's case and I found him kind, attentive, honest & brilliant. Also, he listens to patients & their relatives carefully and is never in a rush no matter what time it is especially during the OPD hours. Thank you so much for your honest guidance & true opinions regarding my mother's health. Truly grateful to you.</p>
											</div>
											<div className="client-info">
												<h5 className="name">Prakruti Mehta</h5>
												<p>patient</p>
											</div>
											<div className="quote-icon">
												<i className="fas fa-quote-left"></i>
											</div>
										</div>
									</div>
								 <div className="slider-item">
										<div className="testimonial-bx">
											<div className="testimonial-content">
												<p>The most treasured of the Doctors, I have been privileged to meet Dr. Prakash who treated me and others too as if we all were a family member during all my meetings with him, before and after recovery. The treatment was undoubtedly successful, and the results are unedescribed.Dr. Prakash has many satisfied patients currently. He is renowned for his clinical awareness, diagnosis and treatment of neurological disease. He is specialized, I would see him for everything!”</p>
											</div>
											<div className="client-info">
												<h5 className="name">Manish Pandya</h5>
												<p>patient</p>
											</div>
											<div className="quote-icon">
												<i className="fas fa-quote-left"></i>
											</div>
										</div>
									</div>
									{/*	<div className="slider-item">
										<div className="testimonial-bx">
											<div className="testimonial-content">
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida.</p>
											</div>
											<div className="client-info">
												<h5 className="name">John Deo</h5>
												<p>patient</p>
											</div>
											<div className="quote-icon">
												<i className="fas fa-quote-left"></i>
											</div>
										</div>
									</div> */}
								</Slider>
							</div>	 
						</div>	 
					</div>
					{/* <img className="pt-img1 animate1" src={plusOrange} alt=""/>
					<img className="pt-img2 animate2" src={squareBlue} alt=""/>
					<img className="pt-img3 animate3" src={circleDots} alt=""/>
					<img className="pt-img4 animate4" src={circleOrange2} alt=""/> */}
				</section>
				
			</>
		);
	}
}

export default testimonialSection;