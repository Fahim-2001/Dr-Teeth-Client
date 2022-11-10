import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import useTitle from "../../../Utilities/useTitle";
import Carousel from "../Carousel/Carousel";
import DoctorIntro from "../DoctorIntro/DoctorIntro";
import IntroContent from "../IntroContent/IntroContent";
import ServiceCardHome from "../ServiceCardHome/ServiceCardHome";

const Home = () => {
  const services = useLoaderData();
  // console.log(services);
  useTitle("Home");
  const navigate = useNavigate();
  const toService = () => {
    navigate("/services");
  };
  return (
    <div>
      <Carousel></Carousel>
      <DoctorIntro></DoctorIntro>
      <div>
        <h1 className="text-6xl font-bold text-blue-500 text-center my-5">
          My Services
        </h1>
        <p className="text-xl font-semibold text-gray-500">
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
        <button className="btn btn-outline btn-info my-5" onClick={toService}>
          See All
        </button>
      </div>
      <IntroContent></IntroContent>
    </div>
  );
};

export default Home;
