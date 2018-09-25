import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./dashboard";
import Login from "./login.jsx";
import NotFound from "./notFound";
import Patients from "./components/patientsList.jsx";
import { Provider } from "react-redux";
import store from './store';
class App extends Component {
  render() {
    return  (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
              <Switch>
                <Route path="/" component={Dashboard} exact />
                <Route path="/login" component={Login} exact />
                <Route path="/patients" component={Patients} exact/>
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
