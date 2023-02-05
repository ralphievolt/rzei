import JobsForDelivery from "@/app/for-delivery/getJobsForDelivery";

export default async function Deliver() {
  return (
    <div className="hero min-h-screen bg-base-200 content-start ">
      <div className="hero-content text-center">
        <JobsForDelivery />
      </div>
    </div>
  );
}
