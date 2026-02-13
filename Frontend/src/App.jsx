import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CreateNotes from "./assets/CreateNotes";

const App = () => {
  const [notes, setNotes] = useState([]);

  function fetchNotes() {
    axios.get("http://localhost:3000/api/notes").then((res) => {
      setNotes(res.data.notes);
    });
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      <CreateNotes refreshNotes={fetchNotes} />

      <div className="notes">
        {notes.map(note => {
          return (
            <div className="note" key={note._id}>
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <button className="remove">Remove</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
