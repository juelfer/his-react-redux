import React from 'react';
import api from '../services/api';
import Navbar from "../navbar";
import "./createUser.css";

class CreateUser extends React.Component {
    constructor(props){ 
        super(props);
        this.state = {
            role: 'patient',
            name: '',
            uid:'',
            username:'',
            password:''
        };

        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(ev) {
        this.setState({
            [ev.target.name]: ev.target.value});
    }

    handleSubmit(ev) {
        ev.preventDefault();
        api.createUser(this.state);
        this.cancelCourse();
    }

    cancelCourse = () => { 
        document.getElementById("newuser").reset();
      }

    goBack = () => {this.props.history.goBack();}

    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div className="userRegistry">
                    <form id="newuser" onSubmit={this.handleSubmit.bind(this)}>
                        <label>Rol: </label>
                    {/*  <input type="text" name="role" placeholder="introduzca rol" value={this.state.newrole} onChange={this.handleChange}></input><br/> */}
                        <select name="role" value={this.state.value} onChange={this.handleChange}>>
                            <option value="patient">Paciente</option>
                            <option value="doctor">Doctor</option>
                            <option value="technical">Técnico</option>
                        </select>
                        <label>      ID: </label>
                        <input type="text" name="uid" placeholder="introduzca id" value={this.state.newid} onChange={this.handleChange}></input><br/>
                        <label>Nombre: </label>
                        <input type="text" name="name" placeholder="introduzca nombre" value={this.state.newname} onChange={this.handleChange}></input><br/>
                        <label>Nombre de usuario: </label>
                        <input type="text" name="username" placeholder="introduzca nombre de usuario" value={this.state.newusername} onChange={this.handleChange}></input><br/>
                        <label>Contraseña: </label>
                        <input type="text" name="password" placeholder="introduzca contraseña" value={this.state.newpass} onChange={this.handleChange}></input><br/>
                        <button type="submit">Registrar</button>
                    </form>   
                {/* <button id="goback" onClick={this.goBack}>Atrás</button> */}
                </div>
            </div>
        )
    }
}

export default CreateUser;