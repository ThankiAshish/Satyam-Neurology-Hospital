import React, { Component } from "react";

class LatestNewsSection extends Component {
  render() {
    return (
      <>
        <section className="section-sp1 service-wraper2">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-sm-6 mb-30">
                <div className="feature-container feature-bx3">
                  <h2 className="counter text-secondary">10+</h2>
                  <h5 className="ttr-title">Years With You</h5>
                  <p>
                  With over a decade of dedicated service in neurology,Our hospital has been trusted to provider neurological care.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-30">
                <div className="feature-container feature-bx3">
                  <h2 className="counter text-secondary">5+</h2>
                  <h5 className="ttr-title">Awards</h5>
                  <p>
                  Our expertise and excellence in neurological treatment have been recognized with multiple awards.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-30">
                <div className="feature-container feature-bx3">
                  <h2 className="counter text-secondary">2</h2>
                  <h5 className="ttr-title">Doctors</h5>
                  <p>
                  Our team includes highly qualified neurologists who bring extensive experience and specialized knowledge. 
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-30">
                <div className="feature-container feature-bx3">
                  <h2 className="counter text-secondary">100K+</h2>
                  <h5 className="ttr-title">Satisfied Client</h5>
                  <p>
                  you can trusted us with their neurological care, including 60,000+ OPD visits, 20,000+ IPD treatments, EMG, EEG, and stroke thrombolysis.  
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default LatestNewsSection;
