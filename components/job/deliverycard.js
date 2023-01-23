"use client";
import Link from "next/link";
import date from "date-and-time";
import "../../app/globals.css";
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
    <div className="card  w-full md:w-96  h-fit bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h1 className="text-xl font-semibold text-secondary ">
          Delivery Transaction
        </h1>
        <div className="divider mt-0 mb-0"></div>
        <p className="text-2xl font-bold">{details.brand}</p>

        <h1 className="card-title text-xl ">{details.job_number}</h1>
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
              <label className="block text-gray-700 text-sm ">
                Delivery Percentage
              </label>
              <input
                type="number"
                className="input input-bordered w-full max-w-xs mt-2 input-sm"
                {...register("delivery_percentage")}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm ">
                Vacform Count
              </label>
              <input
                type="number"
                className="input input-bordered w-full max-w-xs mt-2 input-sm"
                {...register("vacform_count")}
              />
            </div>
          </div>
          <div className="flex flex-row  space-x-2">
            <div>
              <label className="block text-gray-700 text-sm ">
                Machine Shop Receiver
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs mt-2 input-sm"
                {...register("receiver_machine_shop")}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm ">
                Vacforming Receiver
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs mt-2 input-sm"
                {...register("receiver_vacforming")}
              />
            </div>
          </div>
          <div>
            <select
              className="select select-bordered w-full max-w-xs mt-2 select-sm"
              {...register("delivery_status")}
            >
              <option>For Delivery</option>
              <option>Dispatched</option>
              <option>Received</option>
              <option>Parts Withdrawn</option>
              <option>Parts Returned</option>
            </select>
            <input
              type="text"
              placeholder="Remarks"
              className="input input-bordered mt-2  w-full input-sm"
              {...register("remarks")}
            />

            <button
              type="submit"
              className="btn btn-outline btn-secondary mt-4 btn-sm"
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
