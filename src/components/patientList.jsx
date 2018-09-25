import React from "react";
import api from "../services/api";
import { connect } from "react-redux";

class patientlist extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            <h1> Lista de pacientes </h1>
            <ul className ="patientsList">
                {/*{patients.map(patient => (
                    <li>{patient.name}</li>
                ))}*/}
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
export default patientlist;