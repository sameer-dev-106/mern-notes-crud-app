import React from "react";
import axios from "axios";

const CereatNotes = ({ refreshNotes,  showForm, setShowForm }) => {
    async function submmitHandler(e) {
        e.preventDefault();

        const { title, description } = e.target.elements;

        if (!title.value.trim() || !description.value.trim()) {
            alert("Title and Description required");
            return;
        }

        await axios.post("http://localhost:3000/api/notes", {
            title: title.value,
            description: description.value,
        });

        refreshNotes();
        e.target.reset();
        setShowForm(false);
    }

    return (
        <div 
            className={`form-model ${showForm ? "active" : ""}`}
        >
            <div className="form-container">
                <h1>Create Notes</h1>
                <form 
                    className="note-create-form" 
                    onSubmit={submmitHandler}
                >
                    <input 
                        name="title" 
                        type="text" 
                        placeholder="Enter title" 
                    />
                    <textarea
                        name="description"
                        placeholder="Enter description"
                        rows="4"
                    />
                    <div className="form-buttons">
                        <button type="submit" className="create-btn">
                            Create Note
                        </button>
                        <button
                            type="button"
                            className="from-model-close"
                            onClick={() => setShowForm(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CereatNotes;
