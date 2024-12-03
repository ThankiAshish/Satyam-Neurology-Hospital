import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import eegImg from '../../images/services/eeg.png';
import emgImg from '../../images/services/emg.jpg';
import autonomicImg from '../../images/services/Autonomic Nervous system test.png';
import plasmapharesisImg from '../../images/services/Plasmapharesis for Autoimmune Neurological disorders.jpg';
import baepImg from '../../images/services/BAEP.jpg';
import vepImg from '../../images/services/vep.jpg';
import botoxImg from '../../images/services/Botox therapy in Neurology.jpg';
import ssepImg from '../../images/services/Somatosensory Evoked Potentials.jpg';
import blinkReflexImg from '../../images/services/Blink Reflex.jpg';

class Neurodiagnosisservices extends Component {
  // Array of service details
  services = [
    {
      id: 1,
      title: "EEG & Video EEG",
      description: "EEG is a primary diagnostic tool for epilepsy and is also crucial in diagnosing other brain disorders.",
      img: eegImg,
      link: "/services/1"
    },
 
    {
      id: 2,
      title: "NCS/EMG",
      description: "Electromyography (EMG), Nerve Conduction Studies (NCS), and Repetitive Nerve Stimulation (RNS) at Satyam Neurology Hospital.",
      img: emgImg,
      link: "/services/2"
    },
    {
      id: 3,
      title: "Autonomic Function Tests",
      description: "Autonomic nervous system testing focuses on the nerve connections between the brain, heart, and other organs.",
      img: autonomicImg,
      link: "/services/3"
    },
    {
      id: 4,
      title: "Autoimmune Neurological Disorders",
      description: "Who are suffering from various neurological disorders.",
      img: plasmapharesisImg,
      link: "/services/4"
    },
    {
      id: 5,
      title: "BAEP",
      description: "A BAEP is an evoked potential caused by a sound, usually a series of 'clicks'.",
      img: baepImg,
      link: "/services/5"
    },
    {
      id: 6,
      title: "VEP",
      description: "VEP is a procedure where electrical activity of the occipital area of the brain is recorded after visual stimuli.",
      img: vepImg,
      link: "/services/6"
    },
    {
      id: 7,
      title: "SSEP",
      description: "Somatosensory Evoked Potentials (SSEP) are used to assess the function of the sensory pathways.",
      img: ssepImg, // Assuming you have an image for SSEP
      link: "/services/6"
    },
    {
      id: 8,
      title: "Blink Reflex",
      description: "The Blink Reflex test assesses the function of the facial nerve and the sensory pathways.",
      img: blinkReflexImg, // Assuming you have an image for Blink Reflex
      link: "/services/9"
    },
    {
      id: 9,
      title: "Botox Therapy in Neurology",
      description: "Botulinum toxin therapy, also known as Botox, is a treatment that uses a muscle-relaxing agent.",
      img: botoxImg,
      link: "/services/10"
    }
];

  render() {
    return (  
      <div className="page-content bg-white">
        <div className="banner-wraper">
          <div className="page-banner">
            <div className="container">
              <div className="page-banner-entry text-center">
                <h1>Our Services</h1>
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Services</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <section className="section-area section-sp1">
          <div className="container">
            <div className="row">
              {this.services.map(service => (
                <div key={service.id} className="col-lg-4 col-md-6 mb-30">
                  <div className="feature-container feature-bx2">
                    <div className="feature-box-xl mb-30">
                      <img src={service.img} alt={service.title} className='servcesliderimg' style={{ width: "100%", height: "130px" }} />
                    </div>
                    <div className="icon-content">
                      <h3 className="ttr-title">{service.title}</h3>
                      <p>{service.description}</p>
                      <Link to={service.link} className="btn btn-primary">More</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Neurodiagnosisservices;