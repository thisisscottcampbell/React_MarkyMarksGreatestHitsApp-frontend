import React, { Component } from 'react'
import MovieCard from './MovieCard.js'
import request from 'superagent';
import './App.css';

export default class Detail extends Component {
  state = { movies: {} }

  componentDidMount = async() => {
    const movieInfo= await request.get(`https://damp-falls-48537.herokuapp.com/data/?movies=${this.props.match.params.name}`);
    

    if (movieInfo.body) {
      this.setState({movies: movieInfo.body[0]})
    }
    console.log('YOOOOOOOOOOOOI', movieInfo.body);
  }  
    render () {
      console.log(this.state);
      const { movies } = this.state;
      console.log(movies);
    return (
      <>
        {movies.name && <MovieCard movie={ movies } />}
      </>
    )
  }
};