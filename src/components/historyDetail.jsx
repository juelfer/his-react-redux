import React from "react";
import api from "../services/api";
import { connect } from "react-redux";
//import history from "../navhistory";
import Navbar from "../navbar";

class historyDetail extends React.Component{
    constructor(props){
        super(props);
        props.loadHistory(this.props.match.params.uid.toString());
        }
    
    //goBack = () => {history.goBack();}

    render() {
        let doctor;
        (this.props.historyReport ? doctor = api.getDoctor(this.props.historyReport.doctorid) : doctor ="");
        //const patient = api.getPatient(this.props.historyReport.uid);
        const canSee = api.canSeeHistory(this.props.auth.role);
        return (doctor !== "" || this.props.historyReport ? (
            (this.props.match.params.uid.toString() === this.props.auth.uid || canSee) ? (
            <div>
                <Navbar></Navbar>
                <div>
                    Le atendió el doctor {doctor.name}<br/>
                    <p>Historial: </p>
                    {this.props.historyReport.history.map(
                        item => <div key={item}>{item}</div>)}<br/>
                </div>
                {/*<button id="goback" onClick={this.goBack}>Atrás</button>*/}
            </div>
        ) : (<div><Navbar></Navbar>Usuario no autorizado</div>)) : (<div><Navbar></Navbar>Este paciente no existe o no tiene historial clínico</div>));
    }
}

const HistoryDetail = connect(
    state => ({
        auth: state.auth,
        historyReport: state.historyReport
    }),
    dispatch => ({
        loadHistory: (uid) => {
            let historyReport = api.getHistory(uid);
            dispatch({
                type:'LOAD_HISTORY',
                payload: historyReport
            })
        }
    })
)(historyDetail);

export default HistoryDetail