import React from "react";
import Container from "../Components/Container/Container";
import { useContextHook } from "../Hooks/useContextHook";

const AddCarPage = () => {
  const { user } = useContextHook();
  return (
    <>
      <title>Rent Wheels - Add Car</title>

      <Container className="pb-16 pt-10">
        <form className="max-w-[800px] mx-auto bg-white p-5 sm:p-10 rounded-2xl shadow-lg">
          <h3 className=" font-semibold text-xl">
            {" "}
            Fill in the Required Information
          </h3>
          <fieldset className="fieldset">
            <label className="label text-accent text-base font-medium mt-2">
              Car Name
            </label>
            <input
              type="text"
              className="input shadow-none bg-gray-100 border-none outline-none "
              placeholder="Enter Car Name..."
              name="name"
              required
            />

            {/* description */}

            <label className="label text-accent text-base font-medium mt-2">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Enter Description Here..."
              className="textarea-lg p-3 text-sm bg-gray-100 border-none outline-none min-h-[200px] resize-none required:"
            ></textarea>

            {/* dropdown */}
            <label className="label text-accent text-base font-medium mt-2">
              Category
            </label>
            <select
              defaultValue="defaultValue"
              className="select"
              name="category"
              required
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
              type="text"
              className="input shadow-none bg-gray-100 border-none outline-none "
              placeholder="Enter Rent Price..."
              name="price"
              required
            />

            {/* location */}
            <label className="label text-accent text-base font-medium mt-2">
              Location
            </label>

            <input
              type="text"
              className="input shadow-none bg-gray-100 border-none outline-none "
              placeholder="Enter Location..."
              name="location"
              required
            />

            {/* image url */}

            <label className="label text-accent text-base font-medium mt-2">
              PhotoURL
            </label>

            <input
              type="text"
              className="input shadow-none bg-gray-100 border-none outline-none "
              placeholder="Enter PhotoURL..."
              name="photo"
              required
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
              Add Car
            </button>
          </fieldset>
        </form>
      </Container>
    </>
  );
};

export default AddCarPage;
