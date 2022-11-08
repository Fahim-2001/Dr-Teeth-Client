import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import ServiceCardHome from "../ServiceCardHome/ServiceCardHome";

const Home = () => {
  const services = useLoaderData();
  console.log(services);

  const navigate = useNavigate();
  const toService = () => {
    navigate("/services");
  };
  return (
    <div>
      <Carousel></Carousel>
      <div>
        <h1 className="text-6xl font-bold text-gray-800 text-center my-5">
          My Services
        </h1>
        <p className="text-xl font-semibold text-gray-500">
          This is Dr. KK , a dentist with 12 years or practical expericences.
          Here is my services for you.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-3 place-items-center mx-auto my-5">
        {services?.map((service) => (
          <ServiceCardHome
            key={service._id}
            service={service}
          ></ServiceCardHome>
        ))}
      </div>
      <div>
        <button className="btn btn-outline my-5" onClick={toService}>
          See All
        </button>
      </div>
    </div>
  );
};

export default Home;
