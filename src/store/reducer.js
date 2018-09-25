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

    case 'DOCTOR_LOGGED_IN':
        {
            let _state = {
                histories: action.payload,
                patients: action.payload,
                auth: action.payload
            };

            return _state;
        }

    default:
        return state;
    }

}

export default reducer;