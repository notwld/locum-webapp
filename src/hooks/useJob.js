import { getFirestore, addDoc, collection, getDocs, getDoc, doc, deleteDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { app } from "../firebase/config";

const db = getFirestore(app);
const storage = getStorage(app);

const addJob = async (job, file) => {
    try {
        console.log(job,file);
        const docRef = await addDoc(collection(db, "jobs"), job);
        const storageRef = ref(storage, `jobs/${docRef.id}`);
        await uploadBytes(storageRef, file);
        return docRef;
    }
    catch (err) {
        console.log(err);
    }
}


const listAllJobs = async () => {
    try {
        //retrieve all jobs and file url from firebase
        const querySnapshot = await getDocs(collection(db, "jobs"));
        const jobs = [];
        for (const doc of querySnapshot.docs) {
            await getDownloadURL(ref(storage, `jobs/${doc.id}`)).then((url) => {
                jobs.push({
                    ...doc.data(),
                    id: doc.id,
                    fileUrl: url,
                });
            }
            );
            
        }
    
        return jobs;
    }
    catch (err) {
        console.log(err);
    }
}




const editJob = async (job, file) => {
    try {
        const docRef = doc(db, "jobs", job.id);
        await uploadBytes(ref(storage, `jobs/${job.id}`), file);
        await getDoc(docRef);
        await docRef.set(job);
    }
    catch (err) {
        console.log(err);
    }
}

const deleteJob = async (job) => {
    try {
        const docRef = doc(db, "jobs", job.id);
        await deleteDoc(docRef);
        await deleteDoc(ref(storage, `jobs/${job.id}`));
    }
    catch (err) {
        console.log(err);
    }
}


export { addJob, listAllJobs, editJob, deleteJob };