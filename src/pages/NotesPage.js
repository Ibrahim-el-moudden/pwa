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
    const [ noteSelected, setNoteSelected ] = useState();

    const addNote = async () => {
        const newNote ={
            title:"note title",
            text: "qdfqsdghsrthwdfg",
            _validation: {
                title: (e) => {
                    if (!e) return "No title";
                    return e;
                }
            }
        };
        try {
            const docRef = await addDoc(collectionRef, newNote);
            console.log("Note with title " + docRef.id + " added");
        }
        catch (e) {
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

    const editPerson = (note) =>{
        setNoteSelected(note);
    }

    const saveNote = async (note) => {
        try {
            console.log("saved note: " + note.title);
            await updateDoc(note.ref, { title: note.title, text: note.text });
            return true;
        } catch (e) {
            return false;
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
            <Notes title={"My notes"} onDelete={deleteNote} onEdit={editPerson} notes={values && values.filter(n => n.title.toLowerCase().includes(search.toLowerCase()) ||
                n.text.toLowerCase().includes(search.toLowerCase())) } />
            <NoteForm noteSelected={noteSelected} setNoteSelected={setNoteSelected} onSave={saveNote} />
        </>
    )
}