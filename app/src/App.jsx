// Import React
import {useState, useEffect} from "react"
import {Routes, Route} from "react-router-dom"

// Import Components 
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

// Import Pages
import Home from "./pages/Home"
import NoteEditor from "./pages/NoteEditor"

function App() {

    const [notes, setNotes] = useState({});

    // Load when Mount
    useEffect(() => {
        let data = localStorage.getItem("notes");
        if (!data) {
            data = {};
        } else {
            data = JSON.parse(data);
        }

        setNotes(data);
    }, []);

    // Update LocalStorage when State changes
    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    return <>
        <Navbar />

        <main className="content">
            <Routes>
                <Route path="/" element={<Home notes={notes} />} />
                <Route path="/note-editor/:id" element={<NoteEditor notes={notes} setNotes={setNotes} />} />
            </Routes>
        </main>

        <Footer />
    </>
}

export default App;