
  
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
    
