import React from 'react'
import '../styles/styles.css'
import Footer from './Footer'
import Header from './Header'
import Contact from './Contact'
import NavagationBar from '../components/NavigationBar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


const App = (props) => {

  return (
    <>
    <NavagationBar/>
    <div className="App Container">
      <Router>
      <Switch>
      <Route exact path="/" component={Header}/>
      <Route path="/contact" component={Contact}/>
      </Switch>
      </Router>
      <Footer />
      </div>
      </>
  );
}

export default App;