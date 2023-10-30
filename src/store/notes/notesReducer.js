import { on } from "events";
import { actionSuccess } from "../../common/utils/ApiHandler";
import {
  GET_NOTES,
  CREATE_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
} from './notesTypes';

const INITIAL_STATE = {
  notes: [],
};


function onGetNotesSuccess(state, { notes }) {
  return {
    ...state,
    notes,
  };
}

function onCreateNoteSuccess(state, { note }) {
  return {
    ...state,
    notes: [...state.notes, note],
  };
}

function onUpdateNoteSuccess(state, { note }) {
  const { notes } = state;
  const index = notes.findIndex(n => n.id === note.id);
  notes[index] = note;
  return {
    ...state,
    notes: [...notes],
  };
}

function onDeleteNoteSuccess(state, { note }) {
  const { notes } = state;
  const index = notes.findIndex(n => n.id === note.id);
  notes.splice(index, 1);
  return {
    ...state,
    notes: [...notes],
  };
}

export default function uiReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionSuccess(GET_NOTES):
      return onGetNotesSuccess(state, action);
    case actionSuccess(CREATE_NOTE):
      return onCreateNoteSuccess(state, action);
    case actionSuccess(UPDATE_NOTE):
      return onUpdateNoteSuccess(state, action);
    case actionSuccess(DELETE_NOTE):
      return onUpdateNoteSuccess(state, action);
    default:
      return state;
  }
}
