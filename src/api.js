import axios from 'axios'
import 'regenerator-runtime/runtime'

axios.defaults.baseURL = '/api'

export default {
    async test() {
        console.log('good')
    },
    async hello() {
        var res = await axios.get('/users/test')
        console.log(res.data)
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
    }
}