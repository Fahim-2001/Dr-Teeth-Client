import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, service_name, price, img, details } = service;
  const navigate = useNavigate();
  const handleToServiceDetails = (id) => {
    navigate(`/services/${id}`);
  };
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl my-4">
      <PhotoProvider
        speed={() => 800}
        easing={(type) =>
          type === 2
            ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
            : "cubic-bezier(0.34, 1.56, 0.64, 1)"
        }
      >
        <figure>
          <PhotoView src={img}>
            <img src={img} alt="car!" style={{ objectFit: "cover" }} />
          </PhotoView>
        </figure>
      </PhotoProvider>
      <div className="card-body text-left">
        <h2 className="card-title">{service_name}</h2>
        <p>{details}</p>
        <p>Cost : {price} BDT</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-info"
            onClick={() => handleToServiceDetails(_id)}
          >
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
