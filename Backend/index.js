const express = require("express");
const mongoose = require("mongoose");
const mongoString = "mongodb://127.0.0.1:27017/Restapi";
const cors = require("cors");

const People = require("./People");
const Question = require("./Question");

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.post("/peoplelogin", async (req, res) => {
  const newPeople = await People.usedEmail(req.body.email);
  if (!newPeople)
    return res.json({
      success: false,
      message: "the email is alredy used",
    });
  const data = new People({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/getAll", async (req, res) => {
  try {
    const data = await People.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/peoplelogin2", (req, res) => {
  const { email, password } = req.body;
  People.findOne({ email: email }).then((people) => {
    if (people) {
      if (people.password == password) {
        res.json("Success");
      } else {
        res.json("password is incorrect");
      }
    } else {
      res.json("No record found");
    }
  });
});

app.post("/admin", async (req, res) => {
  const data = new Question({
    question: req.body.question,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    answer: req.body.answer,
  });
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get("/getquestion", async (req, res) => {
  try {
    const data = await Question.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//DELETE OPERATIONS

app.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Question.findByIdAndDelete(id);
    res.send(`Document with ${data._id} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
//Put method opreations:

app.get("/updatequestion/:id", async (req, res) => {
  let result = await Question.findOne({ _id: req.params.id });

  if (result) {
    res.send(result);
  } else {
    res.send({ result: "No record found" });
  }
});

//update api
app.put("/updatequestion/:id", async (req, res) => {
  let result = await Question.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(result);
});

app.listen(8000, () => {
  console.log(`Server Started at ${8000}`);
});
