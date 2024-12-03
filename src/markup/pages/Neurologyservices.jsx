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
import strokeImg from '../../images/services/stroke.png';
import epilepsyImg from '../../images/services/Epilepsy Care.jpg';
import headacheImg from '../../images/services/Headache.jpg';
import vertigoImg from '../../images/services/Vertigo care.jpg';
import meningitisImg from '../../images/services/Meningitis care.jpg';
import parkinsonsImg from '../../images/services/Parkinson’s disease.jpg';
import dementiaImg from '../../images/services/Dementia care.jpg';
import gbsImg from '../../images/services/Guillain-Barré Syndrome.jpg';
import mgImg from '../../images/services/Myasthenia Gravis.jpg';
import mdImg from '../../images/services/Muscular Dystrophy.jpg';
import mndImg from '../../images/services/Motor Neuron Disease.gif';

class Neurologyservices extends Component {
  // Array of service details
  services = [
    {
      id: 10,
      title: "Stroke",
      description: "Comprehensive care and management for stroke patients.",
      img: strokeImg,  // Replace with appropriate image variable
      link: "/services/10"
    },
    {
      id:11,
      title: "Epilepsy",
      description: "Diagnosis and treatment options for epilepsy and seizure disorders.",
      img: epilepsyImg,  // Replace with appropriate image variable
      link: "/services/11"
    },
    {
      id: 12,
      title: "Headache",
      description: "Evaluation and management of various types of headaches.",
      img: headacheImg,  // Replace with appropriate image variable
      link: "/services/12"
    },
    {
      id: 13,
      title: "Vertigo",
      description: "Assessment and treatment of vertigo and balance disorders.",
      img: vertigoImg,  // Replace with appropriate image variable
      link: "/services/13"
    },
    {
      id: 14,
      title: "Meningitis",
      description: "Diagnosis and treatment of meningitis and related infections.",
      img: meningitisImg,  // Replace with appropriate image variable
      link: "/services/14"
    },
    {
      id: 15,
      title: "Parkinson’s Disease",
      description: "Comprehensive care for patients with Parkinson’s disease.",
      img: parkinsonsImg,  // Replace with appropriate image variable
      link: "/services/15"
    },
    {
      id: 16,
      title: "Dementia",
      description: "Diagnosis and management of dementia and cognitive disorders.",
      img: dementiaImg,  // Replace with appropriate image variable
      link: "/services/16"
    },
    {
      id: 17,
      title: "GBS",
      description: "Diagnosis and treatment of Guillain-Barré Syndrome.",
      img: gbsImg,  // Replace with appropriate image variable
      link: "/services/17"
    },
    {
      id: 18,
      title: "Myasthenia Gravis",
      description: "Management and treatment of Myasthenia Gravis.",
      img: mgImg,  // Replace with appropriate image variable
      link: "/services/18"
    },
    {
      id: 19,
      title: "Muscular Dystrophy",
      description: "Comprehensive care for patients with muscular dystrophy.",
      img: mdImg,  // Replace with appropriate image variable
      link: "/services/19"
    },
    {
      id: 20,
      title: "Motor Neuron Disease",
      description: "Diagnosis and treatment of motor neuron diseases.",
      img: mndImg,  // Replace with appropriate image variable
      link: "/services/20"
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

export default Neurologyservices;