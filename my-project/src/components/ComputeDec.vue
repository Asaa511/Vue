<template>
    <div>
        <button @click="dec">减法运算</button>
    </div>
</template>

<script>
import store from '../store/index';
    export default{
        name:"ComputeDec",
        methods:{
            dec(){
                this.$store.commit('jian',10)
            }
        },
        store
    }
</script>
