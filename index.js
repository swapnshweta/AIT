const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const port = 3000;

// MongoDB URL and Database
const url = "mongodb://localhost:27017/";
const dbName = "SchoolDB";
const client = new MongoClient(url);

// Middleware to parse JSON
app.use(express.json());

async function main() {
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db(dbName);
    const students = db.collection("students");

    // Create (POST)
    app.post('/students', async (req, res) => {
        const data = req.body;
        const result = await students.insertOne(data);
        res.send(result);
    });

    // Read All (GET)
    app.get('/students', async (req, res) => {
        const allStudents = await students.find({}).toArray();
        res.send(allStudents);
    });

    // Read One by ID (GET)
    app.get('/students/:id', async (req, res) => {
        const id = req.params.id;
        const student = await students.findOne({ _id: new ObjectId(id) });
        res.send(student);
    });

    // Update by ID (PUT)
    app.put('/students/:id', async (req, res) => {
        const id = req.params.id;
        const updateData = req.body;
        const result = await students.updateOne(
            { _id: new ObjectId(id) },
            { $set: updateData }
        );
        res.send(result);
    });

    // Delete by ID (DELETE)
    app.delete('/students/:id', async (req, res) => {
        const id = req.params.id;
        const result = await students.deleteOne({ _id: new ObjectId(id) });
        res.send(result);
    });

    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
}

main().catch(console.error);
