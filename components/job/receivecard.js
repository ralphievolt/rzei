"use client";
import Link from "next/link";
import date from "date-and-time";
import "../../app/globals.css";

export default function ReceiveCard({ details }) {
  return (
    <div className="card  w-full md:w-96  h-50 bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h1 className="text-xl font-semibold text-secondary ">
          Receiving Transaction
        </h1>
        <div className="divider mt-0 mb-0"></div>
        <h1 className="card-title text-2xl ">{details.job_number}</h1>
        <p className="text-xl font-bold">{details.brand}</p>
        <div>
          <p className="text-sm text-gray-600 flex">
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
            {date.format(new Date(details.last_updated), "ddd, MMM DD YYYY")}
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
              value={100}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm ">
              Vacform Count
            </label>
            <input
              type="number"
              className="input input-bordered w-full max-w-xs mt-2 input-sm"
              value={8}
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
              Vacform Tooling Receiver
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs mt-2 input-sm"
              value={"Rhey"}
            />
          </div>
        </div>
        <div>
          <select className="select select-bordered w-full max-w-xs mt-2 select-sm">
            <option>For Delivery</option>
            <option>Received</option>
            <option>Parts Withdrawn</option>
            <option>Parts Returned</option>
          </select>
          <input
            type="text"
            placeholder="Remarks"
            className="input input-bordered mt-2  w-full input-sm"
          />

          <button
            type="submit"
            className="btn btn-outline btn-secondary btn-wide mt-4 btn-sm"
            // disabled={clicked}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
