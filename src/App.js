import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css"

// function App() {
//   return (
//     <div className="App">
//       {foodILIke.map(renderFood)}
//     </div>
//   );
// }

class App extends React.Component{

  state = {
    isLoading: true,
    movies:[]
  };

  getMovies = async() =>{
    const {data: {data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies : movies, isLoading:false});
  }
  
  componentDidMount(){
    this.getMovies();
  }

  render(){
    const {isLoading, movies} = this.state;
    return (
    <section className = "container">
      {isLoading ? (
        <div className="loader">
          <span className="loader_text"> "Loading..."</span> </div>
          ):(
        <div className="movies">
          {movies.map(movie => (
            <Movie
            key={movie.id} id={movie.id} rating={movie.rating} year={movie.year} 
            title={movie.title} genres={movie.genres} 
            summary={movie.summary} poster={movie.medium_cover_image} 
          />
          ))}
          </div>
          )}
    </section>
    );
  }
}


// Food.propTypes ={
//   name: PropTypes.string.isRequired,
//   rating: PropTypes.number
// };



// function Food({name,rating}){
//   return <h1>I Like {name} and it's rating is {rating} .</h1>;
// }

// function renderFood(dish){
//   return (<Food key={dish.id} name={dish.name} rating={dish.rating} />);
// }

// const foodILIke = [
//   {
//     id:1,
//     name:"bibimbap",
//     rating:4
//   },
//   {
//     id:2,
//     name:"dontkatsu",
//     rating:5
//   }
// ];




export default App;
