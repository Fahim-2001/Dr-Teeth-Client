import React from "react";
import { toast } from "react-toastify";
import useTitle from "../../Utilities/useTitle";

const AddService = () => {
  useTitle("Add Service");
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const service_name = form.service_name.value;
    const img = form.img.value;
    const price = form.price.value;
    const details = form.details.value;
    const newService = {
      service_name,
      img,
      price,
      details,
    };
    console.log(newService);

    fetch(`http://localhost:5000/services`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
          toast.success("Service Added Successfully!", { autoClose: 850 });
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1 className="text-4xl font-semibold my-7">Add a service</h1>
      <form
        onSubmit={handleAddService}
        action=""
        className="w-3/4 place-items-center mx-auto"
      >
        <div>
          <input
            type="text"
            name="service_name"
            placeholder="Service Name"
            className="input input-bordered input-info w-full mb-5"
          />
          <input
            type="test"
            name="img"
            placeholder="Service Related Image You Prefer"
            className="input input-bordered input-info w-full mb-5"
          />
        </div>
        <div>
          <input
            type="number"
            name="price"
            placeholder="Service cost you think should be"
            className="input input-bordered input-info w-full mb-5"
          />
          <textarea
            name="details"
            className="textarea textarea-info w-full"
            placeholder="Service Details"
          ></textarea>
          <button type="submit" className="btn btn-info btn-wide my-5">
            Add Service
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
