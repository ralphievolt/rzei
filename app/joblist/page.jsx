import JobCard from "@/components/job/jobcard";

async function getData() {
  let res = await fetch("https://jsonplaceholder.typicode.com/todos");

  console.log(res.json);
  return res.json();
}

export default async function JobList() {
  const table = await getData();
  return (
    <>
      <JobCard />
      <ul>
        {table.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}
