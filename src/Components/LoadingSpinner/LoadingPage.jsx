import React from "react";
import Container from "../Container/Container";

const LoadingPage = () => {
  return (
    <Container className="min-h-screen w-full bg-gray-100 grid place-items-center">
      <span className="loading loading-bars text-primary loading-xl"></span>
    </Container>
  );
};

export default LoadingPage;
