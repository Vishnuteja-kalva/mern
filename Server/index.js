const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://Vishnuteja:tejavishnuu@cluster0.j6ir4.mongodb.net/Userinfo?retryWrites=true&w=majority&appName=Cluster0');
const UserModel = require("./models/User");

app.post('/login', (req, res) => {
   const { username, password } = req.body;
   UserModel.findOne({ username: username })
   .then(result => {
       if (result) {
           if (result.password === password) {
               return res.json({ message: "Success" });
           } else {
               return res.json({ message: "Incorrect password" });
           }
       } else {
           return res.json({ message: "Record not found. Please register." });
       }
   })
   .catch(err => {
       console.log(err);
       res.status(500).json({ message: "Server error" });
   });
});

app.post('/userinfo', (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => console.log(err));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server is created on port", port);
});
