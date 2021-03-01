import API from '../common/API'
import APP_CONFIG from '../common/Const'

export const login = (params)  => {
    return API.sendRequest(APP_CONFIG.API.login, params, {method: 'POST'});
}

export const register = (params) => {
    return API.sendRequest(APP_CONFIG.API.register, params, {method: 'POST'});
}

export const getAllUser = () => {
    return API.sendRequest(APP_CONFIG.API.getAllUser, {}, {method: 'GET'});
}

export const getUser = (userId) => {
    const url = `${APP_CONFIG.API.getAllUser}/${userId}`;
    return API.sendRequest(url)
}

export const deleteUser = (userId) => {
    const url = `${APP_CONFIG.API.getAllUser}/${userId}`;
    return API.sendRequest(url, {}, {method: 'DELETE'})
}

export const updateUser = (userId, userData) => {
    const url = `${APP_CONFIG.API.getAllUser}/${userId}`;
    return API.sendRequest(url, userData, {method: 'PUT'})
}