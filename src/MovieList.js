import React, { Component } from 'react';
import request from 'superagent';
import { Link } from 'react-router-dom'
import MovieCard from './MovieCard.js';

export default class MovieList extends Component {

    state = { 
      movieArray: [] 
    };
    
    async componentDidMount() {
      const jsonData = await request.get('https://damp-falls-48537.herokuapp.com/data');
      this.setState({movieArray: jsonData.body})
    }

      render(){
        const mappedMovies = this.state.movieArray.map((object, index)  => <Link to={`movieArray/${object.movie}`}>
        <MovieCard movie={object} key={index} />
      </Link>)
      

      return (
          <main>
            <ul>
              {mappedMovies}
            </ul>
          </main>
    );
  };
};