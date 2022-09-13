import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_ENDPOINT } from "./context";

const SingleMovie = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [movie, setMovie] = useState({});

  const fectchData = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === "Frue") {
        setError({ show: true, msg: data.Error });
        setLoading(false);
      } else {
        setMovie(data);
        setLoading(false);
      }

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fectchData(API_ENDPOINT + "&i=" + id);
  }, []);

  if (loading) {
    return <div className="loading"></div>;
  }
  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    );
  }

  const { Plot, Poster, Title, Year } = movie;

  return (
    <section className="single-movie">
      <img src={Poster} alt={Title} />
      <div className="single-movie-info">
      <h2>{Title}</h2>
      <p>{Plot}</p>
      <h4>{Year}</h4>
      <Link to="/" className="btn">
        back to movies
      </Link>
       </div>
      
    </section>
  );
};

export default SingleMovie;
