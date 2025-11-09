import React from "react";
import Container from "../Container/Container";

const LoadingComponent = () => {
  return (
    <Container className=" w-full bg-gray-50 grid place-items-center  py-20">
      <span className="loading loading-bars text-primary loading-xl"></span>
    </Container>
  );
};

export default LoadingComponent;
