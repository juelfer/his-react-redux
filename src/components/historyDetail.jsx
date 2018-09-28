import React from "react";
import api from "../services/api";
import { connect } from "react-redux";

class historyDetail extends React.Component{
    constructor(props){
        super(props);
        props.loadHistory(this.props.match.params.uid.toString());
        }
    
    render() {
        const doctor = api.getDoctor(this.props.history.doctorid);
        const patient = api.getPatient(this.props.history.uid);
        const canSee = api.canSeeHistory(this.props.auth.role);
        return (this.props.history.history ? (
            (this.props.match.params.uid.toString() === this.props.auth.uid || canSee) ? (
            <div>
                <h1>Historial de {patient.name}</h1>
                <div>
                    Le atendió el doctor {doctor.name}<br/>
                    <p>Historial: </p>
                    {this.props.history.history.map(
                        item => <div key={item}>{item}</div>)}<br/>
                </div>
            </div>
        ) : (<div>Usuario no autorizado</div>)) : (<div>Historial no encontrado</div>));
    }
}

const HistoryDetail = connect(
    state => ({
        auth: state.auth,
        history: state.history
    }),
    dispatch => ({
        loadHistory: (uid) => {
            let history = api.getHistory(uid);
            dispatch({
                type:'LOAD_HISTORY',
                payload: history
            })
        }
    })
)(historyDetail);

export default HistoryDetail