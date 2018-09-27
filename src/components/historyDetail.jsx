import React from "react";
import api from "../services/api";
import { connect } from "react-redux";

class historyDetail extends React.Component{
    constructor(props){
        super(props);
        props.loadHistory();
    }
    
    render() {
        return (
            <div>
                {console.log("id:"+this.props.match.params.uid)}
                <h1>Historial del paciente</h1>
                <div>
                    {this.props.userHistories.map(item => 
                        <div key={item.uid}>
                            {item.uid}
                            {item.doctorid}
                            {item.histories}
                            )}                            
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

const HistoryDetail = connect(
    state => ({
        auth: state.auth,
        histories: state.histories
    }),
    dispatch => ({
        loadHistory: () => {
            let history = api.getHistory();
            dispatch({type:'LOAD_HISTORY', histories: history})
        }
    })
)(historyDetail);

export default HistoryDetail