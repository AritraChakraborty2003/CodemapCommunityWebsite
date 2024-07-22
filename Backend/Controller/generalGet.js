const generalGet = (req, res) => {
  const myObj = {
    name: "Aritra",
    age: 21,
    degree: "B.Tech",
  };
  return res.end(JSON.stringify(myObj));
};
export { generalGet };
