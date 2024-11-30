import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import trangleOrange from "../../images/shap/trangle-orange.png";
import squareDotsOrange from "../../images/shap/square-dots-orange.png";
import lineCircleBlue from "../../images/shap/line-circle-blue.png";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/circle-dots.png";
import teamMember1 from "../../images/team/member1.jpg";
import teamMember2 from "../../images/team/member2.jpg";
import teamMember3 from "../../images/team/member3.jpg";
import teamMember4 from "../../images/team/member4.jpg";
import teamMember5 from "../../images/team/member5.jpg";
import teamMember6 from "../../images/team/member6.jpg";
import aboutThumb1 from "../../images/about/dr13.webp";
import aboutThumb2 from "../../images/about/doctor2.png";
// Team Content
const teamMembers = [
	{
	  name: "Dr. Prakash Bhatt",
	  specialization: "DNB Neurology | DNB | MRCP | Director",
	  image: aboutThumb2,
	  socialMedia: [
		{ platform: "x-twitter", link: "https://twitter.com/" },
		{ platform: "LinkedIn", link: "https://www.linkedin.com/" },
		{ platform: "Instagram", link: "https://www.instagram.com/" },
	  ],
	},
	{
	  name: "Dr. Kirti Jalela Bhatt",
	  specialization: "M.B.B.S. | FCN",
	  image: aboutThumb1,
	  socialMedia: [
		{ platform: "x-twitter", link: "https://twitter.com/" },
		{ platform: "LinkedIn", link: "https://www.linkedin.com/" },
		{ platform: "Instagram", link: "https://www.instagram.com/" },
	  ],
	},
  ];

class Doctor extends Component{
	
	render(){
		return (
			<>
				
				<div className="page-content bg-white">
					
					<div className="banner-wraper">
						{/* <div className="page-banner" style={{backgroundImage: "url("+bnrImg1+")"}}> */}
						<div className="page-banner" >
							<div className="container">
								<div className="page-banner-entry text-center">
									<h1>Our Doctors</h1>
									<nav aria-label="breadcrumb" className="breadcrumb-row">
										<ul className="breadcrumb">
											<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</Link></li>
											<li className="breadcrumb-item active" aria-current="page">Our Team</li>
										</ul>
									</nav>
								</div>
							</div>
							{/* <img className="pt-img1 animate-wave" src={waveBlue} alt=""/>
							<img className="pt-img2 animate2" src={circleDots} alt=""/>
							<img className="pt-img3 animate-rotate" src={plusBlue} alt=""/> */}
						</div>
					</div>
					
					<section className="section-area section-sp3 team-wraper">
          <div className="container">
            <div className="heading-bx text-center">
              <h6 className="title-ext text-secondary">Our Doctor</h6>
              <h2 className="title">Meet Best Doctors</h2>
            </div>
            <div className="row justify-content-center">
              {teamMembers.map((teamMember, index) => (
                <div key={index} className="col-lg-4 col-sm-6 mb-30">
                  <div className="team-member">
                    <div className="team-media">
                      <img src={teamMember.image} alt={teamMember.name} />
                    </div>
                    <div className="team-info">
                      <div className="team-info-content">
                        <h4 className="title">{teamMember.name}</h4>
                        <span className="text-secondary">
                          {teamMember.specialization}
                        </span>
                      </div>
                      <ul className="social-media mt-3">
                        {teamMember.socialMedia.map((social, index) => (
                          <li key={index}>
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href={social.link}
                            >
								if (social.platform = "x-twitter") {
								<p>x</p>	
								}
								else{
                              <i
                                className={`fab fa-${social.platform.toLowerCase()}`}
                              />
								}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <img className="pt-img1 animate1" src={ptImg1} alt="" />
          <img className="pt-img2 animate2" src={ptImg2} alt="" />
          <img className="pt-img3 animate-rotate" src={ptImg3} alt="" />
          <img className="pt-img4 animate-wave" src={ptImg4} alt="" />
          <img className="pt-img5 animate-wave" src={ptImg5} alt="" /> */}
        </section>
					
				</div>
				
			</>
		);
	}
}

export default Doctor;