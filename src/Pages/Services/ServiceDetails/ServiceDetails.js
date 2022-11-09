import React from "react";
import ReviewSection from "./ReviewSection/ReviewSection";
import ServiceSection from "./ServiceSection/ServiceSection";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  return (
    <div className="service-details">
      <ServiceSection></ServiceSection>
      <ReviewSection></ReviewSection>
    </div>
  );
};

export default ServiceDetails;
