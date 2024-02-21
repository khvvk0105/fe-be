const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
var fs = require("fs");

const { users } = require("./dummy.json");
app.use(bodyParser.json());
// console.log(products);
// console.log(users);

app.get("/products", (req, res) => {
  res.type = "application/json";
  res.send({ products });
});

app.get("/users", (req, res) => {
  res.type = "application/json";
  res.send({ users });
});

app.post("/add-users", (req, res) => {
  const addedUsers = req.body;
  console.log(req.body);
  fs.readFile("dummy.json", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const jsonFile = JSON.parse(data.toString());
      console.log(jsonFile);
      jsonFile.users.push(addedUsers);
      fs.writeFile("dummy.json", JSON.stringify(jsonFile), (err) => {
        if (err) {
          console.log(err);
          res.send("error happened");
        } else {
          console.log("success");
          res.send("User added success");
        }
      });
    }
  });
  // res.status(200);
  // res.send("User added successfully");
});

app.get("/usernames", (req, res) => {
  res.type = "application/json";
  res.send({ usernames });
});

const usernames = users.map((e) => {
  return e.name;
});

// console.log(usernames);

app.listen(3001, () => {
  console.log("Server is listening at port 3001");
});
