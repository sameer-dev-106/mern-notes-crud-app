import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CreateNotes from "./assets/CreateNotes";
import Navbar from "./assets/Navbar";

const App = () => {
  const [notes, setNotes] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const [selectedNote, setSelectedNote] = useState(null);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  })

  function fetchNotes() {
    axios.get("http://localhost:3000/api/notes").then((res) => {
      setNotes(res.data.notes);
    });
  }

  function deleteNote(noteId) {
    axios.delete(`http://localhost:3000/api/notes/${noteId}`)
    .then(() => {
      fetchNotes()
    })
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Navbar 
        setShowForm={setShowForm} 
        theme={theme}
        setTheme={setTheme}
      />

      <CreateNotes
        refreshNotes={fetchNotes}
        showForm={showForm}
        setShowForm={setShowForm}
      />

      <div className="notes">

        {notes.length === 0 && (
          <p className="empty-state">No notes yet. Create one!</p>
        )}

        {notes.map((note) => {
          return (
            <div 
              className="note" 
              key={note._id}
              onClick={() => setSelectedNote(note)}
            >
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <button
                className="remove"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteNote(note._id);
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
      {selectedNote && (
        <div 
          className="read-model active"
          onClick={() => setSelectedNote(null)}
        >
          <div 
            className="read-form-container"
            onClick={(e) => e.stopPropagation()}
          >
            <h1>{ selectedNote.title }</h1>
            <p style={{ whiteSpace: "pre-line" }}> 
              { selectedNote.description }
            </p>
            <button 
              className="read-model-close"
              onClick={() => setSelectedNote(null)}
            >
              close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
