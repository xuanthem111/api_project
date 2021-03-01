import Actions from '../actions/ActionName'

const initState = []

export default function(state = initState, action) {
    
    switch(action.type) {
        case Actions.REMOVE_A_FOOD:
            return [... state.filter(food => food.id != action?.food.id)]
        case Actions.REMOVE_FOODS:
            return [...state.filter(food => food.id != action?.food.id)]
        case Actions.ADD_NEW_FOOD:
            return [...state, action?.food]
        default:
            return state
    }
}