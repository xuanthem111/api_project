

const URL = 'http://localhost:3600'
const endpoint = {
    login: `${URL}/api/users/login`,
    register: `${URL}/api/users/register`,
    getAllUser: `${URL}/api/users`,

}

export default {
    API: endpoint,
    URL: URL
}