import {useParams} from "react-router-dom"
import ContentInput from "../../components/ContentInput"

function NoteEditor({ notes, setNotes}) {
    var { id } = useParams() // Destructing
    
    if (Number(id) === 0) {
        if (Object.keys(notes).length !== 0) {
            id = Math.max(...Object.keys(notes)) + 1;
        } else {
            id = 1;
        }
    }
    return <>
        <h1>Editor</h1>
        <ContentInput notes={notes} setNotes={setNotes} noteId={id} />
    </>;
}

export default NoteEditor;