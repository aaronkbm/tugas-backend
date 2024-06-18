import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [title, setTitle] = useState("");
  const [datetime, setDateTime] = useState("");
  const [note, setNote] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/notes/${id}`, {
        title,
        datetime,
        note,
        
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/notes/${id}`);
    setTitle(response.data.title);
    setDateTime(response.data.datetime);
    setNote(response.data.note);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateUser}>

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
              <div className="select is-fullwidth">
                <input
                type="text"
                className="input"
                  value={datetime}
                  onChange={(e) => setDateTime(e.target.value)}
                  placeholder="Date Time"
                  />
              </div>
            </div>
            
          </div>
          <div className="field">
            <label className="label">Note</label>
            <div className="control">
              <div className="select is-fullwidth">
                <input
                type="text"
                className="input"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Note"
                  />
              </div>
            </div>
            
          </div>
          
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
