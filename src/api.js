import axios from 'axios'
import 'regenerator-runtime/runtime'

axios.defaults.baseURL = 'http://api.test.com:8080'

export default {
    async test() {
        console.log('good')
    },
    async hello() {
        var res = await axios.get('/users')
        console.log(' - ', res.data)
    },
    async getGender() {
        var res = await axios.get('/users/gender')
        return res.data
    },
    async getGroup() {
        var res = await axios.get('/users/group')
        return res.data
    },
    async getPersonal() {
        var res = await axios.get('/users/personal/1')
        return res.data
    },
    async getDataTable() {
        var res = await axios.get('/user/data')
        return res.data
    },
    async login(name, password) {
        return axios.get(`/auth/login?name=${name}&passwd=${password}`)
    }
}