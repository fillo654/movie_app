import * as React from 'react';
import Header from "./components/Header.js";
import BottomNav from './components/BottomNav.js';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Trending from './pages/Trending';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from '@mui/material';
import ScrollToTop from "../src/components/ScrollToTop";




function App() {
  
  // const [movie, setMovie] = useState(movie)

  // useEffect(() => {
  //   fetch('https://api.themoviedb.org/3/movie/550?api_key=51d8bc30ec5bd8e301f98fc65efc32e4')
  //     .then(res => res.json())
  //     .then(movie => setMovie(movie))
  // });
 
  return (

    <BrowserRouter>
      <Header />

      <Container>


        <Switch>
          <Route path="/" component={Trending} exact />
          <Route path="/movies" component={Movies} />
          <Route path="/series" component={Series} />
        </Switch>
      </Container>
      <ScrollToTop />

      <BottomNav />


    </BrowserRouter>
  );
}

export default App;
