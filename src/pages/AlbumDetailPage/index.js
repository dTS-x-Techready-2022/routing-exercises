import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const AlbumDetailPage = () => {

  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/albums/${params.albumID}`)
      .then(({ data }) => setData(data))
      .then(({ data }) => console.log('data', data))
      .catch((err) => console.log(err));
  }, [params.albumID]);

  return (
    <div>
      <h1>this is almbum detail page</h1>
      <p>
        Hello this is my album <strong>{data.name}</strong> with id{" "}
        <strong>{data.id}</strong> and title my album is <strong>{data.title}</strong>
      </p>
      <Link to="/about">About</Link>
      <br />
      <Link to="/profile">Profile</Link>
      <br />
      <Link to="/">Home</Link>
    </div>
  );
}

export default AlbumDetailPage;
