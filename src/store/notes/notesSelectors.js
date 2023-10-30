import { createSelector } from "reselect";

const notesState = state => state.notes;

const getNotes = createSelector(notesState, notes => {
  return notes?.notes ?? [];
});

// Get a single note by id
const getNote = (state, id) => {
  const notes = getNotes(state);
  return notes.find(note => note.id === id);
};

export { getNotes, getNote };
