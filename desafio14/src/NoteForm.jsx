import PropTypes from "prop-types";
import { useState } from "react";
import "./noteForm.scss";

const NoteForm = (props) => {
    const { notes, setNotes } = props;

    const [inputNewNoteTitle, setInputNewNoteTitle] = useState("");
    const [inputNewNoteContent, setInputNewNoteContent] = useState("");
    const [boolNewNoteFavorite, setBoolNewNoteFavorite] = useState("");

    const generateId = () => {
        let maxId = 0;

        notes.forEach((note) => {
            if (note.id > maxId) {
                maxId = note.id;
            }
        });

        return maxId + 1;
    };

    const handleOnChangeNewNoteTitle = (e) => {
        setInputNewNoteTitle(e.target.value);
    };
    const handleOnChangeNewNoteContent = (e) => {
        setInputNewNoteContent(e.target.value);
    };

    const handleOnChangeNewNoteFavorite = (e) => {
        setBoolNewNoteFavorite(e.target.checked);
    };

    const handleOnClickAddNote = () => {
        if (inputNewNoteTitle.trim().length > 0 && inputNewNoteContent.trim().length > 0) {
            const NewNote = { id: generateId(), title: inputNewNoteTitle, content: inputNewNoteContent, favorite: boolNewNoteFavorite };
            setNotes([...notes, NewNote]);
            setInputNewNoteTitle("");
            setInputNewNoteContent("");
            setBoolNewNoteFavorite(false);
        }
    };

    return (
        <div id="list">
            <h3>Nueva nota</h3>
            <h4>Titulo</h4>
            <input type="text" id="noteTitle" value={inputNewNoteTitle} onChange={(e) => handleOnChangeNewNoteTitle(e)} />
            <h4>Contenido</h4>
            <textarea
                id="noteContent"
                value={inputNewNoteContent}
                rows="4" cols="50"
                onChange={(e) => handleOnChangeNewNoteContent(e)}
            />
            <h4>Favorita</h4>
            <input type="checkbox" id="noteIsFavorite" checked={boolNewNoteFavorite} onChange={(e) => handleOnChangeNewNoteFavorite(e)} />
            <button className="btn-form" onClick={handleOnClickAddNote}>Agregar nota</button>
        </div>
    );
};

NoteForm.propTypes = {
    notes: PropTypes.array.isRequired,
    setNotes: PropTypes.func.isRequired,
};

export default NoteForm;
