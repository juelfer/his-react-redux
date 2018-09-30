import React from "react";
import api from "../services/api";
import { connect } from "react-redux";
//import history from "../navhistory";
import Navbar from "../navbar";
import { Redirect } from "react-router-dom";
import "./historyDetail.css";

class historyDetail extends React.Component{
    constructor(props){
        super(props);
        props.loadHistory(this.props.match.params.uid.toString());
        }
    
    //goBack = () => {history.goBack();}

    render() {
        if (!this.props.auth) return <Redirect to="/login" />;
        let doctor;
        (this.props.historyReport ? doctor = api.getDoctor(this.props.historyReport.doctorid) : doctor ="");
        const canSee = api.canSee(this.props.auth.role);
        
        return (this.props.match.params.uid.toString() === this.props.auth.uid || canSee) ? 
        (
            (doctor !== "" || this.props.historyReport) ?
            (
                <div>
                <Navbar></Navbar>
                <div className="historyDetail">
                    <p>Le atendió el doctor {doctor.name}</p>
                    <p>Historial: </p>
                    {this.props.historyReport.history.map(
                        item => <div key={item}><p>{item}</p></div>)}
                </div>
                {/*<button id="goback" onClick={this.goBack}>Atrás</button>*/}
            </div>
        ) : (
            <div>
                <Navbar></Navbar>
                <div className="historyDetail">
                    No se encuentra historial
                </div>
            </div>)
        ) : (
            <div>
               <Navbar></Navbar>
                <div className="historyDetail">
                    Usuario no autorizado
                </div>
            </div>
        );
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