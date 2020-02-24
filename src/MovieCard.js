import React, { Component } from 'react'
import './App.css';

export default class MovieCard extends Component {
  render() {
    return (
      <div className ="movie-card">
        <h1>{this.props.name}</h1>
        <p>Type: {this.props.type}</p>
        <p>HP: {this.props.year}</p>
        <img src= {this.props.img} alt="url" />
        <p>Year: {this.props.year}</p>  
        <p>Rating: {this.props.rating}</p>  
        <p>Is Fresh: {this.props.fresh}</p>      
      </div>
    );
  }
}