import clientPromise from "@/lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("model_shop");
    const {
      job_number,
      brand,
      project_manager,
      model_maker,
      delivery_percentage,
      vacform_count,
    } = req.body;

    const job = await db.collection("jobs").insertOne({
      job_number,
      brand,
      project_manager,
      model_maker,
      delivered_by: "N/A",
      delivery_status: "Dispatched",
      delivery_percentage,
      vacform_count,
      last_updated: new Date(),
      receiver_machine_shop: "",
      receiver_vacforming: "",
      delivery_notes: "",
      history: [
        {
          timestamp: new Date(),
          transaction: "Dispatched",
          area: "Model Shop",
          by: "Emerson", // current user
        },
      ],
    });

    res.json(job);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
