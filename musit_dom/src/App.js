import React, { Component } from 'react';
import Recommend from './components/recommend'
import {HashRouter as Router,Route} from 'react-router-dom'
import page from './components/page'
import Song from './components/Song' 
import result from './components/Result'


class Home extends Component{ 
   render(){
     return(
      <Router>
      <Route  exact path="/" component={Recommend}/>
      <Route  path="/page/:id" component={page}/>
      <Route  path="/Song/:id" component={Song}/>
      <Route  path="/result/:id" component={result}/>
    </Router>
     )
   }
}

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
