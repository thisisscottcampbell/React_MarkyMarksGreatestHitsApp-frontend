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























  //edited
  // export default class MovieList extends Component {
  //     state = {
  //             movieArray: [],
  //     }
  //     async componentDidMount() {
  //         const jsonData = await GetMovies();
  //         this.setState({ movies: jsonData.body })
  //     }
  //     handleChange = (e) => this.setState({ searchQuery: e.target.value })
  //     render() {
  //         return (
  //             <div>
  //                 <ul>
  //                     {
  //                         this.state.movies.map(movie =>
  //                             <Link to={`data/${movie.id}`} key={movie.id}>
  //                                 <MovieDetail jsonData={movie} />
  //                             </Link>)
  //                     }
  //                 </ul>
  //             </div>
  //         )
  //     }
  // }


  // ORignial

  // import React, { Component } from 'react';
  // import request from 'superagent';
  // import { Link } from 'react-router-dom';
  // import MovieCard from './MovieCard.js';
  // //import MovieDetail from './MovieDetail.js';

  // export default class MovieList extends Component {

  //     state = { 
  //       movieArray: [] 
  //     };

  //     async componentDidMount() {
  //       const jsonjsonData = await request.get('https://damp-falls-48537.herokuapp.com/jsonData');
  //       this.setState({movieArray: jsonjsonData.body})
  //     }

  //       render(){
  //         console.log(this.state.movieArray)
  //         const mappedMovies = this.state.movieArray.map((object, index)  => <Link to={`movieArray/${object.id}`}>
  //         <MovieCard movie={object} key={index} />
  //       </Link>)


  //       return (
  //           <main>
  //             <ul>
  //               {mappedMovies}
  //             </ul>
  //           </main>
  //     );
  //   };
  // };