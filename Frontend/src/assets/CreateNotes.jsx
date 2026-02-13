import React from "react";
import axios from "axios";

const CereatNotes = ({ refreshNotes,  showForm, setShowForm }) => {
    async function submmitHandler(e) {
        e.preventDefault();

        const { title, description } = e.target.elements;

        await axios.post("http://localhost:3000/api/notes", {
            title: title.value,
            description: description.value,
        });

        refreshNotes();
        e.target.reset();
    }

    return (
        <div 
            className={`form-model ${showForm ? "active" : ""}`}
        >
            <div className="form-container">
                <h1>Create Notes</h1>
                <button 
                    className="from-model-close"
                    onClick={() => setShowForm(false) }
                >
                    ✕
                </button>
                <form 
                    className="note-create-form" 
                    onSubmit={submmitHandler}
                >
                    <input 
                        name="title" 
                        type="text" 
                        placeholder="Enter title" 
                    />
                    <input
                        name="description"
                        type="tel"
                        placeholder="Enter description"
                    />
                    <button 
                        className="create-btn"
                        onClick={() => setShowForm(false) }
                    >Create Note</button>
                </form>
            </div>
        </div>
    );
};

export default CereatNotes;
