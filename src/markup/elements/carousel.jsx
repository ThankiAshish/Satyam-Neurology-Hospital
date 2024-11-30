import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Slide1 from "../../images/carousel/Slide 1.jpg";
import Slide2 from "../../images/carousel/Slide 2.jpg";

const doctors = [
  {
    name: "Dr Prakash Bhatt",
    title: "Best Neurologist in Bhavnagar",
    description:
      "You can book an appointment for you or for your relatives who are suffering from neurological disorders",
    image: Slide1,
  },
  {
    name: "Dr Kirti Jalela Bhatt",
    title: "Bhavnagar's 1st Electromyographer",
    description:
      "You can book an appointment for NCS/EMG for accurate diagnosis of neuromuscular disorders in Bhavnagar",
    image: Slide2,
  },
];

const CustomCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
  });

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div
      className="carousel-container overflow-hidden position-relative vh-100"
      ref={emblaRef}
    >
      <div className="carousel d-flex">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="carousel-slide flex-shrink-0 w-100 vh-100 d-flex align-items-center"
          >
            <div className="carousel-content container d-flex align-items-center justify-content-between px-4 py-3">
              <div className="text-content col-md-6 pe-md-5">
                <div className="heading-bx">
                  <h2 className="doctor-name display-5 fw-bold text-dark mb-3">
                    {doctor.name}
                  </h2>
                  <p className="doctor-title title-ext text-secondary">
                    {doctor.title}
                  </p>
                  <p className="doctor-description lead text-muted mb-4">
                    {doctor.description}
                  </p>
                </div>
                <button className="btn btn-primary btn-lg shadow-sm">
                  Book Appointment
                </button>
              </div>
              <div className="image-container col-md-6 d-md-block">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="doctor-image img-fluid"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
