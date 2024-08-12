import express from "express";
import { notesRouter } from "./routers/notesRouter.js";
import cors from "cors";

const PORT = process.env.PORT ?? 5000;

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/API/notes", notesRouter);

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}/API/notes`);
});
