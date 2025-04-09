const { MongoClient } = require('mongodb');
const url = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db("School1");

        const myobj = [
            { name: "Deepak", age: "25", address: "Mumbai" },
            { name: "Swapnil", age: "31", address: "Mumbai" },
            { name: "Ramesh", age: "19", address: "Pune" },
            { name: "Sagar", age: "45", address: "Pune" }
        ];

        const result = await db.collection("IA1").insertMany(myobj);
        console.log("Number of records inserted: " + result.insertedCount);
    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client.close();
    }
}

run();
