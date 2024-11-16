import React, { Component } from "react";
import { Link } from "react-router-dom";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import pic1 from "../../images/about/pic-1.jpg";
import icon1 from "../../images/icon/icon1.png";
import icon2 from "../../images/icon/icon2.png";
import icon3 from "../../images/icon/icon3.png";
import animateWave from "../../images/shap/wave-blue.png";
import animate2 from "../../images/shap/circle-dots.png";
import animateRotate from "../../images/shap/plus-blue.png";

class ContactUs extends Component {
  render() {
    return (
      <>
        <div className="page-content bg-white">
          <div className="banner-wraper">
            <div className="page-banner banner-lg contact-banner">
              <div className="container">
                <div className="page-banner-entry text-center">
                  <h1>Contact Us</h1>
                  <nav aria-label="breadcrumb" className="breadcrumb-row">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-home"
                          >
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                          </svg>{" "}
                          Home
                        </Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Contact Us
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              {/* <img className="pt-img1 animate-wave" src={animateWave} alt=""/>
							<img className="pt-img2 animate2" src={animate2} alt=""/>
							<img className="pt-img3 animate-rotate" src={animateRotate} alt=""/> */}
            </div>
          </div>
          {/* 					
					<section className="">
						<div className="container">
							<div className="contact-wraper">
								<div className="row">
									<div className="col-lg-6 mb-30">
										<form className="form-wraper contact-form ajax-form">
											<div className="ajax-message"></div>
											<div className="row">
												<div className="form-group col-md-12">
													<input name="name" type="text" required className="form-control" placeholder="Your Name"/>
												</div>
												<div className="form-group col-md-12">
													<input name="email" type="email" required className="form-control" placeholder="Email"/>
												</div>
												<div className="form-group col-md-12">
													<input name="phone" type="text" required className="form-control" placeholder="Phone Numbers"/>
												</div>
												<div className="form-group col-md-12">
													<select className="form-select form-control">
														<option defaultValue="Selecty Department">Selecty Department</option>
														<option defaultValue="1">One</option>
														<option defaultValue="2">Two</option>
														<option defaultValue="3">Three</option>
													</select>
												</div>
												<div className="form-group col-md-12">
													<textarea name="message" required className="form-control" placeholder="Type Message"></textarea>
												</div>
												<div className="col-lg-12">
													<button name="submit" type="submit" defaultValue="Submit" className="btn w-100 btn-secondary btn-lg">Submit</button>
												</div>
											</div>
										</form>
									</div>
									<div className="col-lg-6 mb-30">
										<div className="contact-info ovpr-dark" style={{backgroundImage: "url("+pic1+")"}}>
											<div className="info-inner">
												<h4 className="title mb-30">Contact Us For Any Informations</h4>
												<div className="icon-box">
													<h6 className="title"><i className="ti-map-alt"></i>Location</h6>		
													<p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
												</div>
												<div className="icon-box">
													<h6 className="title"><i className="ti-id-badge"></i>Email &amp; Phone</h6>		
													<Link to="#" className="text-white">info@yourdomain.com</Link>
													<p>(+68) 120034509</p>
												</div>
												<div className="icon-box">
													<h6 className="title"><i className="ti-world"></i>Follow Us</h6>
													<ul className="social-media">
														<li><a rel="noreferrer" target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
														<li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a></li>
														<li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section> */}
          <section className="section-area section-sp1">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-30">
                  <div className="feature-container feature-bx4 feature4">
                    <div className="icon-md feature-icon">
                      <img src={icon1} alt="" />
                    </div>
                    <div className="icon-content">
                      <h5 className="ttr-title">Contact Number</h5>
                      <p>+91 8160434474</p>
                      {/* <p>+002 3424 44 00</p> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-30">
                  <div className="feature-container feature-bx4 feature3">
                    <div className="icon-md feature-icon">
                      <img src={icon3} alt="" />
                    </div>
                    <div className="icon-content">
                      <h5 className="ttr-title">Email Address</h5>
                      <p>satyamneuro@gmail.com</p>
                      {/* <p>example@support.com</p> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-30">
                  <div className="feature-container feature-bx4 feature2">
                    <div className="icon-md feature-icon">
                      <img src={icon2} alt="" />
                    </div>
                    <div className="icon-content">
                      <h5 className="ttr-title">Address</h5>
                      <p>
                        201-205, 2nd Floor, Praradhya One Complex, Behind BIMS
                        Hospital,Opposite Sir T Hospital, Jail Road, Bhavnagar -
                        364001 (Gujarat)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-area section-sp1">
            <div className="container">
              <h1 className="heading-bx text-center">Our location</h1>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.322780395381!2d72.13760241158629!3d21.76776517999003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f51e74898e0b5%3A0xf3f56d446d5f4992!2sSatyam%20Neurology%20Hospital%20-%20Dr%20Prakash%20Bhatt%20(Best%20Neurologist%20in%20Bhavnagar)!5e0!3m2!1sen!2sin!4v1731695393060!5m2!1sen!2sin"
                width="100%"
                height="550"
                allowfullscreen="true"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default ContactUs;
