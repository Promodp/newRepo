import { USERS, USERS_SUCCESS,  USERS_FAILURE } from '../actions/constants';

export const userslistReducer = ( curState = 

    
    {   page:'',users: [], isLoading: false, error: null }, action ) => {
        console.log('promod reducer',action.payload);
        
    let newState;
    switch( action.type ) {
        case USERS:
            newState = { ...curState, error: null, isLoading: USERS,page:action.payload.page };
            break;
        case USERS_SUCCESS:
            newState = { ...curState, isLoading: USERS_SUCCESS, users: action.payload.users };
            break;
        case USERS_FAILURE:
            newState = { ...curState, isLoading: USERS_FAILURE, users: [], error: action.payload.error };
            break;
        default:
            newState = curState;
    }
    return newState;
}