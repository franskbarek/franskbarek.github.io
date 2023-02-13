import express from "express";
const router = express.Router();
import Write from "../models/Write.js";

// create
router.post("/", async (req, res) => {
  const newWrite = new Write(req.body);
  try {
    const savedWrite = await newWrite.save();
    res.status(200).json(savedWrite);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update
/**
 * 
router.put("/:id", async (req, res) => {
  try {
    const write = Write.finById(req.params.id);
    if (write.username.id === req.body.username) {
      try {
        const updatedWrite = await Write.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedWrite);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your write!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete
router.delete("/:id", async (req, res) => {
  try {
    const write = await Write.findById(req.params.id);
    if (write.username.id === req.body.username) {
      try {
        write.delete();
        res.status(200).json("Write has been deleted!");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("Your can delete only your write!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});


*/

// get all
router.get("/", async (req, res) => {
  try {
    const write = await Write.find();
    res.status(200).json(write);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get
router.get("/:id", async (req, res) => {
  try {
    const write = await Write.findById(req.params.id);
    res.status(200).json(write);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get limit/pagination
router.get("/", async (req, res) => {
  // destructure page and limit and set default values
  const { page = 1, limit = 10 } = req.query;

  try {
    // execute query with page and limit values
    const posts = await Write.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    // get total documents in the Posts collection
    const count = await Write.countDocuments();

    // return response with posts, total pages, and current page
    res.status(200).json({
      posts,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
