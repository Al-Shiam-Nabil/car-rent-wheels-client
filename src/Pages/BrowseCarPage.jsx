import React, { useEffect, useState } from "react";
import Container from "../Components/Container/Container";
import LoadingComponent from "../Components/LoadingSpinner/LoadingComponent";
import CarCard from "../Components/BrowseCar/CarCard";

const BrowseCarPage = () => {
  const [allCars, setAllCars] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3000/cars")
      .then((res) => res.json())
      .then((data) => {
        setAllCars(data);
        setLoading(false);
      });
  }, []);



  return (
    <>
      <title>Rent Wheels - Browse Cars</title>

      <Container className="pt-10 pb-20">
        <h2 className="text-center text-3xl font-semibold ">All Cars</h2>

        {loading ? (
          <LoadingComponent></LoadingComponent>
        ) : allCars.length === 0 ? (
          <h3 className="text-primary font-medium text-xl sm:text-3xl  py-10 text-center">
            No car available now !
          </h3>
        ) : (
         <div className="grid grid-cols-4 gap-x-5 gap-y-8 pt-10"> {allCars.map((car) => <CarCard key={car._id} car={car}></CarCard>)}</div>
        )}
      </Container>
    </>
  );
};

export default BrowseCarPage;
