import PropTypes from "prop-types";
import "./noteList.scss";

const NoteList = (props) => {
    const { notes, setNotes } = props;

    const handleOnClickDeleteNote = (id) => {
        const index = notes.findIndex((note) => note.id === id);
        const currentNotes = notes.toSpliced(index, 1);
        setNotes(currentNotes);
    };

    const handleOnChangeModifyTitle = (id, value) => {
        const index = notes.findIndex((note) => note.id === id);
        const cloneNotes = [...notes];
        cloneNotes[index].title = value;
        setNotes(cloneNotes);
    };

    const handleOnChangeModifyContent = (id, value) => {
        const index = notes.findIndex((note) => note.id === id);
        const cloneNotes = [...notes];
        cloneNotes[index].content = value;
        setNotes(cloneNotes);
    };

    const handleOnChangeModifyFavorite = (id, value) => {
        console.log(value);
        const index = notes.findIndex((note) => note.id === id);
        const cloneNotes = [...notes];
        cloneNotes[index].favorite = value;
        setNotes(cloneNotes);
    };

    return (
        <div>
            <h3>Notas subidas</h3>
            <ul>
                {notes.map((note) => (
                    <li key={note.id}>
                        <div>
                            <h4>Titulo</h4>
                            <input
                                type="text"
                                value={note.title}
                                onChange={(e) => handleOnChangeModifyTitle(note.id, e.target.value)} />
                            <h4>Contenido</h4>
                            <textarea
                                value={note.content}
                                onChange={(e) => handleOnChangeModifyContent(note.id, e.target.value)} />
                            <h4>Favorita</h4>
                            <input type="checkbox"
                                checked={note.favorite}
                                onChange={(e) => handleOnChangeModifyFavorite(note.id, e.target.checked)} />
                        </div>
                        {/* <button className="btn-list" onClick={() => handleOnClickDeleteNote(note.id)}>Editar</button> */}
                        <button className="btn-list" onClick={() => handleOnClickDeleteNote(note.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

NoteList.propTypes = {
    notes: PropTypes.array.isRequired,
    setNotes: PropTypes.func.isRequired,
};

export default NoteList;
