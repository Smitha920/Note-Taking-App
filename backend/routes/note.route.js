import express from "express";
import{ createNote } from "../controllers/note.controllers.js";

const router = express.Router();

router.post("/create-note", createNote);
export default router;