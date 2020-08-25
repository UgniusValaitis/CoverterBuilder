import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Converter from './components/converter/Converter';
import Api from "./components/api/Api";
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/Api" exact component={Api} />
        <Route path="/" component={Converter} />
      </Switch>
    </div>
  );
}

export default App;
