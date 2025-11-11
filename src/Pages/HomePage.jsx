import React, { useEffect, useState } from "react";
import SwiperSlider from "../Components/Home/Banner/SwiperSlider";
import Container from "../Components/Container/Container";
import LoadingComponent from "../Components/LoadingSpinner/LoadingComponent";
import CarCard from "../Components/BrowseCar/CarCard";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa6";

const HomePage = () => {
  const [cars, setCars] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3000/latest-cars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setLoading(false);
      });
  }, []);

  console.log(cars);

  return (
    <>
      <title>Rent Wheels - Home</title>

      <div>
        <SwiperSlider></SwiperSlider>
      </div>

      <Container>
        {/* featured cars */}
        <div className="my-20">
          <h2 className="text-center text-3xl font-semibold ">
            Featured Cars
          </h2>

          {loading ? (
            <LoadingComponent></LoadingComponent>
          ) : cars.length === 0 ? (
            <h3 className="text-primary font-medium text-xl sm:text-3xl py-10  text-center">
              No car available now !
            </h3>
          ) : (
            <>
            <div className="grid grid-cols-4 gap-x-5 gap-y-8 pt-10">
              {" "}
              {cars.map((car) => (
                <CarCard key={car._id} car={car}></CarCard>
              ))}

 

            </div>
           <div className="text-center mt-10">
             <Link to="/browse-cars" className="inline-flex btn btn-outline btn-secondary items-center gap-1 shadow-none">View All Cars <FaArrowRight></FaArrowRight></Link>
           </div>
            
            </>
          )}

         
        </div>

         
      </Container>
    </>
  );
};

export default HomePage;
