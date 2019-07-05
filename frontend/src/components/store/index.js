import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state : {
        id : '',
        userId : '',
        userName : '',
        password : '',
        email : ''
    },
    mutations : {

    },
    getters : {

    },
    actions : {
    }
})