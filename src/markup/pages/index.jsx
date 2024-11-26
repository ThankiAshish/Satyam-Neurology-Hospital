import React from "react";

// Elements
import CustomCarousel from "../elements/carousel";
import MainBannerSection from "../elements/main-banner";
import AboutSection from "../elements/about";
import WorkSection from "../elements/work";
import AppointmentSection from "../elements/appointment";
import TestimonialSection from "../elements/testimonial";
import ServicesSliderSection from "../elements/services-slider";
import LatestNewsSection from "../elements/feature-section3";
import Faq from "../elements/faq";

function Index() {
  return (
    <>
      <CustomCarousel />
      {/* <MainBannerSection /> */}
      <LatestNewsSection />

      <AboutSection />

      <WorkSection />

      <AppointmentSection />

      <ServicesSliderSection />
      <TestimonialSection />
      <Faq />
    </>
  );
}

export default Index;
