import ReceiveCard from "@/components/job/receivecard";

async function getData() {
  let res = await fetch("http://localhost:3000/api/getMovies");

  console.log(res.json);
  return res.json();
}

export default async function JobList() {
  const jobs = await getData();
  return (
    <div className="hero min-h-screen bg-base-200 content-start ">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <ReceiveCard details={jobs[0]} />;
        </div>
      </div>
    </div>
  );
}
