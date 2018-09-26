import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";

import Dashboard from "./dashboard";
import Login from "./login.jsx";
import NotFound from "./notFound";
import PatientsList from "./components/patientsList.jsx";
import store from './store';
import CreateUser from './components/createUser.jsx';
import HistoriesList from './components/historiesList.jsx';

class App extends Component {
  render() {
    return  (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
              <Switch>
                <Route path="/" component={Dashboard} exact />
                <Route path="/login" component={Login} exact />
                <Route path="/patientsList" component={PatientsList} exact/>
                <Route path="/createUser" component={CreateUser} exact/>
                <Route path="/historiesList" component={HistoriesList} exact/>                
                <Redirect path="/entrar" to="/login" />
                <Route component={NotFound} />
              </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
