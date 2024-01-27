import { useState } from "react";
import "./app.scss";
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";

const App = () => {
    const [notes, setNotes] = useState([
        // { id: 1, text: "Tarea 1" },
        // { id: 2, text: "Tarea 2" },
        // { id: 3, text: "Tarea 3" },
    ]);




    return (
        <div>
            <h1>Notas</h1>
            <NoteForm notes={notes} setNotes={setNotes} />
            <NoteList notes={notes} setNotes={setNotes} />
        </div>
    );
};

export default App;