import express from "express";
const router = express.Router();
import Project from "../models/Project.js";

// create
// router.post("/", async (req, res) => {
//   const newProject = new Project(req.body);
//   try {
//     const savedProject = await newProject.save();
//     res.status(200).json(savedProject);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// update
// router.put("/:id", async (req, res) => {
//   try {
//     const project = Project.finById(req.params.id);
//     if (project.username.id === req.body.username) {
//       try {
//         const updatedProject = await Project.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
//         res.status(200).json(updatedProject);
//       } catch (err) {
//         res.status(500).json(err);
//       }
//     } else {
//       res.status(401).json("You can update only your project!");
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// delete
// router.delete("/:id", async (req, res) => {
//   try {
//     const project = await Project.findById(req.params.id);
//     if (project.username.id === req.body.username) {
//       try {
//         project.delete();
//         res.status(200).json("Project has been deleted!");
//       } catch (err) {
//         res.status(500).json(err);
//       }
//     } else {
//       res.status(401).json("Your can delete only your project!");
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// get
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/pagination", async (req, res) => {
  // pagination
  // using category for search, exp: http://localhost:5000/backend/projects?page=1&limit=4
  const page = parseInt(req.query.page) || 1; //by default 1
  const limit = parseInt(req.query.limit); //required and flexible

  try {
    if (page > 0 && limit > 0) {
      const result = await Project.find()
        .skip((page - 1) * limit)
        .limit(limit)
        .sort({ createdAt: -1 });
      res.status(200).json(result);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/search", async (req, res) => {
  // filter using regex
  const qFlex = req.query.flex;

  try {
    if (qFlex) {
      const regex = new RegExp(`\\b(${qFlex.split(" ").join("|")})\\b`, "gi");
      const result = await Project.find({ title: regex });
      res.status(200).json(result);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
