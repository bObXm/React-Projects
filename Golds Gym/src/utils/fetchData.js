//am nevoie de asta la fetch pt ca asa ii construit API, min 53 folosit ca sa autorizeze sa faci request pt datorita key-ului personal
export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
    },
  };

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};
