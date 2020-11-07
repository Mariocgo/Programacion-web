import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Ej201 from './ej201.js';
import Ej202 from './ej202.js';
import Home from './Home.js';

export default function App(){
  return (
    <Router>
      {/* Link al estilo de hiperligas */}
      <div>
        <nav>
          <ul>
            <li> <Link to="/"> Home </Link> </li>
            <li> <Link to="ej201"> ej201 desc </Link> </li>
            <li> <Link to="ej202"> ej202 desc </Link> </li>
          </ul>
        </nav>
      </div>
      {/* Buscar la ruta que concuerda con la URL */}
      <Switch>
        <Route path="/ej201">
          <Ej201/>
        </Route>

        <Route path="/ej202">
          <Ej202/>
        </Route>

        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}
