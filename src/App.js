import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Auth from './views/Auth/Auth';
import './App.css';

function App() {
  return (
    <>
      <div className="header">
        <h1>to-do list</h1>
      </div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Auth />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
