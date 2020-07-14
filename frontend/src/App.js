import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import Home from './pages/Home';
import NavBar from './components/Navbar';
import ChatRoom from './pages/ChatRoom';
import './App.css';

const history = createHistory();
const App = () => {
  return (
    <div className='App'>
      <Router history={history}>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/chatroom' exact component={ChatRoom} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
