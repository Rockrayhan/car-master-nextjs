import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";


export const POST = async (req) => {
  const newUser = await req.json();

  try {
    const db = await connectDB();
    const userCollection = db.collection("users");

    // Check if the user already exists
    const exist = await userCollection.findOne({ email: newUser.email });

    if (exist) {
      return new Response(JSON.stringify({ message: "User Exists" }), {
        status: 409,
      });
    }

    const hashedPassword = bcrypt.hashSync(newUser.password, 14);
    const resp = await userCollection.insertOne({...newUser, password: hashedPassword});

    return new Response(
      JSON.stringify({ message: "User Created Successfully", data: resp }),
      { status: 201 } // Status code for created
    );
  } catch (error) {
    // Error handling
    return new Response(
      JSON.stringify({ message: "Something went wrong", error: error.message }),
      { status: 500 } // Status code for server error
    );
  }
};
