import React, { Component } from 'react';
import Recommend from './components/recommend'
import {HashRouter as Router,Route} from 'react-router-dom'
import page from './components/page'
import Song from './components/Song' 
// import Result from './components/Result'

class Home extends Component{
   render(){
     return(
      <Router>
      <Route  exact path="/" component={Recommend}/>
      <Route  path="/page" component={page}/>
      <Route  path="/Song" component={Song}/>
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
