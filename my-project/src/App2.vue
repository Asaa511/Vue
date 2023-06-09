<!-- <template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Logo</a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/index">首页</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/course">课程</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/user">用户</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <hr>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
import routes from './routes/index';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

Vue.use(VueRouter);
const router = new VueRouter({
  routes
});

export default {
  name:'App',
  router
};
</script>

<style>

</style> -->



<template>
  <div id="app">
    <button @click="getData()">请求数据</button>
    <button @click="sendData()">发送数据</button>
  </div>
</template>

<script>
  import Vue from "vue"
  import axios from "axios"
  import Vueaxios from "vue-axios"
  Vue.use(Vueaxios,axios)
  export default{
    name:'App',
    components:{

    },
    methods:{
      getData(){
        axios.get("http://10.0.83.100:3000/").then(res=>console.log(res.data))
      },
      sendData(){
        axios.post("http://10.0.83.100:3000/addStu",{name:'ssd',age:21}).then(res=>console.log(res.data))
      }
    }
  }
</script>
