import React from "react";
import api from "../services/api";
import { connect } from "react-redux";

class patientsList extends React.Component {
    constructor(props) {
        super(props);
        props.loadPatients();
    }
    render() {
        //let detailroute = "/patientDetail/"
        return (
            <div>
                <h1>PatientsLists</h1>
                    {this.props.patients.map(item => <div key={item.name}>{item.name}</div>)}
                {/*{this.props.patients.map(item => <Link key={item.name} text={item.name} to={detailroute}+{item.uid}>{item.name}</Link>)}*/}
            </div>

        );
    }
}

const PatientsList = connect(
    state => ({
        auth: state.auth,
        patients: state.patients
    }),
    dispatch => ({
        loadPatients: () => {
            let patients = api.getPatients();
            dispatch({
                type:'LOAD_PATIENTS',
                 patients: patients
            })
        }
    })
)(patientsList);

export default PatientsList;