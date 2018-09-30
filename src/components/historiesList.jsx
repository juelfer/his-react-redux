import React from "react";
import api from "../services/api";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../navbar";
import "./historiesList.css";

class historiesList extends React.Component {

    constructor(props) {
        super(props);
        props.loadHistories();
    }

    //goBack = () => {this.props.history.goBack();}

    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div className="historiesList">
                    {this.props.histories.map(item => <Link key={item.uid} to={`/historyDetail/${item.uid}`}><div key={item.uid}>{api.getPatient(item.uid).name}</div></Link>)}
                </div>
                {/*<button id="goback" onClick={this.goBack}>Atrás</button>*/}
            </div>
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