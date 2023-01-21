import Link from "next/link";
import "../../app/globals.css";

export default async function JobCard() {
  return (
    <div className="hero h-4/5 bg-base-200">
      <div className="hero-content">
        <div className="card  w-96  h-50 bg-base-100 shadow-xl">
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
                Jan 23, 2023
              </p>
            </div>
            <h1 className="card-title text-3xl ">
              <Link href="/"> 751234</Link>||{" "}
              <span className="text-secondary">100%</span>
            </h1>
            <p className="text-xl">URBAN DECAY</p>
            <p className="text-lg text-secondary">For Delivery</p>
            <div className=" pt-4 ">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                Jasmine
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">
                Ato
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">
                Ralph
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="hero h-4/5 bg-base-200">
    //   <div className="hero-content">
    //     <div className="card w-96 bg-base-100 shadow-xl">
    //       <figure className="px-10 pt-10">
    //         <img
    //           src="https://placeimg.com/400/225/arch"
    //           alt="Shoes"
    //           className="rounded-xl"
    //         />
    //       </figure>
    //       <div className="card-body items-center text-center">
    //         <h2 className="card-title">Shoes!</h2>
    //         <p>If a dog chews shoes whose shoes does he choose?</p>
    //         <div className="card-actions">
    //           <button className="btn btn-primary">Buy Now</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
