import Note from "../models/Note.js";

export const getNotes = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit);
    const notes = await Note.findAll();
    if (!isNaN(limit) && limit > 0) {
      res.json(notes.slice(0, limit));
    } else {
      res.json(notes);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createNote = async (req, res) => {
  try {
    const {
      body: { title, description },
    } = req;
    if (!title || !description)
      return res.status(400).json({ error: "All field are required" });
    const result = await Note.create(req.body);
    res.status(200).json({ message: "Note created", result });
    // const { author, title, content, cover } = req.body;
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getNote = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Note.findByPk(id);
    if (!result) return res.status(404).json({ error: "Note not found" });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateNote = async (req, res) => {
  try {
    const {
      body: { author, title, content, cover },
      params: { id },
    } = req;
    if (!author || !title || !content || !cover)
      return res.status(400).json({
        error: "All field are required",
      });
    const note = await Note.findByPk(id);
    if (!note) return res.status(404).json({ error: "Note not found" });
    await note.update(req.body);
    res.json(note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const user = await Note.findByPk(id);
    if (!user) return res.status(404).json({ error: "Note not found" });
    await user.destroy();
    res.json({ message: "Note deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
