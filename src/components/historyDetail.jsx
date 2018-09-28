import React from "react";
import api from "../services/api";
import { connect } from "react-redux";

class historyDetail extends React.Component{
    constructor(props){
        super(props);
        props.loadHistory(this.props.match.params.uid.toString());
        }
    
    goBack = () => {this.props.history.goBack();}

    render() {
        const doctor = api.getDoctor(this.props.historyReport.doctorid);
        const patient = api.getPatient(this.props.historyReport.uid);
        const canSee = api.canSeeHistory(this.props.auth.role);
        return (this.props.historyReport.history ? (
            (this.props.match.params.uid.toString() === this.props.auth.uid || canSee) ? (
            <div>
                <h1>Historial de {patient.name}</h1>
                <div>
                    Le atendió el doctor {doctor.name}<br/>
                    <p>Historial: </p>
                    {this.props.historyReport.history.map(
                        item => <div key={item}>{item}</div>)}<br/>
                </div>
                <button id="goback" onClick={this.goBack}>Atrás</button>
            </div>
        ) : (<div>Usuario no autorizado<button id="goback" onClick={this.goBack}>Atrás</button></div>)) : (<div>Historial no encontrado<button id="goback" onClick={this.goBack}>Atrás</button></div>));
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