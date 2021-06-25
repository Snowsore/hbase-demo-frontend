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
    async getOrderGroup() {
        var res = await axios.get('/orders/group')
        return res.data
    },
    async getUsers(id) {
        var res = await axios.get(`/users/user/${id}`)
        return res.data
    },
    async getOrders(id) {
        var res = await axios.get(`/orders/order/${id}`)
        return res.data
    },
    async getLogs(id) {
        var res = await axios.get(`/logs/log/${id}`)
        return res.data
    },
    async getGoods(id) {
        var res = await axios.get(`/goods/good/${id}`)
        return res.data
    },
    async getUsersList(query) {
        var res = await axios.get(`/users/filter?${query}`)
        return res.data
    },
    async getGoodsList(query) {
        var res = await axios.get(`/goods/filter?${query}`)
        return res.data
    },
    async login(name, password) {
        return axios.get(`/auth/login?name=${name}&passwd=${password}`)
    },
    async aaaaaaaaaaaaaaaaaaaa() {

    }
}