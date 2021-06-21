<template>

    <div class='box'>
        <div class='dataTable'>
            <div class='header'>
                <p>
                    Super fun DataTable Demo for My favorite Database HBase :D
                </p>
            </div>
            <div class='body'>
                <input v-model="message" placeholder="edit me">
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
                            v-for="i in data"
                            :key="i.key"
                        >
                            <td>{{ i.key }}</td>
                            <td>{{ i.value }}</td>
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
    name: 'table',
    data() {
        return {
            data: []
        }
    },
    mounted() {
        this.refresh()
    },
    methods: {
        refresh() {
            this.data = api.test()
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

    width: 100%;
}

.footer {
    width: 100%;

    text-align: right;

    font-size: 0.8rem;

    padding: 10px;

    color: #000000C0;
}

</style>