import React, {useEffect,useState} from 'react';
const searchurl= "https://api.themoviedb.org/3/search/movie?api_key=e903c2d6fbe35ef772a66181d36c52ef&query=";
const imageurl="https://image.tmdb.org/t/p/w1280"; 

function Result (props) {
  const [movies,setMovies] = useState([]);
  const textvalue = (props.location && props.location.state) || {};
  const [noVal,setnoVal]=useState();
  const combine = `${searchurl} ${textvalue}`;

  useEffect(()=>{

    fetch(combine)
    .then((res)=>res.json())
    .then((data) => {
      if(!data.results.length){
        setnoVal(true);
      }
       console.log(data.results)
       setMovies(data.results);
    });    
  });

   return(
     <div>
      <h1>Search Results for movie "{textvalue}"</h1>
      <a href="Home">
        <div class="round-box close-icon">
        <img src="assets/images/icons/close-icon.png" alt=""/>
        </div>
    </a>
      {noVal ? 
          <span className="result" >No movies found</span> 
          :
          null
      }
      <br></br>
    <div className="movie-container">
    
      {movies.length > 0 && movies.map((movie) => (
        <div className="movie">
        <img src={imageurl + movie.poster_path} alt={movie.title}/>
      <div className="movie-info">
          <h3>{movie.title}</h3>
          <span className="vote_count">{movie.vote_average}</span>
      </div>
      <div className="movie-overview">
          <h2>Overview:</h2>
          <p>{movie.overview}</p>
      </div>
    </div>
      ))}    
    </div>
    </div>
  )
}


export default Result;