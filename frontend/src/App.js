import React from 'react'
import {Switch,Route, BrowserRouter} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Documents from './components/Documents'
import About from './components/About'
import Projects from './components/Projects'
import MenuButton from './MenuButton'
import Sidebar from './Sidebar'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import auth from './hoc/auth'

function App() {
  return (
    <>
      <MenuButton/>
      <Sidebar/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component= {auth(LandingPage,null)}   />
          <Route exact path="/register" component={auth(RegisterPage, false)  }/>
          <Route exact path="/login" component={auth(LoginPage,false)}/>
          <Route exact path="/about" component={auth(About,null)}/>
          <Route exact path="/projects" component={auth(Projects,null)}/>
          <Route exact path="/documents" component={auth(Documents,null)}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
