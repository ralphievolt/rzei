import clientPromise from "@/lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("model_shop");

    const jobs = await db.collection("jobs").find({}).limit(2).toArray();

    res.json(jobs);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};