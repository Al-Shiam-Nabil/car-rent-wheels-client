import React, { useEffect, useState } from "react";
import Container from "../Components/Container/Container";
import { useParams } from "react-router";
import Swal from "sweetalert2";

const CarDetailsPage = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/cars/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCar(data);
      });
  }, [id]);

  console.log('before book',car)

  const handleBookBtn = (id) => {
    if (car?.status !== "available") {
      return;
    }

    const status = "booked";
    const updatedStatus = {
      status,
    };
    console.log(updatedStatus);

    fetch(`http://localhost:3000/cars/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedStatus),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after booking", data);

        car.status="booked"
        setCar({...car})


        if (data.modifiedCount === 1) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Car booked successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <>
      <title>Rent Wheels - Car Details</title>

      <Container className="py-20">
        <div className="p-5 sm:p-10 rounded-xl  bg-white shadow flex flex-col justify-start  lg:flex-row gap-8">
          <div className="relative  h-full">
            <img
              src={car?.photo_url}
              alt={car?.car_name}
              className="w-[800px] border border-gray-300  h-full object-cover bg-gray-100 rounded-xl"
            />

            {car?.status === "available" ? (
              <div className="badge badge-success absolute top-2 left-2 text-white font-semibold py-4">
                Available
              </div>
            ) : (
              <div className="badge badge-error absolute top-2 left-2 text-white font-semibold py-4">
                Booked
              </div>
            )}
          </div>

          <div className="space-y-3 w-full flex flex-col lg:justify-center">
            <div className="flex justify-start items-center gap-x-5 gap-y-2 flex-wrap">
              <h3 className="font-semibold text-xl capitalize">
                {car?.car_name}
              </h3>

              <div className="badge badge-soft badge-warning text-primary text-base font-medium py-3 capitalize">
                {car?.category}
              </div>
            </div>

            <div>
              <div className="space-y-1 flex gap-x-10 gap-y-1 flex-wrap  ">
                <h3>
                  <span className="font-semibold">Rent Price :</span>{" "}
                  {car?.price_per_day} Tk /day
                </h3>
                <h3 className="capitalize">
                  <span className="font-semibold">Location : </span>
                  {car?.location}
                </h3>
              </div>
            </div>

            <p>
              <span className="font-semibold">Description : </span>
              {car?.description}
            </p>

            <div>
              <h3 className="font-bold text-lg text-primary mb-2">
                Provider Information
              </h3>
              <p className="mb-1 capitalize">
                <span className="font-semibold">Name : </span>{" "}
                {car?.provider_name}
              </p>
              <p>
                <span className="font-semibold">Email : </span>
                {car?.provider_email}
              </p>
            </div>

            <button
              onClick={() => handleBookBtn(car?._id)}
              disabled={car?.status !== "available"}
              className="btn border-none outline-none shadow-none hover:btn-primary hover:text-secondary btn-secondary w-[120px] mt-1"
            >
              Book Now
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CarDetailsPage;
