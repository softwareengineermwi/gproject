import React from 'react';
import { HashRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import logo from './img/planet.png'
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';
import './App.css';
import Styles from './components/header.module.scss';

function App() {
  return (
    <Router>
      <header className="border-bottom">
        <div className="container">
          <div className="grid items-center">
            <div className="col-6 flex items-center gap-xs">
              <img src={logo} alt="Yellow Planet" style={{ width: '50px', height: '50px' }} />
              <h1 className={Styles.title}>Space Travelers&apos; Hub</h1>
            </div>

            <div className="col-6 flex justify-end">
              <div className="flex gap-sm">
                <NavLink to="/" activeClassName={Styles.activeLink} exact>
                  Rockets
                </NavLink>
                <NavLink to="/missions" activeClassName={Styles.activeLink} exact>
                  Missions
                </NavLink>
                <NavLink to="/myprofile" activeClassName={Styles.activeLink} exact>
                  My profile
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Switch>
        <Route path="/" exact>
          <Rockets />
        </Route>
        <Route path="/missions">
          <Missions />
        </Route>
        <Route path="/myprofile">
          <MyProfile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
