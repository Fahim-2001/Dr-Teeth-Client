import React from "react";

const DoctorIntro = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://www.collinsdictionary.com/images/full/dentist_229576711.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Doctor's Pic"
        />
        <div>
          <h1 className="text-5xl font-bold">
            Hello this is <span className="text-blue-600">Dr. KK</span>{" "}
          </h1>
          <p className="py-6">
            I have experience of 12 years in this service. Care of your teeth
            and making your smile bright is my responsibility. You smile makes
            us encouraged to serve for more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorIntro;
