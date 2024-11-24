import React from "react";
import { Link, useParams } from "react-router-dom";

// Import Images
import eegImg from "../../images/services/eeg.png";
import emgImg from "../../images/services/emg.jpg";
import autonomicImg from "../../images/services/Autonomic Nervous system test.png";
import plasmapharesisImg from "../../images/services/Plasmapharesis for Autoimmune Neurological disorders.jpg";
import baepImg from "../../images/services/BAEP.jpg";
import vepImg from "../../images/services/vep.jpg";
import botoxImg from "../../images/services/Botox therapy in Neurology.jpg";

const ServiceDetail = () => {
  // Use the useParams hook to get the serviceId from the URL
  const { serviceId } = useParams();

  // Array of service details
  const services = [
   
    {
      id: 1,
      title: "EMG and NCS",
      description: "EEG is a primary diagnostic tool for epilepsy.",
      img: eegImg,
      details: [
        "Electromyography (EMG), Nerve Conduction Studies (NCS), and Repetitive Nerve Stimulation (RNS) at Satyam Neurology Hospital. Electromyography (EMG) and Nerve Conduction Studies (NCS) are advanced diagnostic tools that help assess peripheral nerve and muscle health. These studies are recommended to aid in diagnosing.",
        
        "Conditions That May Require EMG/NCS/RNS Testing:",
        "- Guillain-Barré Syndrome",
        "- Carpal Tunnel Syndrome and other entrapment neuropathies",
        "- Peripheral Neuropathy",
        "- Mononeuropathy Multiplex",
        "- Motor Neuron Disease/ALS",
        "- Sciatica, Radiculopathy, or PIVD",
        "- Myopathy (e.g., polymyositis, dermatomyositis)",
        "- Muscular Dystrophy",
        
        "About EMG: EMG measures the electrical activity of muscles, recorded as a graph. A fine needle is inserted into the muscle, and the patient may be asked to contract the muscle during the test. This process provides crucial data for identifying abnormalities in muscle function.",
        
        "How the Test Feels: There may be mild discomfort during the insertion of the needle electrodes, similar to an intramuscular injection. Some patients may experience tenderness or slight bruising in the muscle area for a few days afterward.",
        
        "Risks Associated with EMG: EMG testing at Satyam Neurology Hospital uses disposable needles to prevent infection. There is a very low risk of pneumothorax when studying chest or back muscles.",
        
        "Preparation and Precautions for EMG: Wear comfortable clothing that allows access to the test area, such as short sleeves or loose pants. Keep the skin clean and avoid using lotions or other skin products before the test. Continue your normal eating, sleeping, and medication routines unless otherwise advised by your neurologist. Inform the neurologist if you are on blood thinners, have a bleeding disorder (e.g., hemophilia), or have a skin infection.",
        
        "At Satyam Neurology Hospital, our team is dedicated to ensuring the highest standards of diagnostic accuracy and patient comfort during EMG, NCS, and RNS tests. Dr. Prakash Bhatt and Dr. Kirti Jalela Bhatt utilize advanced technology and compassionate care to provide precise diagnostics and effective treatment plans.",
     
      ],
         },
    {
      id: 2,
      title: "NCS/EMG",
      description: "Electromyography (EMG) and Nerve Conduction Studies (NCS).",
      img: emgImg,
     
        details: [
          "At Satyam Neurology Hospital, Nerve Conduction Studies (NCS) provide essential insights into the function and speed of electrical impulses in the peripheral nervous system. By electrically stimulating the nerve and measuring the resulting impulse downstream with surface electrodes, NCS allows our neurologists to assess various types of nerve issues.",
          "This test is valuable for determining the existence, type, and extent of nerve damage, helping neurologists differentiate between axonopathy (damage to the nerve fiber) and myelinopathy (damage to the myelin sheath, the protective covering around the nerve).",
          "Is NCS Safe?",
          "There are no known risks associated with the NCS test, although precautions are advised for patients with devices like pacemakers, Implantable Cardiac Defibrillators (ICD), or Deep Brain Stimulation (DBS) devices.",
          "Preparation and Precautions for NCS",
          "Wear clothing that allows easy access to the area to be tested; short sleeves or loose pants may be preferable",
          "Keep the skin clean and avoid applying lotions or skin products before the test.",
          "Continue with your usual eating, sleeping, and medication routines unless otherwise instructed.",
          "Inform the neurologist if you have a pacemaker, ICD, or DBS device.",
          "EMG, NCS/NCV, and RNS Tests at Satyam Neurology Hospital",
          
          "Satyam Neurology Hospital, led by Dr. Prakash Bhatt and Dr. Kirti Jalela Bhatt, provides the highest standard of care in conducting and interpreting EMG, NCS, and RNS tests. Using advanced diagnostic equipment, we deliver precise and reliable results, ensuring each patient receives the most effective, personalized care plan.",
          
         
       
      ],
    },
    {
      id: 3,
      title: "Autonomic Function Tests",
      description:
        "Testing focuses on the nerve connections between the brain, heart, and other organs.",
      img: autonomicImg,
      details: [
        "Autonomic nervous system testing focuses on the nerve connections between the brain, heart and other organs. Non-invasive testing checks for imbalances that control autonomic processes that include heart rate, blood pressure, gastrointestinal function and sweating.",
        "It is a specialized examination used to pinpoint the causes of autonomic nervous system problems.",
        "When you don't have risk factors for autonomic neuropathy?",
        "If you have symptoms of autonomic neuropathy but don't have risk factors, the diagnosis may be more involved. Your doctor will probably review your medical history, discuss your symptoms and do a physical exam",
        "Preparation and Precautions for NCS",
        "Your doctor may perform tests to evaluate autonomic functions, which may include:",
    ],
     },
    {
      id: 4,
      title: "Autoimmune Neurological Disorders",
      description: "Treating various neurological disorders.",
      img: plasmapharesisImg,
      details: [
        "Autonomic nervous system testing focuses on the nerve connections between the brain, heart and other organs. Non-invasive testing checks for imbalances that control autonomic processes that include heart rate, blood pressure, gastrointestinal function and sweating.",
        "It is a specialized examination used to pinpoint the causes of autonomic nervous system problems.",
        "When you don't have risk factors for autonomic neuropathy?",
        "If you have symptoms of autonomic neuropathy but don't have risk factors, the diagnosis may be more involved. Your doctor will probably review your medical history, discuss your symptoms and do a physical exam",
        "Preparation and Precautions for NCS",
        "Your doctor may perform tests to evaluate autonomic functions, which may include:",
    ], },
    {
      id: 5,
      title: "BAEP",
      description:
        "An evoked potential caused by a sound, usually a series of 'clicks'.",
      img: baepImg,
      details: [
        "Brainstem Auditory Evoked Potential (BAEP) Test",
        "A BAEP is an evoked potential caused by a sound, usually a series of 'clicks'. Electrodes positioned on the scalp record responses to the sounds; these are then observed as a reading on an EEG. Responses to sound originate from relay structures within the brainstem.",
        "When is the BAEP used?",
        "A doctor may recommend you go for a BAEP test if you have been experiencing changes in your hearing ability that may be due to problems with a particular nerve pathway. The changes in your hearing may not be complete hearing loss and may not be the same in both ears.",
        "What does the BAEP detect?",
        "From the readings the neurologist can get an idea whether the auditory nerve is functioning properly or not. For example, an acoustic neuroma (a benign tumour of the ear canal) can stretch or compress the auditory nerve resulting in a long time for the processing of aural stimuli.",
        "How to prepare for a BAEP test?",
        "- Wash your hair the night before.",
        "- Eat a normal meal and taking your normal medication on the day of the test should be fine.",
        "- You should let the person conducting the test know if you use a hearing aid or have any obvious hearing problems. The BAEP testing procedure is painless and without side-effects.",
        "- BAEPs can be helpful in the diagnosis of: Hearing loss, Acoustic neuroma, Multiple sclerosis, Sub arachnoid inflammation, Friedreich’s ataxia, hereditary cerebellar ataxia and B2 deficiency.",
        "VEP & BAEP Test in Ahmedabad - Setu Neurology Clinic",
        "Evoked Potentials, VEP & BAEP special tests only at Satyam Neurology Hospital Bhavnagar",


      ],},
    {
      id: 6,
      title: "VEP",
      description:
        "Procedure where electrical activity of the occipital area of the brain is recorded after visual stimuli.",
      img: vepImg,
      details: [
        "Visual Evoked Potential (VEP) Test",
        "VEP is a procedure where electrical activity of occipital area of brain is recorded by electrode after visual stimuli. It is a simple test taking approx 40 mints. This is a test to determine the integrity of the nerve transmission from the eye to the brain.",
        "When is the VEP used?",
        "- Loss of vision",
        "- Blurred vision",
        "- Alterations in colour vision",
        "- Weakness of the eyes, arms or legs (suspicion of multiple sclerosis)",
        "What does the VEP detect?",
        "Stimuli used is either a checkerboard pattern or a LED goggle. Signals are recorded from posterior aspect of scalp. Abnormality in waveform detects even subtle abnormality in optic pathway.",
        "The VEP measures the time that it takes for a visual stimulus to travel from the eye to the occipital cortex. It can give the doctor an idea of whether the nerve pathways are abnormal in any way. For example, in multiple sclerosis, the insulating layer around nerve cells in the brain and spinal cord (known as the myelin sheath) can be affected. This means that it takes a longer time for electrical signals to be conducted from the eyes, resulting in an abnormal VEP.",
        "How to prepare for a VEP test?",
        "You will be given instructions on how to prepare for the test. This will depend on where you are going to get the test done. Some things that you may need to do include:",
        "- Washing your hair the night before, but avoiding hair chemicals, oils and lotions.",
        "- Making sure you get plenty of sleep the night before.",
        "- If you wear glasses, make sure you bring these along with you to the test.",
        "- You are usually able to eat a normal meal and take your usual medications prior to the test.",
        "- However any medications that may make you drowsy should be avoided.",
        "- Arrive on time and try to relax before the test.",
        "- On the day of the test, you should also let the technician know if you have any eye conditions such as cataracts or glaucoma as this can affect the test and should be noted in your records by the doctor.",
        "Side Effects",
        "None noted. After the procedure is done, patients normally return home on the same day. You should be able to drive home safely if you are feeling well after the procedure.",
        "Side Effects",
   
      ],  },
    {
      id: 7,
      title: "Botox Therapy in Neurology",
      description: "A treatment that uses a muscle-relaxing agent.",
      img: botoxImg,
      details: [
        "Autonomic nervous system testing focuses on the nerve connections between the brain, heart and other organs. Non-invasive testing checks for imbalances that control autonomic processes that include heart rate, blood pressure, gastrointestinal function and sweating.",
        "It is a specialized examination used to pinpoint the causes of autonomic nervous system problems.",
        "When you don't have risk factors for autonomic neuropathy?",
        "If you have symptoms of autonomic neuropathy but don't have risk factors, the diagnosis may be more involved. Your doctor will probably review your medical history, discuss your symptoms and do a physical exam",
        "Preparation and Precautions for NCS",
        "Your doctor may perform tests to evaluate autonomic functions, which may include:",
    ],},
  ];

  const service = services.find((s) => s.id === parseInt(serviceId, 10));

  if (!service) {
    return <h2>Service not found</h2>;
  }

  return (
    <div className="page-content bg-white">
      <div className="banner-wrapper">
        <div className="page-banner">
          <div className="container">
            <div className="page-banner-entry text-center">
              <h1>{service.title}</h1>
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/services">Services</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {service.title}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <section className="section-area section-sp1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="details-service-title">{service.title}</h3>
              <img
                src={service.img}
                alt={service.title}
                className="service-detail-image"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col-lg-12">
              {/* <p>{service.description}</p> */}
              <h4>Details</h4>
              {service.details.map((detail, index) => (
    <p key={index} style={{ textAlign: "justify" }}>{detail}</p>
  ))}
            </div>
            <div className="col-lg-12">
              {/* <h4>Conditions</h4>
              <p style={{ textAlign: "justify" }}>{service.Conditions}</p> */}
              <Link to="/services" className="btn btn-secondary">
                Back to Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
