export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200 content-start ">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold  text-secondary mt-10">
            Paperless Transactions
          </h1>
          <p className="py-6 text-3xl">In three easy steps</p>
          <div>
            <ul className="steps">
              <li className="step step-secondary text-xl">Dispatch</li>
              <li className="step step-secondary text-xl">Deliver</li>
              <li className="step step-secondary text-xl">Scan QR Code</li>
            </ul>
          </div>
          <p className="py-6 text-2xl">
            We love saving trees and energy through recycling, but more
            importantly, we enjoy making your transactions more efficient!
          </p>
          <div className="divider" />
          {/* 
          <div class="space-y-4">
            <h2 class="text-xl text-secondary text-center">
              Enter email to start
            </h2>
            <div className="input-group"></div>
            <input
              type="text"
              className="input input-bordered w-2/3 md:w-2/3 font-semibold  "
            />
            <button className="btn btn-secondary">Button</button>
          </div> */}
          <h2 class="text-xl text-secondary text-center mb-3">
            Enter email to start
          </h2>
          <div className="form-control">
            <div className="input-group justify-center">
              <input
                type="text"
                className="input input-bordered w-2/3 md:w-2/3  font-semibold rounded "
                // focus:outline-none
              />
              <button className="btn btn-secondary">Go</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
