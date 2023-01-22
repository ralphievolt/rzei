import Link from "next/link";
import date from "date-and-time";
import "../../app/globals.css";

export default async function ReceiveCard({ details }) {
  return (
    <div className="card  w-full md:w-96  h-50 bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
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
            {date.format(new Date(), "ddd, MMM DD YYYY")}
          </p>
        </div>
        <h1 className="card-title text-2xl ">
          <Link href="/receive" className="text-secondary">
            {" "}
            {details.job_number}
          </Link>
          || {details.delivery_percentage} %
        </h1>
        <p className="text-xl font-bold">{details.brand}</p>
        <select className="select select-lg  w-full max-w-xs text-secondary text-center">
          <option>For Delivery</option>
          <option>Received</option>
          <option>Parts Withdrawn</option>
          <option>Parts Returned</option>
        </select>

        <select className="select select-lg  w-full max-w-xs text-secondary text-center">
          <option>Vacforming</option>
          <option>Machine Shop</option>
        </select>
        <input
          type="text"
          placeholder="Receiver's Name"
          className="input input-bordered w-full max-w-xs mt-2"
        />
        <input
          type="text"
          placeholder="Remarks"
          className="input input-bordered w-full max-w-xs mt-3"
        />
        <button className="btn btn-outline btn-secondary btn-wide mt-4">
          Scan QR Code Key To Save
        </button>
      </div>
    </div>
  );
}
