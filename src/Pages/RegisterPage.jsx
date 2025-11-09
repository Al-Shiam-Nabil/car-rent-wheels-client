import React from "react";
import { Link } from "react-router";
import Container from "../Components/Container/Container";

const RegisterPage = () => {
  return (
    <>
      <title>Rent Wheels - Register</title>

      
      <Container className="grid place-items-center py-20">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-xl px-4 sm:px-6">
          <div className="card-body">
            <h1 className="text-3xl text-center font-semibold">Register here</h1>
            <form>
              <fieldset className="fieldset">
                {/* name */}
                  <label className="label text-accent text-base font-medium mt-2">
                Name
                </label>
                <input
                  type="text"
                  className="input shadow-none bg-gray-100 border-none outline-none w-full"
                  placeholder="Name"
                  name="name"
                />
                {/* email */}
                <label className="label text-accent text-base font-medium mt-2">
                  Email
                </label>
                <input
                  type="email"
                  className="input shadow-none bg-gray-100 border-none outline-none w-full"
                  placeholder="Email"
                  name="email"
                />

                {/* photoURL */}
                  <label className="label text-accent text-base font-medium mt-2">
            PhotoURL
                </label>
                <input
                  type="text"
                  className="input shadow-none bg-gray-100 border-none outline-none w-full"
                  placeholder="PhotoURL"
                  name="photo"
                />

                {/* password */}
                <label className="label text-accent text-base font-medium mt-2">
                  Password
                </label>
                <input
                  type="password"
                  className="input shadow-none bg-gray-100 border-none outline-none w-full"
                  placeholder="Password"
                  name="password"
                />

                <button className="btn btn-secondary hover:btn-primary hover:text-secondary outline-none border-none shadow-none mt-4">
                Register
                </button>
              </fieldset>
            </form>

            <p className="text-center">Or</p>

            {/* Google */}
            <button className="btn bg-white text-black border-[#e5e5e5]">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>

            <p className="text-center mt-2">
              Already have an account? Please{" "}
              <Link className="text-blue-700 hover:underline" to="/login">
                {" "}
                Log in
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default RegisterPage;
