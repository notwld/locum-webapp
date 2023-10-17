import { getFirestore, addDoc, collection,getDocs,getDoc,doc,deleteDoc } from "firebase/firestore";
import { app } from "../firebase/config";

const db = getFirestore(app);

const addJob = async (job) => {
    try {
        const docRef = await addDoc(collection(db, "jobs"), job);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

const listAllJobs = async () => {
    const jobs = [];
    const querySnapshot = await getDocs(collection(db, "jobs"));
    querySnapshot.forEach((doc) => {
        jobs.push(doc.data());
    });
    return jobs;
}


const editJob = async (id) => {
    const docRef = doc(db, "jobs", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}

const deleteJob = async (id) => {
    await deleteDoc(doc(db, "jobs", id)).then(() => {
        console.log("Document successfully deleted!");
    }
    ).catch((error) => {
        console.error("Error removing document: ", error);
    });

}

export { addJob, listAllJobs, editJob, deleteJob };