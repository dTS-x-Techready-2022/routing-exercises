import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ProfileDetailPage = () => {
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${params.profileID}`)
      .then(({ data }) => setData(data))
      // .then(({ data }) => console.log('data', data))
      .catch((err) => console.log(err));
  }, [params.profileID]);

  return (
    <div>
      <h1>Profile Detail Page</h1>
      <p>
        Hello i'm <strong>{data.name}</strong> this is my id{" "}
        <strong>{data.id}</strong>
      </p>
      <Link to="/about">About</Link>
      <br />
      <Link to="/profile">Profile</Link>
      <br />
      <Link to="/">Home</Link>
      <br />
      <Link to="/albums">Albums</Link>
    </div>
  );
}

export default ProfileDetailPage;
