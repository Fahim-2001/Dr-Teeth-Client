import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceSection = () => {
  const singleService = useLoaderData();
  //   console.log(singleService[0]);
  const { _id, service_name, price, img, details } = singleService[0];

  return (
    <div className="">
      <div className="drop-shadow-lg rounded-lg m-5 p-5 bg-white">
        <h1 className="text-4xl font-semibold my-8">{service_name}</h1>
        <img src={img} alt="" className="mx-auto h-60" />
        <div className="mx-10">
          <p className="text-lg text-left mx-">{details}</p>
          <p className="text-lg text-blue-500 font-medium">
            Price: {price} BDT
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
