import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <div>Hello World</div>
          </Route>
        </Switch>
      </BrowserRouter>,
    </div>
  );
}

export default App;
