import request from "superagent";

export const GetMovies = () => request.get(`https://damp-falls-48537.herokuapp.com/data/`);

// original
export const getMovie = (movieId) => request.get(`https://damp-falls-48537.herokuapp.com/data/${movieId}`);

// export const getMovie = (movieId) => request.get(`https://damp-falls-48537.herokuapp.com//data/${this.props.match.params.movieId}`);

// const movieInfo= await request.get(https://damp-falls-48537.herokuapp.com/data/${this.props.match.params.movieId}`);
