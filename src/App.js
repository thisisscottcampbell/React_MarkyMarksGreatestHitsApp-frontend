import React from 'react';
import { 
  Route, 
  Switch,
  //Link,
  BrowserRouter as Router, 
} from 'react-router-dom';
import MovieList from './MovieList.js';
import MovieDetail from './MovieDetail.js';


function App() {
  return (
    <div className="App">
      <header>
        `Marky's Best!`
      </header>
      <Router>
        <main>
          <Switch>
            <Route exact path="/" component={MovieList} />
            <Route exact path="/movieArray/:movieId" component={MovieDetail} />
          </Switch>
        </main>    
      </Router>
    </div>
  );
}

export default App;
