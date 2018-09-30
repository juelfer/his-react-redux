import React from "react";
import api from "../services/api";
import { connect } from "react-redux";
//import history from "./../navhistory";
import Navbar from "../navbar";
import { Redirect } from "react-router-dom";
import "./patientDetail.css";


class patientDetail extends React.Component {
    constructor(props) {
        super(props);
        props.loadPatient(this.props.match.params.uid.toString());
        }

    //goBack = () => {history.goBack()};

  /*   render() {
        const canSee = api.canSeeHistory(this.props.auth.role);
        return (this.props.patient !== undefined) ? 
            (this.props.match.params.uid.toString() === this.props.auth.uid || canSee) ? (
            <div>
                <Navbar></Navbar>
                <h1>Datos del paciente</h1>
                <div>
                   Nombre: {this.props.patient.name}<br />
                   ID: {this.props.patient.uid}
                </div>
            </div> ) :
            (<div>Este usuario no tiene acceso a los datos de este paciente
            {/*<button id="goback" onClick={this.goBack}>Atrás</button>}
            </div>
        ): (<div><Navbar></Navbar>Paciente no encontrado</div>);
    }*/

    render() {
        if (!this.props.auth) return <Redirect to="/login" />;
        const canSee = api.canSee(this.props.auth.role);
        return (this.props.match.params.uid.toString() === this.props.auth.uid || canSee) ? (
            ( this.props.patient ) ? (
            <div>
                <Navbar></Navbar>
                <div className="patientDetail">
                   Nombre: {this.props.patient.name}<br />
                   ID: {this.props.patient.uid}
                </div>
            </div>
        ) : (
            <div> 
                <Navbar></Navbar>
                <div className="patientDetail">
                    <p>No hay datos sobre este paciente</p>
                </div>
            </div>)
        ) : (
            <div>
                <Navbar></Navbar>
                <div className="patientDetail">
                    <p>Usuario no autorizado</p>
                </div>
            </div>
        );
    }
}

const PatientDetail = connect(
    state => ({
        auth: state.auth,
        patient: state.patient
    }),
    dispatch => ({
        loadPatient: (uid) => {
            let patient = api.getPatient(uid);
            dispatch({
                type:'LOAD_PATIENT',
                payload: patient
            })
        }
    })
)(patientDetail);

export default PatientDetail