import React, { useEffect, useState } from 'react';
import axios from './axios'

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  // A snippet of code which runs based on a specific condition

  useEffect(() => {
     // if [], which means => run once when the row loads, and don't run it again.
     async function fetchData() {
       const request = await axios.get(fetchUrl); //"https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213", 
       console.log(request.data.results);
       setMovies(request.data.results)
       return request;       
     }
     fetchData();
  }, []);

  return (

    <div>

      {/* title */}
      <h2> {title} </h2>

      {/* container -> posters */}      

    </div>
  );
}

export default Row;
