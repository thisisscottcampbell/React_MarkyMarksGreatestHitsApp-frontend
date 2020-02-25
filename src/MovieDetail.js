import React, { Component } from 'react';
import MovieCard from './MovieCard.js';
import request from 'superagent';
import './App.css';

export default class MovieDetail extends Component {
  state = { movies: [] }

  componentDidMount = async() => {
    const movieInfo= await request.get(`https://damp-falls-48537.herokuapp.com/data/${this.props.match.params.movieId}`);
  

    if (movieInfo.body) {
      this.setState({movies: movieInfo.body[0]})
    }
   
  }  
    render () {
      console.log(this.props.match.params.id)
  
      const { movies } = this.state;
 
    return (
      <>
        {movies.id && <MovieCard movie={ movies } />}
      </>
    )
  }
};