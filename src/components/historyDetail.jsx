import React from "react";
import api from "../services/api";
import { connect } from "react-redux";

class historyDetail extends React.Component{
    constructor(props){
        super(props);
        props.loadHistory(this.props.match.params.uid.toString());
        }
    
    render() {
        return (
            <div>
                {console.log("id:"+this.props.match.params.uid)}
                <h1>Historial del paciente</h1>
                <div>
                   ID: {this.props.history.uid} <br/>
                   Doctor: {this.props.history.doctorid}<br/>
                   Historial: <br/>
                   {this.props.history.history}
                </div>
            </div>
        );
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