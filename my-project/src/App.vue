
import ComputeDec from './components/ComputeDec.vue';

<template>
    <div id="app">
        <h2>x的值为：{{$store.state.x}}</h2>
        <hr>
        <ComputeInc></ComputeInc>
        <hr>
        <ComputeDec></ComputeDec>
    </div>
</template>

<script>
import ComputeInc from './components/ComputeInc.vue';
import ComputeDec from './components/ComputeDec.vue';
import store from './store';

 export default {
    name:'App',
    components:{
        ComputeDec,
        ComputeInc
    },
    store
 }
</script>