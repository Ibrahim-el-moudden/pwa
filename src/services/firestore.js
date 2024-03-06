import {initializeApp} from "firebase/app";
import {getFirestore, enableIndexedDbPersistence} from 'firebase/firestore';

const firebaseConfig = {
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const firestoreDB = getFirestore(firebaseApp);
console.log("initialized firebase connection");

// Enable Firestore persistence
enableIndexedDbPersistence(firestoreDB)
    .then(() => {
        console.log("Offline persistence enabled successfully!");
    })
    .catch((error) => {
        console.log("Error enabling offline persistence: ", error);
    });