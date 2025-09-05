import {Link} from "react-router-dom"

import styles from "./home.module.css"
import createNoteImg from "../../assets/new.png"

function Home({ notes }) {
    return <>
        <h1 className={styles.yourNotesHeader}>
            Your Notes
            <Link to="/note-editor/0" className={styles.newNote}>
                <img src={createNoteImg} alt="create note" />
            </Link>
        </h1>
        <div className={styles.notesContainer}>

            { Object.entries(notes).map(([noteId, noteContent]) => (
                <Link key={noteId} to={`/note-editor/${noteId}`} className={styles.note}>
                    {noteContent.slice(0, 250)}...
                </Link>
            ))}
        </div>
    </>
}

export default Home;