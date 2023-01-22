import JobCard from "@/components/job/jobcard";

async function getData() {
  let res = await fetch("http://localhost:3000/api/getJobs");
  return res.json();
}

export default async function JobList() {
  const jobs = await getData();

  if (jobs.length === 0)
    return (
      <div className="hero min-h-screen bg-base-200 content-start ">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-3xl font-semibold">No Jobs Available</h1>
          </div>
        </div>
      </div>
    );
  return (
    <div className="hero min-h-screen bg-base-200 content-start ">
      <div className="hero-content text-center">
        <div className="max-w-md space-y-4">
          {jobs.map((job, idx) => (
            <JobCard details={job} />
          ))}
        </div>
      </div>
    </div>
  );
}
