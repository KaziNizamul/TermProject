const Note = require('../models/Note');

exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getByNoteId = async (req, res) => {
  try {
    const noteId = req.params.id;
    const note = await Note.findById(noteId);
    res.status(200).json(note);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.createNote = async (req, res) => {
  const note = new Note({
    title: req.body.title,
    content: req.body.content,
    date: new Date(),
  });

  try {
    const newNote = await note.save();
    res.status(201).json(newNote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateNoteById = async (req, res) => {
  try {
    const noteId = req.params.id;
    const updatedNote = req.body;
    const note = await Note.findByIdAndUpdate(noteId, updatedNote, { returnDocument: 'after' });
    res.status(200).json(note);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteNote = async (req, res) => {
  try {
    const noteId = req.params.id;
    await Note.findByIdAndDelete(noteId);
    res.json({ message: 'Note deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};