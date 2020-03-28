<template>
  <div id="app">
    <mt-header fixed title="TodoList"></mt-header>
    <div class="content">
      <div class="top">
        <div class="search">
          <mt-search v-model="msg" @keyup.enter.native="add" placeholder="请输入待办项"></mt-search>
        </div>
        <mt-button type="danger" size="large" @click="del" >清空</mt-button>
      </div>
      <div class="view" ref="view">
        <router-view :fs="fs" :ufs="ufs" @delufsone="delufsone" @delfsone="delfsone" @finish="finish"></router-view>
      </div>
    </div>
    <div class="tabbar">
    <mt-tabbar v-model="selected">
      <mt-tab-item id="index">
        <router-link to="/index" tag="div">
          <img src="./assets/images/index.png" width="30px" height="30px" />
          <div>首页</div>
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="finished">
        <router-link to="finished" tag="div">
          <img src="./assets/images/finished.png" width="30px" height="30px" />
          <div>已完成</div>
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="unfinish">
        <router-link to="unfinished" tag="div">
          <img src="./assets/images/unfinished.png" width="30px" height="30px" />
          <div>未完成</div>
        </router-link>
      </mt-tab-item>
    </mt-tabbar>
    </div>
  </div>
</template>

<script>
import { Header } from "mint-ui";
import { Tabbar, TabItem } from "mint-ui";
import { Search } from "mint-ui";
import { Button } from "mint-ui";

export default {
  name: "App",
  data() {
    return {
      selected: "",
      msg: "",
      fs:[],
      ufs:[]
    };
  },
  created(){
      var fsData=localStorage.getItem('fsData')
      this.fs=JSON.parse(fsData)
      if(this.fs === null){
        this.fs=[]
      }
      var ufsData=localStorage.getItem('ufsData')
      this.ufs=JSON.parse(ufsData)
  },
  watch:{
    fs:function(){
      window.localStorage.setItem('fsData',JSON.stringify(this.fs))
    },
    ufs:function(){
      window.localStorage.setItem('ufsData',JSON.stringify(this.ufs))
    }
  },
  methods: {
    add(){
      this.ufs.unshift({text:this.msg,time:null})
      this.msg=null
    },
    del(){
      this.fs=[]
      this.ufs=[]
    },
    finish(val){
      this.ufs.splice(val.i,1)
      this.fs.unshift(val)
    },
    delfsone(val){
      this.ufs.splice(val.i,1)
    },
    delufsone(val){
      this.fs.splice(val.i,1)
    }
  },
  components: {

  }
};
</script>

<style scoped>
#app{
  background-image: url('./assets/images/bg.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.content {
  overflow: hidden;
  margin-top: 10px;
}
.search {
  width: 100%;
  height: 60px;
  margin-top: 40px;
}
.view{
  width: 100%;
  height: 480px;
  margin-top: 10px;
  border-top: 1px solid rgb(100, 97, 97);
}
.tabbar{
  border: 1px solid rgb(204, 199, 199);
}
</style>
