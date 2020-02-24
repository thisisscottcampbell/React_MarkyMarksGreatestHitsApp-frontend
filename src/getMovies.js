import request from "superagent";

export const getMovies = (movies) => request.get(`https://damp-falls-48537.herokuapp.com/data${movies}`)