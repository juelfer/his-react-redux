import React from "react";
import api from "./services/api";
import {connect} from "react-redux";
import history from "./../src/navhistory";

class navbar extends React.Component {
  constructor(props) {
    super(props);
    props.loadUser(this.props.auth.uid);
  }

  goBack = () => {history.goBack();}

  render(){
    //const loggedUser = api.getLoggedUser(this.props.auth.uid);
    

    return <div>
      <div className="loggedUserNameDisplay">{this.props.auth.name}</div>
      <div className="goBackButton"><button id="goback" onClick={this.goBack}>Atrás</button></div>
    </div>
  }

  
}
const Navbar = connect(
  state => ({
      auth: state.auth,
      //user: state.user
  }),
  dispatch => ({
      loadUser: (uid) => {
          let auth = api.getUser(uid);
          dispatch({
              type: 'USER_LOGGED_IN',
              payload: auth
          })
      }
  })
)(navbar);

export default Navbar



/*const Hola = props => (
 <div>
   <h3>{props.edad}</h3>
   {
     props.nombres.map(item => (
       <h1>hola {item}</h1>
     ))
   }
 </div>
)

class Navbar extends React.Component {
  constructor(p) {
    super(p);
    this.state = { edad: 26, names: ["juan",'manolo'] };
  }
  handleClick = () =>  {
    // this.setState({ edad: this.state.edad + 1 })
    this.setState((prevState) => ({ edad: prevState.edad + 1 }));
    
  };
  cambiaNombre = () => this.setState({ names: [...this.state.names, 'pepe']});
  render() {
    return <div>
        <button onClick={this.handleClick}>cumple años</button>
        <button onClick={this.cambiaNombre}>me llamo pepe</button>
        <Hola nombres={this.state.names} edad={this.state.edad} >
          asdas
        </Hola>
      </div>;
  }
}*/
