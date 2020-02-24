import React, { Component } from 'react'
import './App.css';

export default class MovieCard extends Component {
  render() {
    return (
      <div className ="movie-card">
        <h1>{this.props.movieCard.name}</h1>
        <p>Type: {this.props.movieCard.type}</p>
        <p>HP: {this.props.movieCard.year}</p>
        <img src= {this.props.movieCard.img} alt="url" />
        <p>Year: {this.props.movieCard.year}</p>  
        <p>Rating: {this.props.movieCard.rating}</p>  
        <p>Is Fresh: {this.props.movieCard.fresh}</p>      
      </div>
    );
  }
}