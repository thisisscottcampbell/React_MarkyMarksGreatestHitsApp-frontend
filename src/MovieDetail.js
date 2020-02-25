  
import React, { Component } from 'react'
import { getMovie } from './getMovies'
import MovieCard from './MovieCard'
import request from 'superagent';



export default class MovieDetail extends Component {
  state = { movie: {} }
  
  async componentDidMount() {
    const movieInfo = await getMovie(this.props.match.params.movieId);
    
    if (movieInfo.body) { this.setState({ movie: movieInfo.body[0] }) }
    
    console.log(this.state.movie);
  }
  
  handleDelete = async () => {
    await request.delete(`https://damp-falls-48537.herokuapp.com/data/${this.props.match.params.movieId}`);
    // await request.delete(`https://damp-falls-48537.herokuapp.com/data/${movieId}`);
    this.props.history.push('/');
  }

render () {

  return (
    <>
      {<MovieCard movie={ this.state.movie } />}
    
      <button onClick={ this.handleDelete } 
                style={{ background: 'red', marginTop: 50}}>DELETE</button>
                </>
    
  )
}}
    
    
    
    
    
    
    

    
    
    
//     render() {

//         return (
//             <>
//             { this.state.movie && 
//             <div>
            
//             <h1 className="movie-name">{this.state.movie.name}</h1>
//             <h3 className="movie-name">Type: {this.state.movie.type}</h3>
//             <img className="movie-images" src={this.state.movie.img} alt={this.state.movie.name} />
            
          
//             </div>
//             }
//             </>
//         );
//     }
// }






//origninal
// export default class MovieDetail extends Component {
//     state = { movies: [] }
  
  //   componentDidMount = async() => {
  //     const movieInfo= await request.get(`https://damp-falls-48537.herokuapp.com/movieInfo/${this.props.match.params.movieId}`);
  // if (movieInfo.body) {this.setState({movies: movieInfo.body[0]}) }
   // needed get movies function 

// async componentDidMount() {
//     const movieInfo = await getMovies(this.props.match.params.movieId);
    
//     if (movieInfo.body) { this.setState({ movie: movieInfo.body[0] }) }

//     console.log(this.state.movie);
// }
// render () {
    
//     const { movies } = this.state;

//   return (
//     <>
//       {movies.id && <MovieCard movie={ movies } />}
//     </>
//   )
// }}

    

   
  