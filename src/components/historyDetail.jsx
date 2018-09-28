import React from "react";
import api from "../services/api";
import { connect } from "react-redux";

class historyDetail extends React.Component{
    constructor(props){
        super(props);
        props.loadHistory(this.props.match.params.uid.toString());
        //props.loadDoctor(this.props.history.doctorid.toString());
        }
    
    render() {
        const doctor = api.getDoctor(this.props.history.doctorid);
        const canSee = api.canSeeHistory(this.props.auth.role);
        return (this.props.history.history ? (
            (this.props.match.params.uid.toString() === this.props.auth.uid || canSee) ? (
            <div>
                <h1>Historial del paciente</h1>
                <div>
                    ID: {this.props.history.uid} <br/>
                    Doctor: {doctor.name}<br/>
                    Historial: <br/>
                    {this.props.history.history}<br/>
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