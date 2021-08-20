// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';


import Header from './Components/Header/Header';
import Notification from './Components/Notification/Notification';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import UserInput from './Components/UserInput/UserInput';
import ItemsList from './Components/ItemsList/ItemsList';
import SelectedItem from './Components/SelectedItem/SelectedItem';

// import expiryItemNotification from './Logic/Notification/notification.js';

function App() {

  const [isLog, setIsLog] = useState('');

  const username = localStorage.getItem('username');

  console.log('Initial state from APP: ' + isLog);


  return (
    <div className="App">
      <header className="App-header">
        <Header username={username} setIsLog={setIsLog} />
        <Notification />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/user/login' render={props => (<Login {...props} setIsLog={setIsLog} />)} />
          <Route path='/user/register' component={Register} />
          <Route path='/add/item' component={UserInput} />
          <Route path='/show/all/items' component={ItemsList} />
          <Route path='/find/item/:id' component={SelectedItem} />
        </Switch>

        <Footer />
      </header>
    </div>
  );

}



export default App;
