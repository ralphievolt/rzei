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
        </div>
      </div>
    </div>
  );
}
