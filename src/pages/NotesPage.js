import {Notes} from "../components/Notes";
import {collection, addDoc, deleteDoc, updateDoc} from 'firebase/firestore';
import {firestoreDB} from "../services/firestore";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {firestoreConverter} from "../services/firestoreConverter";
import {Form} from "react-bootstrap";
import {useState} from "react";
import {MyButton} from "../components/MyButton";
import {NoteForm} from "../components/NoteForm";

export function NotesPage(){
    const collectionRef = collection(firestoreDB, "notes").withConverter(firestoreConverter);
    const [values, loading, error] = useCollectionData(collectionRef);
    console.log({values, loading, error});
    const [search, setSearch] = useState("");
    const [noteSelected, setNoteSelected] = useState();
    const [newNote, setNewNote] = useState();

    const addNote = async (note) => {
        setNewNote(note);
    }

    const saveNewNote = async (note) => {
            const data ={
                title: note.title,
                text: note.text,
                date: new Date().toISOString().slice(0, 10),
                _validation: {
                    title: (e) => {
                        if (!e) return "No title";
                        return e;
                    }
                }
            };
        try {
            await addDoc(collectionRef, data);
            console.log("added note: " + note.title);
            return true;
        } catch (e) {
                    console.log(`Note could not be added: ${e}`);
        }
    }


    const deleteNote = async (note) =>{
        try {
            await deleteDoc(note.ref);
            console.log("Document with title " + note.title + " deleted");
        }
        catch(e) {
            console.log(`Document could not be deleted: ${e}`);
        }
    }

    const editNote = (note) =>{
        setNoteSelected(note);
    }

    const saveNote = async (note) => {
        try {
            await updateDoc(note.ref, { title: note.title, text: note.text, date: new Date().toISOString().slice(0, 10)});
            console.log("saved note: " + note.title);
            return true;
        } catch (e) {
            console.log(`Note could not be saved: ${e}`);
        }
    }
    return(
        <>
            <div className="m-3">
                <Form>
                    <Form.Label>search</Form.Label>
                    <Form.Control value={search} onChange={(e) => setSearch(e.target.value)} />
                </Form>
            </div>
            <MyButton onClick={addNote} variant={"outline-dark"}>Add new note</MyButton>
            <Notes title={"My notes"} onDelete={deleteNote} onEdit={editNote} notes={values && values.filter(n =>
                n.text.toLowerCase().includes(search.toLowerCase()) || n.title.toLowerCase().includes(search.toLowerCase()))} />
            <NoteForm noteSelected={newNote} setNoteSelected={setNewNote} onSave={saveNewNote} />
            <NoteForm noteSelected={noteSelected} setNoteSelected={setNoteSelected} onSave={saveNote} />

        </>
    )
}