import Actions from '../actions/ActionName'

const initState = {}

export default function(state = initState, action) {

    switch(action.type) {
        case Actions.SET_USER:
            return {
                user: action.user
            }
        case Actions.REMOVE_USER:
            return initState
        default:
            return state
    }
}