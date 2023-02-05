"use Client";
import React from "react";
import DeliveryCard from "@/components/job/deliverycard";

import clientPromise from "@/lib/mongodb";

async function getJobsForDelivery() {
  try {
    const client = await clientPromise;
    const db = client.db("model_shop");

    const jobs = await db
      .collection("jobs")
      .find({ delivery_status: { $ne: "Delivered" } })
      .map((job) => ({ ...job, _id: job._id.toString() }))
      .toArray();

    // return { jobs_for_delivery: jobs };
    return JSON.parse(JSON.stringify(jobs));
  } catch (e) {
    return { error: "Failed to fetch jobs for delivery" };
  }
}

export default async function JobsForDelivery() {
  const jobs = await getJobsForDelivery();

  if (jobs.length === 0)
    return (
      <div className="max-w-md">
        <h1 className="text-3xl font-semibold">No Jobs Dispatched</h1>
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
