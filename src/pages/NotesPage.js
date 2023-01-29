import {Notes} from "../components/Notes";
import {collection} from 'firebase/firestore';
import {firestoreDB} from "../services/firestore";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {firestoreConverter} from "../services/firestoreConverter";
import {Form} from "react-bootstrap";
import {useState} from "react";

export function NotesPage(){
    const collectionRef = collection(firestoreDB, "notes").withConverter(firestoreConverter);
    const [values, loading, error] = useCollectionData(collectionRef);
    console.log({values, loading, error});
    const [search, setSearch] = useState("");

    return(
        <>
        <div className="m-3">
            <Form>
                <Form.Label>search</Form.Label>
                <Form.Control value={search} onChange={(e) => setSearch(e.target.value)} />
            </Form>
        </div>
      <Notes title={"My notes"} notes={values && values.filter(n => n.title.toLowerCase().includes(search.toLowerCase()) ||
          n.text.toLowerCase().includes(search.toLowerCase())) } />
        </>
    )
}