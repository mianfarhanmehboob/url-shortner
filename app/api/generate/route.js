import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    // Parse request body safely
    const body = await request.json();
    if (!body.url || !body.shorturl) {
      return Response.json(
        { success: false, error: true, message: "Missing required fields!" },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("URL-Shortner");
    const collection = db.collection("url");

    // Check if the short URL already exists
    const existingDoc = await collection.findOne({ shorturl: body.shorturl });
    if (existingDoc) {
      return Response.json(
        { success: false, error: true, message: "Short URL already exists!" },
        { status: 409 }
      );
    }

    // Insert new URL record
    const result = await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
      createdAt: new Date(),
    });

    if (!result.acknowledged) {
      throw new Error("Failed to insert URL.");
    }

    return Response.json(
      { success: true, error: false, message: "URL Generated Successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error generating short URL:", error);
    return Response.json(
      { success: false, error: true, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
