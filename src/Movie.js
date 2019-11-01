import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"

function Movie ({id,year,title,summary,poster,rating,genres}){
    return(
<div className="movie">
    <img src ={poster} alt={title} title={title}/>
    <div className= "moive_data">
        <h3 className="movie_title">{title}</h3>
        <ul className="moive_genres">
            {genres.map((genre,index) => 
                <li key={index} className="genre">{genre}</li>)}</ul>
        <h5 className="moive_year">{year}</h5>
        <p className="moive_summary">{summary.slice(0,150)+"..."}</p>
    </div>
</div>
);}

Movie.prototype = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    year : PropTypes.number.isRequired,
    rating : PropTypes.number.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;