const express = require("express");
const { DetailsModel } = require("../model/detail.model");

const detailRouter = express.Router();

// POST --> Details Form Submit

detailRouter.post("/add", async (req, res) => {
  const { name, specialize } = req.body;
  try {
    const data = new DetailsModel({ name, specialize});
    await data.save();
    res.status(201).json({ message: "Added details" });
  } catch (error) {
    res.status(500).json({ message: "Unable to add details" });
  }
});

detailRouter.get("/all", async (req, res) => {
  try {
    const data = await DetailsModel.find()
     res.status(201).json({ message: "All user details", data });
  } catch (error) {
    res.status(500).json({ message: "Unable to get details" });
  }
});

module.exports = {detailRouter}