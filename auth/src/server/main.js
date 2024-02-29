import express from "express";
import ViteExpress from "vite-express";

const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

app.get("/bio",(req,res)=>{
  const shortBio = "This is a short bio."
  res.send(shortBio)
  res.status(200)
})

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
