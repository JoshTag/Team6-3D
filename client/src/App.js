import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageOne from './Pages/PageOne/PageOne'
import PageTwo from './Pages/PageTwo/PageTwo'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PageOne /> 
        <PageTwo /> 
      </Switch>
    </BrowserRouter>
  );
}

export default App;
