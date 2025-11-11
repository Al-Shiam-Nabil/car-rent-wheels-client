import React from "react";
import { Tooltip } from "react-tooltip";

const CarCard = ({ car }) => {
  const {
    _id,
    car_name,
    category,
    price_per_day,
    photo_url,
    provider_name,
    status,
  } = car;

  console.log(car);
  return (
    <div className="bg-white h-[450px] shadow-sm p-5 rounded-xl space-y-2">
      <div className="w-full h-[200px] rounded-xl mb-3 relative">
        {status === "available" ? (
          <div className="badge badge-success absolute top-2 right-2 text-white font-semibold py-4">
            Available
          </div>
        ) : (
          <div className="badge badge-error absolute top-2 right-2 text-white font-semibold py-4">
            Booked
          </div>
        )}

        <img
          src={photo_url}
          alt={car_name}
          className="w-full h-full object-cover bg-gray-100 rounded-xl"
        />
      </div>
 
       <h3
        className=" font-medium capitalize truncate"
        data-tooltip-id="my-tooltip"
        data-tooltip-content={car_name}
        data-tooltip-delay-hide={2000}
        data-tooltip-delay-show={1000}
      >
        {car_name}
      </h3>
       <Tooltip id="my-tooltip" style={{backgroundColor:"#FFB51D", color:"#001931"}} />

     

      <div>
        <h3 className="text-sm font-medium">
          Rent Price : <span className="font-normal"> {price_per_day}/day</span>
        </h3>
      </div>
      <div className="badge badge-soft badge-warning text-primary font-medium py-3 capitalize">
        {category}
      </div>
      <div>
        <h3 className="text-sm font-medium">Provider Name </h3>
        <p className="text-sm capitalize truncate">{provider_name}</p>
      </div>
      <button className="btn border-none outline-none shadow-none hover:btn-primary hover:text-secondary btn-secondary w-full mt-1">
        View Details
      </button>
    </div>
  );
};

export default CarCard;
