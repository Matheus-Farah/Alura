import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Post from "./pages/Post";
import Pagina404 from "./pages/Pagina404";

import Cabecalho from "./components/Cabecalho";

import "./assets/css/base/base.css";

function App() {
  return (
    <Router>
      <Cabecalho />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/posts/:id" component={Post} />
        <Route component={Pagina404} />
      </Switch>
    </Router>
  );
}

export default App;
