import axios from 'axios'
import 'regenerator-runtime/runtime'

axios.defaults.baseURL = '/api'

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
        var res = await axios.get('/users/user/1')
        return res.data
    },
    async getUsersList(page) {
        var res = await axios.get(`/users/filter?page=${page}`)
        return res.data
    },
    async getGoodsList(page) {
        var res = await axios.get(`/goods/filter?page=${page}`)
        return res.data
    },
    async login(name, password) {
        return axios.get(`/auth/login?name=${name}&passwd=${password}`)
    }
}