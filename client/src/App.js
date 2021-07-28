// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />

        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>

        <Footer />
      </header>
    </div>
  );
}

export default App;
