import clientPromise from "@/lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("sample_mflix");

    const posts = await db.collection("movies").find({}).limit(2).toArray();

    res.json(posts);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
