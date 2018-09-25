import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { patients: state.patients };
};
const ConnectedList = ({patients}) => (
    <ul className ="patientsList">
        {patients.map(patient => (
            <li>{patient.name}</li>
        ))}
    </ul> 
);

  const Patients = connect(mapStateToProps)(ConnectedList);
  export default Patients;