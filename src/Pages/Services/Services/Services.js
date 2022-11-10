import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../Utilities/useTitle";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  useTitle("Services");
  const services = useLoaderData();
  console.log(services);
  return (
    <div className="mx-10">
      {services.map((service) => (
        <ServiceCard key={service._id} service={service}></ServiceCard>
      ))}
    </div>
  );
};

export default Services;
