import React from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import "./dashboard.css";
import Navbar from "./navbar";

class dashboard extends React.Component {
  logout = () => {
    this.props.logoutStore();
  };
  render() {
    if (!this.props.auth) {
      return <Redirect to="/login" />;
    } else {
      const { role, uid } = this.props.auth;

      const links = [
        {
          to: "/patientsList",
          text: "Patients list",
          roles: ["admin", "doctor"]
        },
        {
          to: "/historiesList",
          text: "Histories list",
          roles: ["admin", "doctor"]
        },
        {
          to: "/createUser",
          text: "Create User",
          roles: ["admin", "technical"]
        },
        {
          to: "/patientDetail/"+ uid,
          text: "Patient detail",
          roles: ["admin", "patient"]
        },
        {
          to: "/historyDetail/" + uid,
          text: "History detail",
          roles: ["admin", "patient"]
        }
      ];

      return (
        
        <section className="dashboard">
        <Navbar></Navbar>
        {/* <button onClick={this.logout}>Logout</button> */}

         {/*  <h1> Dashboard</h1>

          <button onClick={this.logout}>Logout</button>
         
          <h4>
            {this.props.auth ? role + " " + name + " is logged in." : "no user is logged in"}
          </h4>
 */}
         { 
           links.map(
             item => (
              item.roles.includes(role) 
              && 
              <Link key={item.text} to={item.to}>{item.text}</Link>
             )
           )
         }
        </section>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutStore: () =>
      dispatch({
        type: "USER_LOGGED_OUT"
      })
  };
};

const Dashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(dashboard);
export default Dashboard;
