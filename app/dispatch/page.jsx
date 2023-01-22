import DispatchCard from "@/components/job/dispatchcard";

export default async function JobList() {
  return (
    <div className="hero min-h-screen bg-base-200 content-start ">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <DispatchCard />
        </div>
      </div>
    </div>
  );
}
