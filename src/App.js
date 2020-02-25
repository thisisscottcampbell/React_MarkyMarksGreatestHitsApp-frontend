import React from 'react';
import { 
  Route, 
  Switch,
  Link,
  BrowserRouter as Router, 
} from 'react-router-dom';
import MovieList from './MovieList.js';
import MovieDetail from './MovieDetail.js';
import Header from './shared/Header.js';
import CreateMovie from './CreateMovie.js';


function App() {
  return (
    <div className="App">
          <main>
      <Router>
        <Header />
        <Link classname="navi" to="/">Home</Link>
        <Link classname="navi" to="/CreateMovie/New">CreateMovie</Link>
      
          <Switch>
            <Route exact path="/" component={MovieList} />
            <Route exact path="/movieArray/:movieId" component={MovieDetail} />
            <Route exact path="/:CreateMovie/New" component={CreateMovie} />
          </Switch>
      </Router>
      </main>    
    </div>
      
      
  );
}

export default App;