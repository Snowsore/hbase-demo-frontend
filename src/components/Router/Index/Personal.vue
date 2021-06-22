<template>

    <div class='box'>
        
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
    
</template>

<script>
import api from '@/api.js'

export default {
    name: 'Index',
    data() {
        return {
            data: [],
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            this.refresh()
        },
        async refresh() {
            var data = await api.getPersonal()
            var arr = []
            for([key, value] of Object.entries(data[0])) arr.push({key, value})
            this.data = arr
        }
    }
    
}
</script>