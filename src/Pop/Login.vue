<template>

    <div v-if='show' class='box'>

        <v-row class='card' justify="center">
            <v-col
            cols="12"
            >
            <v-card ref="form">
                <v-card-text>
                <v-text-field
                    ref="Username"
                    v-model="name"
                    :rules="[() => !!name || 'This field is required']"
                    label="User Name"
                    required
                ></v-text-field>
                <v-text-field
                    ref="Password"
                    v-model="password"
                    type="password"
                    label="Password"
                    required
                ></v-text-field>
                </v-card-text>
                <v-divider class="mt-12"></v-divider>
                <v-card-actions>
                <v-btn
                    color="primary"
                    text
                    @click="submit"
                >
                    Submit
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn text @click='show = false'>
                    Cancel
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-col>
        </v-row>
    </div>

</template>


    </div>
    
</template>

<script>
import api from '@/api.js'

export default {
    name: 'test',
    data() {
        return {
            name: '',
            password: '',
            show: false,
        }
    },
    methods: {
        pop() {
            this.show = true;
        },
        async submit() {
            api.login(this.name, this.password).then(res => {
                this.show = false;
                this.name = '';
                this.password = '';
            }).catch(() => {
                alert('Login in failed D:')
            })
        }
    }
    
}
</script>

<style scoped>

.box {
    position: absolute;

    display: grid;
    align-items: center;
    justify-content: center;

    background-color: #00000050;

    width: 100%;
    height: 100%;
}

.card {
    width: 400px;
    height: 500px;


    display: grid;
    grid-template-rows: 50px 1fr 40px;

    padding: 10px;
}

.header {
    font-size: 1.5rem;
}

.body {
    padding: 30px;
}

.footer {
}

</style>