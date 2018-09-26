import React from "react";
import api from "../services/api";
import { connect } from "react-redux";

class historiesList extends React.Component {

    constructor(props) {
        super(props);
        props.loadHistories();
    }
    render() {
        return (
            <div>
                <h1>HistoriesList</h1>
                {this.props.histories.map(item => <div key={item.name}>{item.name}</div>)}
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