import React from "react";

const MySingleReview = ({ myReview, handleDeleteMyReview }) => {
  return (
    <div className="flex justify-between">
      <div className="text-left">
        <div className="avatar placeholder  flex items-center">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-8 mr-2">
            <img src={myReview?.photoURL} alt="" />
          </div>
          <p className="font-medium">{myReview.name}</p>
        </div>
        <div className="my-4">
          <p>{myReview.review}</p>
        </div>
      </div>
      <button
        onClick={() => handleDeleteMyReview(myReview._id)}
        className="btn btn-circle btn-outline"
        title="Delete Review"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default MySingleReview;
