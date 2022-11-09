import React from "react";

const ReviewSection = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-semibold my-4">Your Review</h1>
        <form action="" className="">
          <div className="flex flex-col mb-4 place-items-center">
            <input
              type="text"
              placeholder="Your Name Here"
              className="input input-bordered input-info w-full max-w-xs mb-4 "
            />
            <input
              type="email"
              placeholder="Your Email Here"
              className="input input-bordered input-info w-full max-w-xs"
            />
          </div>
          <textarea
            className="textarea textarea-info w-3/5 mb-5"
            placeholder="Your review here"
          ></textarea>
          <br />
          <button className="btn btn-outline btn-info btn-wide">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ReviewSection;
