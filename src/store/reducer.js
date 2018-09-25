import api from "../services/api";

const initialState = {
    auth: null,
    histories: [],
    patients: []
}

function reducer( state = initialState, action ) {
    switch ( action.type ) {
    case 'USER_LOGGED_IN':
        {
            let _state = {
                ...state,
                auth: action.payload
            };

            return _state;
        }
    case 'USER_LOGGED_OUT':
        {
            let _state = {
                ...state,
                auth: null
            };

            return _state;
        }

    case 'LOAD_PATIENTS':
        {
            let _state = {
                ...state,
                patients: action.payload
            };
            return _state;
        }

    default:
        return state;
    }

}

export default reducer;