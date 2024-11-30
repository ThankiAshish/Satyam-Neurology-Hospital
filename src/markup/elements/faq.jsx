import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";

// Elements
import LatestNewsSection from "../elements/latest-news-slider";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";

class Faq extends Component {
  render() {
    return (
      <>
        <div className="page-content bg-white">
          {/* <div className="banner-wraper">
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
					</div> */}

          <section className="section-sp3">
            <div className="container">
              <div className="heading-bx text-center">
                <h6 className="title-ext text-secondary">Faq</h6>
                <h2 className="title m-b0">Frequently Asked Questions</h2>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <Accordion
                    defaultActiveKey="0"
                    className="accordion ttr-accordion1"
                  >
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        When to visit a Neurologist?
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="mb-0">
                          When you have a problem related to the brain, spinal
                          cord, nerves, or muscles, you have to visit a
                          neurologist.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        What are common neurological disorders?
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="mb-0">
                          Common neurological disorders are as follow:
                          <br />
                          <strong>Brain related:</strong> migraine (headache),
                          vertigo, stroke (brain attack), epilepsy (seizure),
                          Parkinson’s disease, Alzheimer disease (memory
                          problem), meningitis or encephalitis (brain
                          infection), multiple sclerosis
                          <br />
                          <strong>Spinal cord related:</strong> Myelopathy,
                          radiculopathy
                          <br />
                          <strong>Nerves related:</strong> Guillain Barre
                          syndrome (GBS), Sciatica, carpal tunnel syndrome,
                          radial neuropathy, Neuropathy (abnormal body
                          sensation)
                          <br />
                          <strong>Muscle related:</strong> Myopathy, weakness,
                          Myasthenia gravis
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        Why is it better to consult a neurologist for headache
                        or migraine?
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="mb-0">
                          To confirm your headache type like migraine, cluster
                          headache, neuralgic pain etc.
                          <br />
                          Headache is mainly diagnosed by history, so you need a
                          doctor who listens to you carefully.
                          <br />
                          As Migraine needs long term prophylactic medicines in
                          a systematic manner.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className="col-lg-6">
                  <Accordion
                    defaultActiveKey="2"
                    className="accordion ttr-accordion1"
                  >
              
                 
       
			  <Accordion.Item eventKey="4">
                      <Accordion.Header>
					  Why is it important to consult a neurologist on time for brain stroke?
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="mb-0">
						Stroke causes permanent disability. Nowadays, if you reach a neurologist within 4.5 hours of stroke onset, you can get thrombolysis treatment which helps the patient for rapid recovery and minimize the brain damage.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
          
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                        Is EMG/NCV a special test or anyone can do it?
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="mb-0">
                        EMG/NCV known as electromyography/nerve conduction study. Sometimes only NCV has been done, but to get complete information you need EMG study.
						<br />
It is better if your test is done by a neurologist or qualified electrophysiologist.
<br />
When a test is done by a neurologist or qualified electrophysiologist, they correlate your problem while they do the test and modify their protocol accordingly. So you can get a perfect result.
                        </p>
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
