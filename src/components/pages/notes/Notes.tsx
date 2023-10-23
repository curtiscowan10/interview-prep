import "./Notes.scss";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const notes = [
  { id: 1, title: 'Note 1', content: 'Content for Note 1...' },
  { id: 2, title: 'Note 2', content: 'Content for Note 2...' },
  { id: 3, title: 'Note 3', content: 'Content for Note 3...' },
];

const Notes = () => (
  <div className="notes">
    <Typography variant="h2">
        Notes
      </Typography>
      <List>
        {notes.length === 0 && (
          <ListItemButton>
            <ListItemText primary="Notes will appear here" />
          </ListItemButton>
        )}
        {notes.map(note => (
          <Card key={note.id} className="notes__item" variant="outlined">
            <ListItemButton>
               <CardContent>
                <Typography variant="h5">{note.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {note.content.substring(0, 100)}
                </Typography>
              </CardContent>
            </ListItemButton>
          </Card>
        ))}
      </List>
  </div>
);

export default Notes;
