import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Ej201 from './ej201.js';
import Ej202 from './ej202.js';
import Ej203 from './ej203';
import Ej204 from './ej204.js';
import Ej205 from './ej205.js';
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
            <li> <Link to="ej203"> ej203 desc </Link> </li>
            <li> <Link to="ej204"> ej204 desc </Link> </li>     
            <li> <Link to="ej205"> ej205 Multiplicar </Link> </li>        
            </ul>
        </nav>
      </div>
      {/* Buscar la ruta que concuerda con la URL */}
      <Switch>
      <Route path="/ej205">
        <Ej205/>
      </Route>  

      <Route path="/ej204">
          <Ej204/>
        </Route>  

        <Route path="/ej203">
        <Ej203/>
      </Route>  
      
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
