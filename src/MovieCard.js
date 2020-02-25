import React, { Component } from 'react'
import './App.css';

export default class MovieCard extends Component {
  render() {
    return (
      <div className ="movie-card">
        <h1>{this.props.movie.name}</h1>
        <p>Type: {this.props.movie.type}</p>
        <p>HP: {this.props.movie.year}</p>
        <img src= {this.props.movie.img} alt="url" />
        <p>Year: {this.props.movie.year}</p>  
        <p>Rating: {this.props.movie.rating}</p>  
        <p>Is Fresh: {this.props.movie.fresh}</p>      
      </div>
    );
  }
}