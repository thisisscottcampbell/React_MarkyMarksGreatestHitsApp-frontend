import React, { Component } from 'react';
import { GetMovies } from './getMovies';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
// import request from 'superagent';


export default class MovieList extends Component {
  state = {
    movieArray: [],
  }
  async componentDidMount() {
    const jsonData = await GetMovies();
    console.log(jsonData);
    this.setState({
      movieArray: jsonData.body
    })
  }
  handleChange = (e) => this.setState({
    searchQuery: e.target.value
  })
  render() {
    console.log(this.state.movieArray)
    const mappedMovies = this.state.movieArray.map((object, index) =>
     <Link to = {`movieArray/${object.id}`}>
      <MovieCard movie = {object} key = {index}/> </Link>)

      return ( 
        <main>
        <ul> 
          {mappedMovies}
        </ul> 
        </main>
    );
  };
};
































