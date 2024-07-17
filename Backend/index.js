import express from "express";
const app = express();

app.get("/", (req, res) => {
  const obj = {
    name: "Akash",
    age: 23,
    gender: "Male",
  };
  res.end(JSON.stringify(obj));
});
app.listen(8000, () => {
  console.log("Backend Connected");
});
