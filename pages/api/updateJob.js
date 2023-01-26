import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("model_shop");
    const {
      delivery_percentage,
      vacform_count,
      receiver_machine_shop,
      receiver_vacforming,
      delivery_status,
      delivery_notes,
      _id,
    } = req.body;

    console.log(delivery_status);

    const job = await db.collection("jobs").updateOne(
      {
        _id: ObjectId(_id),
      },
      {
        $set: {
          delivery_percentage: delivery_percentage,
          vacform_count: vacform_count,
          receiver_machine_shop: receiver_machine_shop,
          receiver_vacforming: receiver_vacforming,
          delivery_status: delivery_status,
          delivery_notes: delivery_notes,
        },
        $push: {
          history: {
            timestamp: new Date(),
            transaction: "delivery_status",
            by: "Emerson", // current user
          },
        },
      }
    );

    res.json(job);

    console.log(job);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
