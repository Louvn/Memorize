import styles from "./content-input.module.css"

function ContentInput({ notes, setNotes, noteId }) {

    function updateNote(e) {
        const notesNow = notes;

        notesNow[noteId] = e.target.value;
        setNotes(notesNow);
        localStorage.setItem("notes", JSON.stringify(notes));
    }

    const content = notes[noteId];

    return <textarea className={styles.contentInput} onChange={(e) => updateNote(e)} placeholder="Write down your Thoughts...">{content}</textarea>
}

export default ContentInput;