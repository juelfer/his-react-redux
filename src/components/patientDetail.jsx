import React from "react";
import api from "../services/api";
import { connect } from "react-redux";

class patientDetail extends React.Component {
    constructor(props) {
        super(props);
        props.loadPatient(this.props.match.params.uid.toString());
        }
    
    goBack = () => {this.props.history.goBack();}

    render() {
        const canSee = api.canSeeHistory(this.props.auth.role);
        return ((this.props.match.params.uid.toString() === this.props.auth.uid || canSee) ? (
            <div>
                <h1>Datos del paciente</h1>
                <div>
                   Nombre: {this.props.patient.name}<br />
                   ID: {this.props.patient.uid}
                </div>
                <button id="goback" onClick={this.goBack}>Atrás</button>
            </div> ) :
            (<div>Este usuario no tiene acceso a los datos de este paciente                     <button id="goback" onClick={this.goBack}>Atrás</button>
            <button id="goback" onClick={this.goBack}>Atrás</button>
            </div>)
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