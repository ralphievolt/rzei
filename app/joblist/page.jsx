import JobCard from "@/components/job/jobcard";

async function getData() {
  let res = await fetch("http://localhost:3000/api/getMovies");

  console.log(res.json);
  return res.json();
}

export default async function JobList() {
  const jobs = await getData();
  return (
    <>
      {jobs.map((job, idx) => (
        <JobCard details={job} />
      ))}
    </>
  );
}
