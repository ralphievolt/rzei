"use client";

import date from "date-and-time";

export default function JobCard({ details }) {
  return (
    <div className="card  w-full md:w-96  h-fit bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h1 className="text-xl font-semibold text-secondary ">
          {details.brand}
        </h1>
        <div className="divider mt-0 mb-0"></div>
        {/* <p className="text-2xl font-bold">{details.brand}</p> */}

        <h1 className="card-title text-2xl ">{details.job_number}</h1>
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
              Delivery Percentage:{" "}
              <span className="text-secondary text-2xl text-bold">
                {details.delivery_percentage}%
              </span>
            </label>
          </div>
          <div>
            <label className="block text-gray-700 text-sm ">
              Vacform Count :{" "}
              <span className="text-secondary text-2xl text-bold">
                {details.vacform_count}
              </span>
            </label>
          </div>
        </div>
        <div className="flex flex-row  space-x-2 mt-2">
          <div className="badge badge-secondary badge-outline badge-lg">
            {details.receiver_machine_shop}
          </div>
          <div className="badge badge-outline badge-lg">
            {details.receiver_vacforming}
          </div>
          <div className="badge badge-accent  badge-outline badge-lg">
            {details.delivery_status}
          </div>
        </div>

        <button
          className="btn btn-outline btn-secondary mt-4 btn-sm "
          onClick={() => {
            alert("Functionality coming soon...");
          }}
        >
          Update Delivery Status
        </button>
      </div>
    </div>
  );
}
