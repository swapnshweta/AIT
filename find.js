const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db("School1");

        const result = await db.collection("IA1").findOne({});
        if (result) {
            console.log("Name:", result.name);
        } else {
            console.log("No document found.");
        }
    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client.close();
    }
}

run();
