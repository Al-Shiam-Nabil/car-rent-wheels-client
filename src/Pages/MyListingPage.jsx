import React, { useEffect, useState } from "react";
import Container from "../Components/Container/Container";
import { useContextHook } from "../Hooks/useContextHook";
import { HiH1 } from "react-icons/hi2";

const MyListingPage = () => {
  const { user } = useContextHook();
  const [cars, setCars] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:3000/my-cars?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCars(data);
        setLoading(false);
      });
  }, [user?.email]);

  console.log(cars);

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
                    <td>update / delete</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Container>
    </>
  );
};

export default MyListingPage;
