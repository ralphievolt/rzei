"use client";
import Link from "next/link";
import date from "date-and-time";
import "../../app/globals.css";

export default function DeliveryCard({ details }) {
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

        <div className="flex flex-row  space-x-2">
          <div>
            <label className="block text-gray-700 text-sm ">
              Delivery Percentage
            </label>
            <input
              type="number"
              className="input input-bordered w-full max-w-xs mt-2 input-sm"
              value={details.delivery_percentage}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm ">
              Vacform Count
            </label>
            <input
              type="number"
              className="input input-bordered w-full max-w-xs mt-2 input-sm"
              value={details.vacform_count}
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
              value={"Someone"}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm ">
              Vacforming Receiver
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs mt-2 input-sm"
              value={"Rhey"}
            />
          </div>
        </div>
        <div>
          <select
            className="select select-bordered w-full max-w-xs mt-2 select-sm"
            value={details.delivery_status}
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
            value={details.remarks}
          />

          <button
            type="submit"
            className="btn btn-outline btn-secondary mt-4 btn-sm"
            // disabled={clicked}
          >
            Click to scan QR Code
          </button>
        </div>
      </div>
    </div>
  );
}
