const express = require("express");
const graphicCards = express.Router();
const fs = require("fs");

const dataPath = "./Details/graphicsData.json";

const getAccountData = () => {
  const jsonData = fs.readFileSync(dataPath);
  return JSON.parse(jsonData);
};

// Read - get all graphicCardss from the json file
graphicCards.get("/graphics-cards", (req, res) => {
  const accounts = getAccountData();
  res.send(accounts);
});

module.exports = graphicCards;
