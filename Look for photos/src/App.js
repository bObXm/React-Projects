import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";
const clientID = `?client_id=${process.env.REACT_APP_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(0);
  const [query, setQuerry] = useState("");

  const fetchImages = async () => {
    //url se schimba in functie daca vrei default img sau search img
    let url;
    //pt infinit scroll doar mai adaugi cate o pagina la array-ul de photos-223
    const urlPage = "&page=" + page;
    const urlQuerry = "&query=" + query;
    if (query) {
      url = searchUrl + clientID + urlPage + urlQuerry;
      console.log(url);
    } else {
      url = mainUrl + clientID + urlPage;
    }

    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();

      setPhotos((prevPhotos) => {
        if (query && page === 1) {
          return data.results;
        } else if (query) {
          // cand faci query search primesti datele diferit si trebe manipulate diferit
          return [...prevPhotos, ...data.results];
        } else {
          return [...prevPhotos, ...data];
        }
      });

      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  //fetch data
  useEffect(() => {
    fetchImages();
  }, [page]);

  //sroll event
  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        (!loading && window.innerHeight + window.scrollY) >=
        document.body.scrollHeight
      ) {
        setPage((prevState) => prevState + 1);
      }
    });
    return () => window.removeEventListener("scroll", event);
  }, []);

  function handelSubmit(e) {
    e.preventDefault();
    setPage(1);
    fetchImages();
  }

  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input
            type="text"
            placeholder="search"
            className="form-input"
            value={query}
            onChange={(e) => {
              setQuerry(e.target.value);
            }}
          ></input>
          <button type="submit" className="submit-btn" onClick={handelSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photos.map((photo) => {
            return <Photo key={photo.id} {...photo} />;
          })}
        </div>
        {loading && <h2 className="loading">loading...</h2>}
      </section>
    </main>
  );
}

export default App;
