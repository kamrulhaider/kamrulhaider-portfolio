import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';
import Details from './pages/Details/Details';
import Home from './pages/Home/Home/Home';
import Projects from './pages/Home/Projects/Projects';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/projects">
          <Projects></Projects>
        </Route>
        <Route exact path="/details/:projectId">
          <Details></Details>
        </Route>
        <Route exact path="/blogs">
          <Blogs></Blogs>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
