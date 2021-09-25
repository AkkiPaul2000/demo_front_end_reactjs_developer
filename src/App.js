import React from 'react';
import FeedPage from './FeedPage';
import Form from './Form';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Profile from './Profile';
import Settings from './Settings';


function App() {
  return (
<Router>
    <div className="App">
    <Switch>
    <Route path="/login"  component={Form}/>
    <Route path="/" exact component={FeedPage}/> 
    <Route path="/profile" component={Profile}/> 
    <Route path="/settings" component={Settings}/> 
    </Switch>
    </div></Router>
  );
}

export default App;
