"use client";

import Link from "next/link";
import date from "date-and-time";
import "../../app/globals.css";
import { useForm } from "react-hook-form";
import React from "react";

export default function DispatchCard({ details }) {
  const { register, handleSubmit, reset } = useForm();
  const [clicked, setClicked] = React.useState(false);

  const onSubmit = async (data) => {
    setClicked(true);
    try {
      let response = await fetch("http://localhost:3000/api/dispatchJob", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      });
      response = await response.json();

      alert("Job dispatched successfully");
      setClicked(false);
      reset((formValues) => ({
        ...formValues,
        lastName: "test",
      }));
    } catch (errorMessage) {
      alert(errorMessage);
    }
  };

  return (
    <div className="card  w-full md:w-96  h-fit bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h1 className="text-xl font-semibold text-secondary ">
          Enter Job Dispatch Information
        </h1>
        <div className="divider mt-0 mb-0"></div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="number"
            placeholder="Enter Job Number"
            className="input input-bordered w-full max-w-xs mt-2 input-sm"
            {...register("job_number", { required: true, maxLength: 10 })}
          />
          <input
            type="text"
            placeholder="Enter Brand"
            className="input input-bordered w-full max-w-xs mt-2 input-sm"
            {...register("brand", { required: true, maxLength: 20 })}
          />
          <input
            type="text"
            placeholder="Enter Project Manager"
            className="input input-bordered w-full max-w-xs mt-2 input-sm"
            {...register("project_manager", { required: true, maxLength: 12 })}
          />
          <input
            type="text"
            placeholder="Enter Model Maker"
            className="input input-bordered w-full max-w-xs mt-2 input-sm"
            {...register("model_maker", { required: true, maxLength: 12 })}
          />
          <input
            type="number"
            placeholder="Enter Delivery Percentage"
            className="input input-bordered w-full max-w-xs mt-2 input-sm"
            {...register("delivery_percentage", {
              required: true,
              maxLength: 3,
            })}
          />
          <input
            type="number"
            placeholder="Enter Number of Vacform"
            className="input input-bordered w-full max-w-xs mt-2 input-sm"
            {...register("vacform_count", {
              required: true,
              maxLength: 3,
            })}
          />
          <button
            type="submit"
            className="btn btn-outline btn-secondary btn-wide mt-4 btn-sm"
            disabled={clicked}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
