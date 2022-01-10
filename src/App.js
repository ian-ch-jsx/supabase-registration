import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';
import { getUser, logout } from './services/users';
import Auth from './views/Auth/Auth';
import './App.css';
import UserPage from './components/Auth/UserPage';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };
  return (
    <>
      <div className="header">
        <h1>to-do list</h1>
      </div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {currentUser && (
              <div className="main-user">
                <UserPage />
                <button onClick={logoutUser}>Log Out</button>
              </div>
            )}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
