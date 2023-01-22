import Link from "next/link";
import date from "date-and-time";
import "../../app/globals.css";

export default async function JobCard({ details }) {
  return (
    <div className="card   w-full md:w-96  h-50 bg-base-100 shadow-xl mt-5">
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
            {date.format(new Date(details.last_updated), "ddd, MMM DD YYYY")}
          </p>
        </div>
        <h1 className="card-title text-2xl ">
          <Link href="/receive" className="text-secondary">
            {details.job_number}
          </Link>
          || {details.delivery_percentage} %
        </h1>
        <p className="text-xl font-bold">{details.brand}</p>
        <p className="text-lg text-secondary">{details.delivery_status}</p>
        <div className=" pt-4 ">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {details.project_manager}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">
            {details.model_maker}
          </span>
          {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">
            Ralph / delivered_by
          </span> */}
        </div>
      </div>
    </div>
  );
}
