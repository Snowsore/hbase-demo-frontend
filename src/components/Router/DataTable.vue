<template>

    <div class='box'>
        <div class='dataTable'>
            <div class='header'>
                <p>
                    User Table
                </p>
            </div>
            <div class='body'>
                <input v-model="query" @change='refresh' placeholder="Page number ?">
                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                        <tr>
                            <th class="text-left">
                                序号
                            </th>
                            <th class="text-left">
                                唯一标识符
                            </th>
                            <th class="text-left">
                                性别
                            </th>
                            <th class="text-left">
                                邮件
                            </th>
                            <th class="text-left">
                                姓名
                            </th>
                            <th class="text-left">
                                订单
                            </th>
                            <th class="text-left">
                                记录
                            </th>
                            <th class="text-left">
                                详细
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr
                            v-for="i in data"
                            :key="i.id"
                        >
                            <td>{{ i.index }}</td>
                            <td>{{ i.id }}</td>
                            <td>{{ i.gender }}</td>
                            <td>{{ i.email }}</td>
                            <td>{{ i.username }}</td>
                            <td>
                                <div>
                                    <b-button @click='order(i.id)'>订单</b-button>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <b-button @click='log(i.id)'>记录</b-button>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <b-button @click='pop(i.id)'>详细</b-button>
                                </div>

                                <b-modal :id='i.id' title="User info">
                                    <v-simple-table>
                                        <template v-slot:default>
                                            <thead>
                                            <tr>
                                                <th class="text-left">
                                                    Key
                                                </th>
                                                <th class="text-left">
                                                    Value
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr
                                                v-for="i in user"
                                                :key="i.id"
                                            >
                                                <td>{{ i.key }}</td>
                                                <td>{{ i.value }}</td>
                                            </tr>
                                            </tbody>
                                        </template>
                                    </v-simple-table>
                                </b-modal>
                            </td>
                        </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </div>
            <div class='footer'>
                <p>
                    All data come from JinXiao's server If something wrong IDK what happend.<br>
                    My Page is perfect.<br>
                    If you need HELP, please send an to snowsore@null.comeon
                </p>
            </div>
        </div>
    </div>
    
</template>

<script>
import api from '@/api'

export default {
    name: 'datatable',
    data() {
        return {
            message: '',
            data: [],
            query: 'page=1',
            id: '',
            user: []
        }
    },
    mounted() {
        this.refresh()
    },
    methods: {
        async refresh() {
            this.data = await api.getUsersList(this.query)
        },
        async pop(id) {
            var data = await api.getUsers(id)
            data = Object.entries(data[0]).map(x => ({
                key: x[0],
                value: x[1]
            }))
            this.user = data
            this.$bvModal.show(id)
        },
        async order(id) {
            var data = await api.getOrders(id)
            data = Object.entries(data[0]).map(x => ({
                key: x[0],
                value: x[1]
            }))
            this.user = data
            this.$bvModal.show(id)
        },
        async log(id) {
            var data = await api.getLogs(id)
            data = Object.entries(data[0]).map(x => ({
                key: x[0],
                value: x[1]
            }))
            this.user = data
            this.$bvModal.show(id)
        }
    }
}
</script>

<style scoped>

.box {

    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    
    justify-content: space-evenly;
    justify-items: center;
    align-content: space-evenly;
    align-items: center;

    padding: 20px;
    
}

.dataTable {
    
    display: flex;
    flex-direction: column;
    align-content: space-evenly;
    align-items: center;

    width: 100%;
    height: 100%;

    box-shadow: 3px 3px 10px #00000050;

    border: 10px solid #2d74bb;
    border-radius: 20px;
    border-style: outset;
    
    background-color: #FFFFFFC0;

}

.header {
    width: 100%;

    font-size: 2rem;

    padding: 10px;
    
    color: #000000C0;
}

.body {
    width: 100%;

    padding: 30px;
}

.body input {
    border: 1px solid black;

    width: 90%;

    padding: 10px;
    margin: 10px;

    background-color: white;
}

.footer {
    width: 100%;

    text-align: right;

    font-size: 0.8rem;

    padding: 10px;

    color: #000000C0;
}

</style>