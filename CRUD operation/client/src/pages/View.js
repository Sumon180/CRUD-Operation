import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./View.css";

function View() {
  const [user, setUser] = useState({});

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5088/update/${id}`)
      .then((res) => res.data)
      .then((res) => {
        setUser({
          name: res.name,
          email: res.email,
          contact: res.contact,
        });
      });
  }, [id]);
  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>User Contact Details</p>
        </div>
        <div className="container">
          <strong>ID: </strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>Name: </strong>
          <span>{user.name}</span>
          <br />
          <br />
          <strong>Email: </strong>
          <span>{user.email}</span>
          <br />
          <br />
          <strong>Phone: </strong>
          <span>{user.contact}</span>
          <br />
          <br />
          <Link to="/">
            <div className="btn btn-edit">Go Back</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default View;
