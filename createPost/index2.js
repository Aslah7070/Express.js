// const express=require("express");
// const app=express();
// app.use(express.json());
// app.get("/",(req,res)=>{
//     res.send("hello")
// })
// app.post("/p",(req,res)=>{

//     res.send("hello")
// })
// app.listen(3000,()=>{
//     console.log("hello");
    
// })


// const express = require("express");
// const app = express();
// const path=require("path")


// Handling a GET request to root
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname,"index.html"))
// });
// // Handling a POST request to /p
// app.post("/home", (req, res) => {
//     console.log(req.body); // Log the request body to check what's being sent
//     res.send("POST request received");
// });
// app.put("/home", (req, res) => {
//     console.log(req.body); // Log the request body to check what's being sent
//     res.send("put request received");
// });
// app.patch("/home", (req, res) => {
//     console.log(req.body); // Log the request body to check what's being sent
//     res.send("patch request received");
// });

// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });


const express = require("express");
const app = express();
const path=require("path")
app.use(express.static("public"))

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname,"index.html"))
// });

// app.post("/home", (req, res) => {
//     res.sendFile(path.join(__dirname,"about.html"))
// });
// app.put("/home", (req, res) => {
//     res.sendFile(path.join(__dirname,"contact.html"))
// });
// app.patch("/home", (req, res) => {
//     res.sendFile(path.join(__dirname,"footer.html"))
// });

app.listen(3000, () => {
    console.log("hdbfdbs");
    
})