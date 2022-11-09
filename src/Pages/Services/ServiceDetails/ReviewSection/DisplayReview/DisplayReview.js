import React, { useEffect, useState } from "react";
import SingleReview from "./SingleReview";

const DisplayReview = () => {
  const [reviews, setReviews] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/reviews`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  console.log(reviews);
  return (
    <div>
      <h1 className="text-4xl font-semibold my-4">Reviews</h1>
      {reviews?.map((singleReview) => (
        <SingleReview
          key={singleReview._id}
          singleReview={singleReview}
        ></SingleReview>
      ))}
    </div>
  );
};

export default DisplayReview;
