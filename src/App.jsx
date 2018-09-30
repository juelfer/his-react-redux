import React, { Component } from "react";
import "./App.css";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";

import Dashboard from "./dashboard";
import Login from "./login.jsx";
import NotFound from "./notFound";
import PatientsList from "./components/patientsList.jsx";
import store from './store';
import CreateUser from './components/createUser.jsx';
import HistoriesList from './components/historiesList.jsx';
import PatientDetail from "./components/patientDetail";
import HistoryDetail from "./components/historyDetail";

import history from "./navhistory";

class App extends Component {
  render() {
    return  (
      <Provider store={store}>
        <div className="App">
          <Router history = {history}>
              <Switch>
                <Route path="/" component={Dashboard} exact />
                <Route path="/login" component={Login} exact />
                <Route path="/patientsList" component={PatientsList} exact/>
                <Route path="/createUser" component={CreateUser} exact/>
                <Route path="/historiesList" component={HistoriesList} exact/>
                <Route path="/historyDetail/:uid" component={HistoryDetail} exact />  
                <Route path="/patientDetail/:uid" component={PatientDetail} exact />       
                <Redirect path="/entrar" to="/login" />
                <Route component={NotFound} />
              </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
