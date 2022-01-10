import { NavLink, Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Auth from './views/Auth/Auth';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="header">
          <h1>to-do list</h1>
          <NavLink to="/signin">sign in</NavLink>
          <NavLink to="/signup">sign up</NavLink>
        </div>
        <Switch>
          <Route path="/signin" component={Auth} />
          <Route path="/signup" component={Auth} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
