import React from "react";
import DisplayReview from "./DisplayReview/DisplayReview";
import TakeReview from "./TakeReview/TakeReview";

const ReviewSection = () => {
  return (
    <div>
      <DisplayReview></DisplayReview>
      <TakeReview></TakeReview>
    </div>
  );
};

export default ReviewSection;
