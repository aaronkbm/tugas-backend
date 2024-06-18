import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [title, setTitle] = useState("");
  const [datetime, setDateTime] = useState("");
  const [note, setNote] = useState("");
  const navigate = useNavigate();


  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/notes", {
        title,
        datetime,
        note,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Date Time</label>
            <div className="control">
              
              <input
                type="text"
                className="input"
                value={datetime}
                onChange={(e) => setDateTime(e.target.value)}
                placeholder="Date Time"
              />
                
              
            </div>
          </div>
          <div className="field">
            <label className="label">Note</label>
            <div className="control">
              
              <input
                type="text"
                className="input"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Note"
              />
              
                  
             
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
