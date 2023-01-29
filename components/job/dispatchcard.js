"use client";

import { useForm } from "react-hook-form";
import React from "react";

export default function DispatchCard({ details }) {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm();
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
      }));
    } catch (errorMessage) {
      alert(errorMessage);
    }
  };

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        job_number: "",
        brand: "",
        project_manager: "",
        model_maker: "",
        delivery_percentage: "",
        vacform_count: "",
      });
    }
  }, [formState, reset]);

  return (
    <div className="card  w-full md:w-96  h-fit bg-base-100 shadow-xl rounded">
      <div className="card-body items-center text-center">
        <h1 className="text-xl font-semibold text-secondary ">
          Enter Job Dispatch Information
        </h1>
        <div className="divider mt-0 mb-0"></div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="label">
            <span className="label-text">Job Number</span>
          </label>
          <input
            type="number"
            className="input input-bordered w-full md:w-full input-sm font-semibold rounded"
            {...register("job_number", { required: true, maxLength: 10 })}
          />
          <label className="label">
            <span className="label-text">Brand</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full md:w-full input-sm font-semibold rounded"
            {...register("brand", { required: true, maxLength: 20 })}
          />
          <label className="label">
            <span className="label-text">Project Manager</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full md:w-full  input-sm font-semibold rounded"
            {...register("project_manager", { required: true, maxLength: 12 })}
          />
          <label className="label">
            <span className="label-text">Model Maker</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full md:w-full input-sm font-semibold rounded"
            {...register("model_maker", { required: true, maxLength: 12 })}
          />
          <label className="label">
            <span className="label-text">Delivery Percentage</span>
          </label>
          <input
            type="number"
            className="input input-bordered w-full md:w-full input-sm font-semibold rounded"
            {...register("delivery_percentage", {
              required: true,
              maxLength: 3,
            })}
          />
          <label className="label">
            <span className="label-text">Number of Vacform</span>
          </label>
          <input
            type="number"
            className="input input-bordered w-full md:w-full input-sm font-semibold rounded"
            {...register("vacform_count", {
              required: true,
              maxLength: 3,
            })}
          />
          <button
            type="submit"
            className="btn  btn-secondary btn-wide mt-4 btn-sm rounded"
            disabled={clicked}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
