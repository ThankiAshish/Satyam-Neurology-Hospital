import Doctor from "../../images/about/doctor.svg";
import Hospital from "../../images/about/hospital.svg";

const EligibilitySection = () => {
  return (
    <section className="section-sp1 about-area">
      <div className="container">
        <div className="row align-items-center mb-100">
          {/* Left Column */}
          <div className="col-lg-6 mb-30">
            <div className="heading-bx">
              <div className="heading-bx text-left">
                <h6 className="title-ext text-secondary">Who can come?</h6>
                <h2 className="title">
                  Expert Care for Neurological Disorders
                </h2>
              </div>

              <p>
                People who are suffering from various neurological disorders can
                come as we have the best neuro physicians in Bhavnagar. Our
                clinic has all reputed EMG specialists and thus, we are helping
                the patients with proper diagnosis, guidance and appropriate
                treatment.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-12 mb-30">
                <div className="feature-container feature-bx1 feature1">
                  <div className="icon-md">
                    <span className="icon-cell">
                      <svg
                        enableBackground="new 0 0 512 512"
                        height="85"
                        viewBox="0 0 512 512"
                        width="85"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m181.049 229.112-76.87 76.971c-14.045 14.07-14.045 36.883 0 50.953l50.881 50.974c14.045 14.07 36.815 14.07 50.86 0l178.611-178.899h-203.482z"
                          fill="#e2c4ff"
                        />
                        <path
                          d="m495.277 81.339c-10.57-10.578-24.625-16.403-39.574-16.403-3.325 0-6.605.288-9.813.853 3.065-17.397-2.103-35.975-15.505-49.387-10.57-10.577-24.624-16.402-39.574-16.402s-29.003 5.825-39.573 16.402c-21.816 21.83-21.816 57.352 0 79.182 2.71 2.712 5.648 5.111 8.772 7.18l-18.689 18.716-52.105-52.184c-3.902-3.907-10.233-3.912-14.142-.012-3.908 3.902-3.914 10.234-.011 14.143l18.64 18.67-196.602 196.922c-17.56 17.593-17.902 46.002-1.029 64.017l-16.422 16.452c-3.896 3.903-3.896 10.226 0 14.129l12.383 12.406-88.75 88.913c-3.901 3.909-3.896 10.24.013 14.142 1.953 1.948 4.509 2.922 7.065 2.922 2.562 0 5.125-.979 7.078-2.936l88.724-88.887 12.357 12.38c1.876 1.88 4.422 2.936 7.078 2.936s5.202-1.056 7.078-2.936l16.396-16.426c8.547 8.028 19.644 12.432 31.418 12.432 12.28 0 23.825-4.79 32.506-13.487l196.588-196.91 18.617 18.648c1.953 1.956 4.515 2.935 7.077 2.935 2.557 0 5.113-.975 7.065-2.923 3.908-3.902 3.914-10.234.011-14.143l-52.155-52.24 18.732-18.758c2.054 3.126 4.453 6.09 7.198 8.836 10.57 10.577 24.624 16.402 39.573 16.402s29.003-5.825 39.574-16.402c21.817-21.831 21.817-57.352.001-79.182z"
                          fill="#020288"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className="ttr-title">Specialized Diagnosis</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg mb-30">
            <img src={Doctor} alt="" />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg mb-30">
            <img src={Hospital} alt="" />
          </div>
          <div className="col-lg-6 mb-30">
            <div className="heading-bx">
              <div className="heading-bx text-left">
                <h6 className="title-ext text-secondary">Why Us?</h6>
                <h2 className="title">7 Years of Excellence in Neurology</h2>
              </div>
              <p>
                Satyam Neurology Hospital has plenty of experiences (7 years of
                experience) in the field of medical neurology. The clinic is
                equipped with all the latest equipment and offers the best
                neurologists in centre of Bhavnagar. All EMG specialists and
                neuro physicians have astounding knowledge and used to treat
                patients with great care and comfort.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
                <div className="feature-container feature-bx1 feature2">
                  <div className="icon-md">
                    <span className="icon-cell">
                      <svg
                        enableBackground="new 0 0 512 512"
                        height="85"
                        viewBox="0 0 512 512"
                        width="85"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m351.524 124.49h-37.907v-37.907h-44.657v37.907h-37.906v44.657h37.906v37.907h44.657v-37.907h37.907z"
                          fill="#a4fcc4"
                        />
                        <path d="m291.289 279.415c73.114 0 132.597-59.482 132.597-132.597s-59.483-132.596-132.597-132.596-132.598 59.482-132.598 132.596 59.484 132.597 132.598 132.597zm0-245.193c62.086 0 112.597 50.511 112.597 112.597s-50.511 112.597-112.597 112.597c-62.087 0-112.598-50.511-112.598-112.597s50.511-112.597 112.598-112.597z" />
                        <path d="m502 267.736c-32.668 0-59.245 26.577-59.245 59.245v13.605h-240.266v-19.048c0-23.625-19.221-42.846-42.846-42.846h-90.398v-17.584c0-32.668-26.577-59.245-59.245-59.245-5.522 0-10 4.478-10 10v275.914c0 5.522 4.478 10 10 10h49.245c5.522 0 10-4.478 10-10v-39.327h373.51v39.327c0 5.522 4.478 10 10 10h49.245c5.522 0 10-4.478 10-10v-210.041c0-5.522-4.478-10-10-10zm-342.356 30.957c12.598 0 22.846 10.249 22.846 22.846v19.048h-113.245v-41.894zm-110.399 179.085h-29.245v-254.623c16.812 4.434 29.245 19.77 29.245 37.954zm20-49.327v-67.864h373.51v67.864zm422.755 49.327h-29.245v-150.797c0-18.185 12.434-33.521 29.245-37.954z" />
                      </svg>
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className="ttr-title">Latest Equipment</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
                <div className="feature-container feature-bx1 feature4">
                  <div className="icon-md">
                    <span className="icon-cell">
                      <svg
                        enableBackground="new 0 0 512 512"
                        height="85"
                        viewBox="0 0 512 512"
                        width="85"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m509.82 327.343-21.991-27.599c-1.896-2.381-4.775-3.768-7.82-3.768h-7.712l-74.353-93.385c-1.897-2.383-4.777-3.771-7.823-3.771h-22.862v-22.765c0-19.014-15.43-34.483-34.396-34.483h-97.678v-4.552c0-28.428-23.127-51.555-51.555-51.555s-51.555 23.127-51.555 51.555v4.552h-97.678c-18.966 0-34.397 15.47-34.397 34.484v251.241c0 5.523 4.478 10 10 10h22.279c4.628 22.794 24.758 39.999 48.815 39.999s44.186-17.205 48.814-39.999h250.37c4.628 22.794 24.757 39.999 48.814 39.999s44.187-17.205 48.815-39.999h24.093c5.522 0 10-4.477 10-10v-93.722c0-2.264-.769-4.461-2.18-6.232zm-124.52-108.523 61.432 77.156h-79.474v-77.156z" />
                      </svg>
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className="ttr-title">EMG Specialists</h4>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn btn-primary shadow">Book Appointment</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
