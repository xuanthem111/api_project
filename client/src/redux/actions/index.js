import Actions from './ActionName'

export const setAuthUser = (user) => ({type: Actions.SET_USER, user: user});
export const removeAuthUser = () => ({type:  Actions.REMOVE_USER});
export const addNewFood = (food) => ({type: Actions.ADD_NEW_FOOD, food: food});
export const removeFoods = (food) => ({type: Actions.REMOVE_FOODS, food: food});
