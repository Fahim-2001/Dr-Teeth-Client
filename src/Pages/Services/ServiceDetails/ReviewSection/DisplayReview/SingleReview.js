import React from "react";

const SingleReview = ({ singleReview }) => {
  const { name, photoURL, review } = singleReview;
  return (
    <div>
      <div className="text-left">
        <div className="avatar placeholder  flex items-center">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-8 mr-2">
            <img src={photoURL} alt="" />
          </div>
          <p className="font-medium">{name}</p>
        </div>
        <div className="my-4">
          <p>{review}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
