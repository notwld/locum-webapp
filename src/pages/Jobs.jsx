import { useState } from "react";
import Banner from "../components/Banner";
import { app } from "../firebase/config"
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { listAllJobs } from "../hooks/useJob";

const auth = getAuth(app);

export default function Jobs() {
  const [user] = useAuthState(auth);
  const [jobs, setJobs] = useState([])
  
  const signOut = () => {
    return auth.currentUser && auth.signOut()
  }

  const GoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result)
      }).catch((error) => {
        console.log(error)
      });
  }

  useEffect(() => {
    setJobs(listAllJobs)
  }, [])
  

  return (
    <div className="container-fluid d-flex column justify-content-center align-items-center" style={{ background: `url('https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-dark.png')`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
      <div className="container text-center px-0 mb-5" style={{ backgroundColor: "white", borderRadius: "7px", marginTop: "100px" }} >
        <Banner text="Jobs" />
        {user ? <div className="container my-4">
          <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-center align-items-center"><h4>Welcome&nbsp;</h4><h4 style={{color:"#1e90cf"}}>{user.displayName}</h4></div>
          <button className="btn btn-sm btn-primary" onClick={signOut}>Sign out</button>
          </div>
        </div> : <div className="container my-4">
          <h1 className="p-2">Want to post a Job?</h1>
          <button className="btn btn-primary" onClick={GoogleSignIn}>Sign in with Google</button>
        </div>}
      </div>
      
    </div>
  )
}
