import Vuex from "vuex"
import Vue from "vue"

Vue.use(Vuex)

const state = {
    x:250
}
const mutations = {
    jia(state,value){
        state.x += value
    },
    jian(state,value){
        state.x -= value
    }
}
const actions = {
    jian_200(context,value){
        if(context.state.x>200){
            context.commit('jian',value)
        }
    }
}
export default new Vuex.Store({
    state,
    mutations,
    actions
})