import express from "express";
import fs from "fs";


const app = express();
app.use(express.json());

let logfun = (req,res,next) => {
  let logText = `timestamp: ${new Date().toString()} url ${req.url} method ${req.method} \n`
  fs.appendFileSync("./log.txt",logText)
  console.log(logText)
  next()
}
app.use(logfun)
let data = [
  { id: 1, username: "quert", password: "qwer123" },
  { id: 2, username: "ramesh", password: "1234" },
];

// HOME
app.get("/", (req, res) => {
  res.status(200).json({
    message: "home route",
  });
});

// GET ALL USERS
app.get("/user", (req, res) => {
  res.status(200).json({
    message: "all users",
    data,
  });
});

// CREATE USER
app.post("/user", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: "username and password required",
    });
  }

  const newUser = {
    id: data.length + 1,
    username,
    password,
  };

  data.push(newUser);

  res.status(201).json({
    message: "user created",
    user: newUser,
  });
});

// UPDATE USER
app.put("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { username } = req.body;

  const userIdx = data.findIndex((ele) => ele.id === id);

  if (userIdx === -1) {
    return res.status(404).json({
      message: "user not found",
    });
  }

  data[userIdx] = {
    ...data[userIdx],
    username,
  };

  res.status(200).json({
    message: "user updated",
    user: data[userIdx],
  });
});

// DELETE USER
app.delete("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const userIdx = data.findIndex((ele) => ele.id === id);

  if (userIdx === -1) {
    return res.status(404).json({
      message: "user not found",
    });
  }

  const deletedUser = data.splice(userIdx, 1)[0];

  res.status(200).json({
    message: "user deleted",
    user: deletedUser,
  });
});

// SERVER
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
