const express = require("express");
const router = express.Router();
const Page = require("../models/Page");

// Create new page
router.post("/", async (req, res) => {
  const newPage = new Page({ ...req.body });
  const page = await newPage.save();
  res.json(page);
});

// Get all pages by given website id
router.get("/website/:wid", async (req, res) => {
  const wid = req.params.wid;
  currentPages = await Page.find({ websiteId: wid });
  res.json(currentPages);
});

// get page by given id
router.get("/:pid", async (req, res) => {
  const pid = req.params.pid;
  page = await Page.findById(pid);
  res.json(page);
});

// Update page
router.put("/", async (req, res) => {
  const newPage = req.body;
  await Page.findByIdAndUpdate(newPage._id, newPage);
  res.json(newPage);
});

// Delete page
router.delete("/:pid", async (req, res) => {
  const pid = req.params.pid;
  await Page.findByIdAndRemove(pid);
  res.json(null);
});

module.exports = router;
