import {Link, useNavigate} from "react-router-dom"
import {useState} from "react"

import styles from "./home.module.css"
import createNoteImg from "../../assets/new.png"
import deleteImg from "../../assets/delete.png"
import noNotesImg from "../../assets/empty.svg"

function Home({ setNotes, notes }) {
    const navigate = useNavigate();
    const [deleteMode, setDeleteMode] = useState(false);
    const [selectedForDelete, setSelectedForDelete] = useState([]);
    
    function noteClick(e, noteId) {
        if (deleteMode) {
            if (!e.target.classList.contains(styles.selectedForDelete)) {
                e.target.classList.add(styles.selectedForDelete);
                setSelectedForDelete([...selectedForDelete, noteId]);
                
            } else {
                e.target.classList.remove(styles.selectedForDelete);
                setSelectedForDelete(selectedForDelete.filter(id => id !== noteId));
            }
        } else {
            navigate(`/note-editor/${noteId}`);
        }
    }

    function ToggleDeleteMode(value) {
        setDeleteMode(value);

        if (value === false) {
            if (selectedForDelete.length === 0) return;

            if (!confirm(`Are you sure you want to delete ${selectedForDelete.length} notes?`)) {
                document.querySelectorAll(`.${styles.selectedForDelete}`).forEach(el => el.classList.remove(styles.selectedForDelete));
                return;
            }

            let filtered = Object.entries(notes).filter(([id, content]) => !selectedForDelete.includes(id));
            let obj = {};
            filtered.forEach(([id, content]) => {
                obj[id] = content;
            });
            setNotes(obj);
            setSelectedForDelete([]);
            localStorage.setItem("notes", JSON.stringify(obj));
        }
    }

    return <>
        <h1 className={styles.yourNotesHeader}>
            Your Notes
            <div className={styles.actions}>
                <button className={`${styles.action} ${deleteMode ? "" : styles.opacity}`} onClick={() => ToggleDeleteMode(!deleteMode)}>
                    <img src={deleteImg} alt="delete notes" />
                </button>
                
                <Link to="/note-editor/0" className={styles.action}>
                    <img src={createNoteImg} alt="create note" />
                </Link>
            </div>
        </h1>
        <div className={styles.notesContainer}>

            { Object.entries(notes).map(([noteId, noteContent]) => (
                <button key={noteId} onClick={(e) => noteClick(e, noteId)} className={styles.note}>
                    {noteContent.slice(0, 250)}...
                </button>
            ))}
            { Object.keys(notes).length === 0 && 
                <p className={styles.noNotesText}>
                    <img src={noNotesImg} alt="" />
                    There are no Notes. So Let's start creating them!
                </p>
            }
        </div>
    </>
}

export default Home;