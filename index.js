const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Nest is getting cozier....");
});

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@ph-db1.h6jf6zl.mongodb.net/?retryWrites=true&w=majority&appName=PH-DB1`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

const postCollection = client.db("cozynestDB").collection("posts");

async function run() {
    try {
        // ?Get API
        app.get("/post", async (req, res) => {
            let query = {};
            // * featured post with availablabiliy
            if (req.query.availability) {
                query = { availability: req.query.availability };
            }
            // * Individual posts for the details page
            if (req.query._id) {
                query = { _id: new ObjectId(req.query._id) };
            }
            const result = await postCollection.find(query).toArray();
            res.send({
                message: `found the following ${result.length} data`,
                data: result,
            });
        });

        // ?POST API
        app.post("/post", async (req, res) => {
            const data = req.body;
            const result = await postCollection.insertOne(data);
            res.send({
                message: "Post has been saved in the database",
                data: result,
            });
        });

        // ?PUT API
        app.put("/post/:id", async (req, res) => {
            const query = { _id: new ObjectId(req.params.id) };
            const update = {
                $set: req.body,
            };
            const options = {};
            const result = await postCollection.updateOne(
                query,
                update,
                options
            );
            res.send({
                message: `updated data for the post with id ${req.params.id}`,
                data: result,
            });
        });

        // ?DELETE API
        app.delete("/post/:id", async (req, res) => {
            const query = { _id: new ObjectId(req.params.id) };
            const result = await postCollection.deleteOne(query);
            res.send({
                message: "deleted one post",
                data: result,
            });
        });
    } finally {
    }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log("cozyNest server is running on", port);
});
