import React, { useEffect, useRef, useState } from "react";
import Container from "../Components/Container/Container";
import { useContextHook } from "../Hooks/useContextHook";
import UpdateCarPage from "./UpdateCarPage";
import LoadingComponent from "../Components/LoadingSpinner/LoadingComponent";

const MyListingPage = () => {
  const { user } = useContextHook();
  const [cars, setCars] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updatedCar,setUpdatedCar]=useState(null)
  const updateModalRef = useRef(null);

  useEffect(() => {
    fetch(`http://localhost:3000/my-cars?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCars(data);
        setLoading(false);
      });
  }, [user?.email]);

  const handleUpdateModal = (id) => {
    updateModalRef.current.showModal();

    fetch(`http://localhost:3000/cars/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUpdatedCar(data);
        setLoading(false);
      });
  };

  if (loading) {
    return <LoadingComponent></LoadingComponent>;
  }

  return (
    <>
      <title>Rent Wheels - My Listing</title>
      <Container>
        {loading || cars.length === 0 ? (
          <h3 className="text-primary font-semibold text-xl sm:text-3xl py-20 text-center">
            No car available now !
          </h3>
        ) : (
          <div className="overflow-x-auto my-10 bg-white p-5 lg:p-10 rounded-xl">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>No</th>
                  <th>Car Name</th>
                  <th>Category</th>
                  <th>Rent Price</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cars.map((car, index) => (
                  <tr key={car?._id}>
                    <td>{index + 1}</td>
                    <td className=" capitalize">{car?.car_name}</td>
                    <td className=" capitalize">{car?.category}</td>
                    <td>{car?.price_per_day}</td>

                    <td
                      className={` ${
                        car?.status === "available"
                          ? "text-green-500"
                          : "text-red-600"
                      } capitalize`}
                    >
                      {car?.status}
                    </td>
                    <td className="space-y-1">
                      <button
                        onClick={() => handleUpdateModal(car?._id)}
                        className="btn btn-sm w-[70px] text-secondary"
                      >
                        Update
                      </button>{" "}
                      <button className="btn btn-sm w-[70px] text-red-500">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* modal */}

        <dialog ref={updateModalRef} className="modal">
          <div className="modal-box max-h-[500px] w-11/12 max-w-[800px]">
           <form
        
          className=" "
        >
          <h3 className=" font-semibold text-xl ">
            {" "}
           Update your car details
          </h3>
          <fieldset className="fieldset">
            <label className="label text-accent text-base font-medium mt-2">
              Car Name
            </label>
            <input
              type="text"
              className="input shadow-none bg-gray-100 border-none outline-none "
              placeholder="Enter Car Name..."
              defaultValue={updatedCar?.car_name}
              name="car_name"
              spellCheck={false}
            />

            {/* description */}

            <label className="label text-accent text-base font-medium mt-2">
              Description
            </label>
            <textarea
            defaultValue={updatedCar?.description}
              name="description"
              placeholder="Enter Description Here..."
              className="textarea-lg p-3 text-sm bg-gray-100 border-none outline-none min-h-[200px] resize-none "
              spellCheck={false}
            ></textarea>

            {/* dropdown */}
            <label className="label text-accent text-base font-medium mt-2">
              Category
            </label>
            <select
              defaultValue={updatedCar?.category}
              className="select"
              name="category"
            >
              <option value="defaultValue" disabled={true}>
                Choose your Category
              </option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="hatchback">Hatchback</option>
              <option value="luxury">Luxury</option>
              <option value="electric">Electric</option>
            </select>

            {/* rent price */}
            <label className="label text-accent text-base font-medium mt-2">
              Rent Price (Per day)
            </label>

            <input
            defaultValue={updatedCar?.price_per_day}
              type="text"
              className="input shadow-none bg-gray-100 border-none outline-none "
              placeholder="Enter Rent Price..."
              name="price_per_day"
            />

            {/* location */}
            <label className="label text-accent text-base font-medium mt-2">
              Location
            </label>

            <input
            defaultValue={updatedCar?.location}
              type="text"
              className="input shadow-none bg-gray-100 border-none outline-none "
              placeholder="Enter Location..."
              name="location"
              spellCheck={false}
            />

            {/* image url */}

            <label className="label text-accent text-base font-medium mt-2">
              PhotoURL
            </label>

            <input
            defaultValue={updatedCar?.photo_url}
              type="text"
              className="input shadow-none bg-gray-100 border-none outline-none "
              placeholder="Enter PhotoURL..."
              name="photo_url"
              spellCheck={false}
            />

            {/* provider name */}
            <label className="label text-accent text-base font-medium mt-2">
              Provider Name
            </label>

            <input
              type="text"
              className="input shadow-none bg-gray-100 border-none outline-none "
              value={user?.displayName}
              name="provider_name"
              readOnly
            />

            {/* provider email */}
            <label className="label text-accent text-base font-medium mt-2">
              Provider Email
            </label>

            <input
              type="text"
              className="input shadow-none bg-gray-100 border-none outline-none "
              value={user?.email}
              name="provider_email"
              readOnly
            />

            <button className="btn btn-secondary hover:btn-primary hover:text-secondary outline-none border-none shadow-none mt-4 w-[150px]">
             Update Car
            </button>
          </fieldset>
        </form>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>

   
      </Container>
    </>
  );
};

export default MyListingPage;
