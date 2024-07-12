const express = require("express");
const cors = require("cors");  // Import the CORS package
const app = express();
const { MongoClient } = require("mongodb");
const PORT = process.env.PORT || 7000;

// Initialize middleware
app.use(express.json({ extended: false }));

// CORS configuration
app.use(cors({
  origin: 'http://localhost:5173',  // Allow requests from this origin
  methods: 'GET,POST,PUT,DELETE',  // Allowed methods
  allowedHeaders: 'Content-Type',  // Allowed headers
}));

// Function to handle database operations
const withDB = async (operations, res) => {
  let client;
  try {
    // Connect to MongoDB
    client = await MongoClient.connect("mongodb://localhost:27017", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db("mernblog");

    // Create collection if it doesn't exist
    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map((col) => col.name);
    if (!collectionNames.includes("articles")) {
      await db.createCollection("articles");
    }

    // Execute the operations
    await operations(db);
  } catch (error) {
    res.status(500).json({ message: "Error connecting to database", error });
  } finally {
    // Ensure the client is closed
    client && client.close();
  }
};

// Get article by name
app.get("/api/articles/:name", async (req, res) => {
  withDB(async (db) => {
    const articleName = req.params.name;
    const articleInfo = await db.collection("articles").findOne({ name: articleName });
    if (articleInfo) {
      res.status(200).json(articleInfo);
    } else {
      res.status(404).json({ message: "Article not found" });
    }
  }, res);
});

// Add comment to article
app.post("/api/articles/:name/add-comments", (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;

  withDB(async (db) => {
    const articleInfo = await db.collection("articles").findOne({ name: articleName });
    if (articleInfo) {
      await db.collection("articles").updateOne(
        { name: articleName },
        {
          $set: {
            comments: articleInfo.comments ? articleInfo.comments.concat({ username, text }) : [{ username, text }],
          },
        }
      );
      const updatedArticleInfo = await db.collection("articles").findOne({ name: articleName });
      res.status(200).json(updatedArticleInfo);
    } else {
      res.status(404).json({ message: "Article not found" });
    }
  }, res);
});

// Add a new article (example route)
app.post("/api/articles/new", async (req, res) => {
  const { name, title, content } = req.body;

  withDB(async (db) => {
    const articleExists = await db.collection("articles").findOne({ name });
    if (articleExists) {
      res.status(400).json({ message: "Article already exists" });
    } else {
      await db.collection("articles").insertOne({
        name,
        title,
        content,
        comments: [],
      });
      res.status(201).json({ message: "Article created successfully" });
    }
  }, res);
});

// Start the server
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
