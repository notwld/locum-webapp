import { useState } from 'react';
const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const inputStyles = {
    border: "none",
    borderBottom: "1px solid #000",
    borderRadius: "0",
    background: "transparent",
    width: "100%",
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="container-fluid py-5">
      <div className="row">
        <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
          <form onSubmit={handleSubmit} className="form">
            <div className="row mb-4">
              <div className="form-group col-md-4">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" style={inputStyles} id="name" name="name" value={formData.name} onChange={handleChange} />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" style={inputStyles} id="email" name="email" value={formData.email} onChange={handleChange} />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="phone">Phone</label>
                <input type="text" className="form-control" style={inputStyles} id="phone" name="phone" value={formData.phone} onChange={handleChange} />
              </div>
            </div>
            <div className="row mx-2">
              <div className="form-group col-md-12">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" style={inputStyles} id="message" name="message" value={formData.message} onChange={handleChange}
                    rows="4"></textarea>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-12 d-flex justify-content-center mt-5">
                <button type="submit" className="custom-button px-3 py-2" style={{ background:"white"}}>
                    Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
