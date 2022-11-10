import { data } from "autoprefixer";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContexts/AuthProvider";
import MySingleReview from "./MySingleReview/MySingleReview";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyReviews(data));
  }, [user?.email]);
  console.log(myReviews);

  const handleDeleteMyReview = (id) => {
    fetch(`http://localhost:5000/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success("Review Deleted Successfully", { autoClose: 850 });
          const remaining = myReviews.filter((odr) => odr._id !== id);
          setMyReviews(remaining);
        }
      });
  };
  return (
    <div>
      <h1 className="text-4xl font-semibold my-4">My Reviews</h1>
      {myReviews?.length !== 0 ? (
        <div className="mx-20">
          {myReviews?.map((myReview) => (
            <MySingleReview
              key={myReview._id}
              myReview={myReview}
              handleDeleteMyReview={handleDeleteMyReview}
            ></MySingleReview>
          ))}
        </div>
      ) : (
        <p>No Reviews To Displaaay</p>
      )}
    </div>
  );
};

export default MyReviews;
