  
import React, { Component } from 'react'
import './moviecard.css'

export default class MovieCard extends Component {
  
  
    
    render() {
    return (
      <div className ="movie-card">
        <h1>{this.props.movie.name}</h1>

        <h2>Type: {this.props.movie.type}</h2>
        <img className="posters" img src= {this.props.movie.img} alt="url" />
        <p>Rating: {this.props.movie.rating}</p>  
        <p>Year Released: {this.props.movie.year}</p>  
        <p>Fresh: {this.props.movie.fresh}</p>      

      </div>
    );
  }
  }