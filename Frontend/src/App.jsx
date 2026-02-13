import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CreateNotes from "./assets/CreateNotes";

const App = () => {
  const [notes, setNotes] = useState([]);

  const [showForm, setShowForm] = useState(false)

  function fetchNotes() {
    axios.get("http://localhost:3000/api/notes").then((res) => {
      setNotes(res.data.notes);
    });
  }

  function deleteNote(noteId) {
    axios.delete(`http://localhost:3000/api/notes/${noteId}`);
    
    fetchNotes();
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      <CreateNotes 
        refreshNotes={fetchNotes} 
        showForm={showForm}
        setShowForm={setShowForm}
      />

      <button className="add-note"
        onClick={() => setShowForm(true)}
      >Add Note</button>

      <div className="notes">
        {notes.map(note => {
          return (
            <div className="note" key={note._id}>
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <button className="remove"
                onClick={() => {
                  deleteNote(note._id)
                }}
              >Remove</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
