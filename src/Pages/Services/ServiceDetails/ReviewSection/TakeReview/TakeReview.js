import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../../contexts/AuthContexts/AuthProvider";

const TakeReview = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleReviewSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const review = form.review.value;
    const userReview = { name, email, photoURL, review };
    console.log(userReview);

    if (user?.uid) {
      fetch("http://localhost:5000/reviews", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userReview),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            form.reset();
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please login firts to provide review!");
      navigate("/login");
    }
  };
  return (
    <div>
      <h1 className="text-4xl font-semibold my-4">Your Review</h1>
      <form action="" className="" onSubmit={handleReviewSubmit}>
        <div className="flex flex-col mb-4 place-items-center">
          <input
            type="text"
            name="name"
            placeholder="Your Name Here"
            className="input input-bordered input-info w-full max-w-xs mb-4 "
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Here"
            defaultValue={user ? user.email : ""}
            className="input input-bordered input-info w-full max-w-xs mb-4"
            required
          />
          <input
            type="text"
            name="photoURL"
            defaultValue={user?.photoURL ? user.photoURL : ""}
            placeholder="Your photo URL here"
            className="input input-bordered input-info w-full max-w-xs "
          />
        </div>
        <textarea
          name="review"
          className="textarea textarea-info w-3/5 mb-5"
          placeholder="Your review here"
          required
        ></textarea>
        <br />
        <button type="submit" className="btn btn-outline btn-info btn-wide">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TakeReview;
