import React, { Component } from 'react';
import request from 'superagent';
import MovieCard from './MovieCard.js';
import CreateMovie from './CreateMovie.js';

export default class MovieList extends Component {

    state = { 
      movieArray: [] 
    };
    
    async componentDidMount() {
      const jsonData = await request.get('https://damp-falls-48537.herokuapp.com/data');
      this.setState({movieArray: jsonData.body})
    }

     render(){
      const JSONmovies = this.state.movieArray;
      console.log({JSONmovies});
      const mappedMovies = JSONmovies.map((object, index) => {
        return <MovieCard movieCard={object} key={index} />
      })

      return (
        <main>
        <div>
          <CreateMovie />
        </div>
        <div className="movies-box">
            <ul>
              
              {mappedMovies}
            </ul>
            </div>
          </main>
    );
  };
};