export default function JobCard(props) {
  return (
    <div className="hero h-4/5 bg-base-200">
      <div className="hero-content">
        {/* <div className="max-w-md">
            <h1 className="text-5xl font-bold">Paperless Transactions</h1>
            <p className="py-6">
              We like saving trees and saving energy in recyling but more than
              that we like to have the your transaction get more effecient!
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div> */}
        <div className="card w-96 h-48 bg-base-100 shadow-xl">
          <div className="card-body">
            <p className="text-sm text-gray-600 flex items-center">
              {/* <svg
                  className="fill-current text-gray-500 w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg> */}
              <svg
                className=" text-gray-500 w-5 h-5 mr-2"
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
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              Jan 23, 2023
            </p>
            <h1 className="card-title">
              <span className="text-2xl">74140</span>
              <div className="badge badge-secondary">100%</div>
            </h1>
            <p>
              URBAN DECAY ||
              <input
                type="radio"
                name="radio-3"
                className="radio radio-secondary"
                checked
              />
              <input
                type="radio"
                name="radio-3"
                className="radio radio-secondary"
              />
            </p>
            {/* <div className="card-actions justify-end">
                <div className="badge badge-outline">Haniyeh</div>
                <div className="badge badge-outline">Products</div>
              </div> */}
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Jasmine
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Ato
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Ralph
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
