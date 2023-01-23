import DeliveryCard from "@/components/job/deliverycard";

async function getData() {
  let res = await fetch("http://localhost:3000/api/getDispatched");

  console.log(res.json);
  return res.json();
}

export default async function Deliver() {
  const jobs = await getData();
  if (jobs.length === 0)
    return (
      <div className="hero min-h-screen bg-base-200 content-start ">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-3xl font-semibold">No Jobs Dispatched</h1>
          </div>
        </div>
      </div>
    );
  return (
    <div className="hero min-h-screen bg-base-200 content-start ">
      <div className="hero-content text-center">
        <div className="max-w-md space-y-4">
          {jobs.map((job, idx) => (
            <DeliveryCard details={job} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
