import {Notes} from "../components/Notes";
import {collection} from 'firebase/firestore';
import {firestoreDB} from "../services/firestore";
import {useCollectionData} from "react-firebase-hooks/firestore";

export function NotesPage(){
    const collectionRef = collection(firestoreDB, "notes");
    const [values, loading, error] = useCollectionData(collectionRef);
    console.log({values, loading, error});

    return(
      <Notes title={"My notes"} notes={values} />
    )
}