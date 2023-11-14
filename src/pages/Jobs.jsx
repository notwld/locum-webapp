import { useState, createRef } from "react";
import Banner from "../components/Banner";
import { app } from "../firebase/config";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { listAllJobs, addJob } from "../hooks/useJob";

const auth = getAuth(app);

export default function Jobs() {
  const [user] = useAuthState(auth);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fileInputRef = createRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    location: "",
    timing: "",
    jobCategory: "",
    file: null,
    selfDescription: "",
  });

  const signOut = () => {
    return auth.currentUser && auth.signOut();
  }

  const GoogleSignIn = () => {
    setLoading(true);

    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      }).finally(() => {
        setLoading(false);
      });
  }

  const handleSubmit = async () => {


    const fileInput = fileInputRef.current;

    if (fileInput && fileInput.files.length > 0) {
      const file = fileInput.files[0];

      const job = {
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
        location: formData.location,
        timing: formData.timing,
        jobCategory: formData.jobCategory,
        selfDescription: formData.selfDescription,
      };
      setLoading(true);
      await addJob(job, file).then((res) => {
        //rest form data
        setFormData({
          name: "",
          email: "",
          contact: "",
          location: "",
          timing: "",
          jobCategory: "",
          file: null,
          selfDescription: "",
        });
      });
      listAllJobs().then(res => setJobs(res))
      setLoading(false);
    } else {
      console.error("No file selected!");
    }
  }
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      file: file,
    });
  };

  useEffect(() => {
    listAllJobs().then(res => setJobs(res))
  }, []);

  return (

    <div className="container-fluid d-flex column justify-content-center align-items-center" style={{ background: `url('https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-dark.png')`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>

      <div className="container text-center px-0 mb-5" style={{ backgroundColor: "white", borderRadius: "7px", marginTop: "100px" }} >
        <Banner text="Jobs" />
        {loading && (
          <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-border text-primary" role="status">
            </div>
          </div>
        )}
        {user ? (
          <div className="container my-4">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-center align-items-center"><h4>Welcome&nbsp;</h4><h4 style={{ color: "#1e90cf" }}>{user.displayName}</h4></div>
              <div>
                <button type="button" className="btn btn-sm btn-primary mx-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Post a Job</button>
                <button className="btn btn-sm btn-danger" onClick={signOut}>Sign out</button>

              </div>
            </div>
          </div>
        ) : (
          <div className="container my-4">
            <h1 className="p-2">Want to post a Job?</h1>
            <button className="btn btn-primary" onClick={GoogleSignIn}>Sign in with Google</button>
          </div>
        )}
        {jobs.length > 0 ? (
          <div className="container my-4" >
            <div className="row">
              {jobs.map((job) => (
                <div className="col" key={job.id}>
                  <div className="card h-100">
                    <Banner text={job.jobCategory} />
                    <div className="card-body">
                      <h5 className="card-title">{job.name}</h5>
                      <p className="card-text">Email: {job.email}</p>
                      <p className="card-text">Contact: {job.contact}</p>
                      <p className="card-text">Location: {job.location}</p>
                      <p className="card-text">Timing: {job.timing}</p>
                      <p className="card-text">Self Description: {job.selfDescription}</p>
                      <a href={job.fileUrl} target="_blank" rel="noreferrer" className="btn btn-dark btn-lg">View CV</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="container my-4">
            <h1 className="p-2">No Jobs Posted Yet!</h1>
          </div>
        )}
      </div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Enter Details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="container-xxl">
                  <div className="row">
                    <div className="col">
                      <div className="my-2">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter Name"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="my-2">
                        <input
                          type="text"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter Email"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="my-2">
                        <input
                          type="text"
                          name="contact"
                          value={formData.contact}
                          onChange={handleInputChange}
                          placeholder="Enter Contact"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="my-2">
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          placeholder="Enter Location"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="my-2">
                        <input
                          type="text"
                          name="timing"
                          value={formData.timing}
                          onChange={handleInputChange}
                          placeholder="Enter Timings"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="my-2">
                        <input
                          type="text"
                          name="jobCategory"
                          value={formData.jobCategory}
                          onChange={handleInputChange}
                          placeholder="Enter Job Type"
                          className="form-control"
                        />
                      </div>
                      <div className="my-2">
                        <label htmlFor="formFileSm" className="form-label">
                          Upload CV
                        </label>
                        <input
                          type="file"
                          name="file"
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="my-2">
                        <textarea
                          name="selfDescription"
                          value={formData.selfDescription}
                          onChange={handleInputChange}
                          placeholder="Enter Self Description"
                          className="form-control"
                          rows={4}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </form>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSubmit}>Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
