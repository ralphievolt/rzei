"use client";

import date from "date-and-time";
import { useForm } from "react-hook-form";
import React from "react";

export default function DeliveryCard({ details }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      delivery_percentage: details.delivery_percentage,
      vacform_count: details.vacform_count,
      receiver_machine_shop: details.receiver_machine_shop,
      receiver_vacforming: details.receiver_vacforming,
      delivery_status: details.delivery_status,
      remarks: details.remarks,
    },
  });
  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className="card  w-full md:w-96  h-fit bg-base-100 shadow-xl rounded">
      <div className="card-body items-center text-center">
        <h1 className="text-xl font-semibold text-secondary ">
          Delivery Transaction
        </h1>
        <div className="divider mt-0 mb-0"></div>

        <a
          href={`delivery/${details.job_number}`}
          className="card-title text-xl font-bold   flex"
        >
          <svg
            className=" w-6 h-6"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            ></path>
          </svg>
          {details.job_number}
        </a>
        <p className="text-2xl font-semibold text-secondary ">
          {details.brand}
        </p>
        <div>
          <p className=" text-gray-600 flex">
            <svg
              className=" text-gray-500 w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            {date.format(
              new Date(details.last_updated),
              "ddd, MMM DD YYYY h:mm A"
            )}
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-row  space-x-2">
            <div>
              <label className="block text-sm text-left">
                Delivery Percentage
              </label>
              <input
                type="number"
                className="input input-bordered w-full md:w-full mt-2 input-sm rounded text-secondary font-semibold"
                {...register("delivery_percentage")}
              />
            </div>
            <div>
              <label className="block text-sm text-left">Vacform Count</label>
              <input
                type="number"
                className="input input-bordered w-full md:w-full mt-2 input-sm rounded   text-secondary font-semibold"
                {...register("vacform_count")}
              />
            </div>
          </div>
          <div className="flex flex-row  space-x-2 mt-2">
            <div>
              <label className="block text-sm text-left">
                Machine Shop Receiver
              </label>
              <input
                type="text"
                className="input input-bordered w-full md:w-full mt-2 input-sm rounded  text-secondary font-semibold"
                {...register("receiver_machine_shop")}
              />
            </div>
            <div>
              <label className="block text-sm text-left">
                Vacforming Receiver
              </label>
              <input
                type="text"
                className="input input-bordered w-full md:w-full mt-2 input-sm rounded text-secondary font-semibold"
                {...register("receiver_vacforming")}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm mt-2 text-left">
              Delivery Status
            </label>
            <select
              className="select select-bordered w-full md:w-full mt-2 select-sm text-secondary rounded"
              {...register("delivery_status")}
            >
              <option>For Delivery</option>
              <option>Dispatched</option>
              <option>Delivered</option>
              <option>Parts Withdrawn</option>
              <option>Parts Returned</option>
            </select>

            <label className="block text-sm mt-2 text-left mb-2">
              Delivery Notes
            </label>
            <textarea
              className="textarea textarea-bordered w-full md:w-full rounded font-semibold text-secondary"
              {...register("remarks")}
            />

            <button
              type="submit"
              className="btn  btn-secondary mt-4 btn-sm rounded "
              // disabled={clicked}
            >
              Click to scan QR Code
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
