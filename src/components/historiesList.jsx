import React from "react";
import api from "../services/api";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class historiesList extends React.Component {

    constructor(props) {
        super(props);
        props.loadHistories();
    }
    render() {
        return (
            <div>
                <h1>HistoriesList</h1>
                {this.props.histories.map(item => <Link key={item.uid} to={`/historyDetail/${item.uid}`}><div key={item.uid}>{item.uid}</div></Link>)}
            </div>
//{this.props.patients.map(item => <Link key={item.uid} to={`/patientDetail/${item.uid}`}><div key={item.uid}>{item.name}</div></Link>)}
        );
    }
}

const HistoriesList = connect(
    state => ({
        auth: state.auth,
        histories: state.histories
    }),
    dispatch => ({
        loadHistories: () => {
            let histories = api.getHistories();
            dispatch({type:'LOAD_HISTORIES', histories: histories})
        }
    })
)(historiesList);

export default HistoriesList;