import express from "express";
import {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
} from "../controllers/notes.js";

export const notesRouter = express.Router();

notesRouter.get("/", getNotes);
notesRouter.post("/", createNote);
notesRouter.get("/:id", getNote);
notesRouter.put("/:id", updateNote);
notesRouter.delete("/:id", deleteNote);
