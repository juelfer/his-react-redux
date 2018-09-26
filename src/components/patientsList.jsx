import React from "react";
import api from "../services/api";
import { connect } from "react-redux";

class patientsList extends React.Component {

    constructor(props) {
        super(props);
        props.loadPatients();
    }
    render() {
        return (
            <div>
                <h1>PatientsLists</h1>
                {this.props.patients.map(item => <div>{item.name}</div>)}
            </div>

        );
    }
}

/*class patientsList extends React.Component {
    constructor(props) {
        super(props);
        props.loadPatients();
        
    }
    render() {
        return <div>
            <h1> Lista de pacientes </h1>
            <ul className ="patientsList">
                {/*{patients.map(patient => (
                    <li>{patient.name}</li>
                ))}*/
             /*   {this.props.patients.map(item => <div>{item.name}</div>)}
            
            </ul> 
        </div>
    }

}

/*const PatientList = connect (
    state => ({
        patients: state.patients
    }),
    dispatch => ({
            patients: api.getPatients(),
            type: "LOAD_PATIENT",
            payload: patients
          })
)(patientlist)*/

const PatientsList = connect(
    state => ({
        auth: state.auth,
        patients: state.patients
    }),
    dispatch => ({
        loadPatients: () => {
            let patients = api.getPatients();
            dispatch({type:'LOAD_PATIENTS', patients: patients})
        }
    })
)(patientsList);

export default PatientsList;