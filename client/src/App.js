// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import UserInput from './Components/UserInput/UserInput';
import ItemsList from './Components/ItemsList/ItemsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/add/item' component={UserInput} />
          <Route path='/show/all/items' component={ItemsList} />
        </Switch>

        <Footer />
      </header>
    </div>
  );
}

export default App;
