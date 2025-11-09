import React from "react";
import Container from "../Container/Container";
import { Link } from "react-router";
import MyLink from "./MyLink";

const Navbar = () => {
  const link = (
    <>
      <MyLink to="/">Home</MyLink>
      <MyLink to="/add-car">Add Car</MyLink>
      <MyLink to="/my-listings">My Listings</MyLink>
      <MyLink to="/my-bookings">My Bookings</MyLink>
      <MyLink to="/browse-cars">Browse Cars</MyLink>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm w-full max-w-[1400px]  h-auto mx-auto fixed z-10 top-0">
      <Container className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="mr-3 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#FFB51D"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <Link to="/" className="font-semibold text-2xl">
            <span className="text-primary">Rent</span>{" "}
            <span className="text-secondary">Wheels</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-5 px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-primary text-secondary rounded-full outline-none border-none shadow-none hover:btn-secondary hover:text-white">
            Log in
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
