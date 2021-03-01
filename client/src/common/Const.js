
const URL = 'http://localhost:3000'
const endpoint = {
    login: `${URL}/api/users/login`,
    register: `${URL}/api/users/register`,
    getAllUser: `${URL}/api/users`,

}

export default {
    API: endpoint,
    URL: URL
}