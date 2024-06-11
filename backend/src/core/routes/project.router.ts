import express from "express"
import { projectController } from "../controllers"

const projectRouter = express.Router()

export default projectRouter
    .get("/dashboard/:projectId", (req, res) => projectController.getProjectById(req, res))
    .get("/dashboard/:projectName", (req, res) => projectController.getProjectByName(req, res))
    .post("/dashboard/:projectId", (req, res) => projectController.createProject(req, res))
    .put("/dashboard/:projectId", (req, res) => projectController.updateProject(req, res))
    .delete("/dashboard/:projectId", (req, res) => projectController.deleteProject(req, res))
