import React from 'react'
import {Switch,Route, BrowserRouter} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Documents from './components/Documents'
import About from './components/About'
import Projects from './components/Projects'
import MenuButton from './MenuButton'
import Sidebar from './Sidebar'
import LoginPage from './components/LoginPage'

function App() {
  return (
    <>
      <MenuButton/>
      <Sidebar/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/login" component={LoginPage}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/documents" component={Documents}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
