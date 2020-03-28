<template>
  <div id="index">
    <div class="view" ref="view">
      <div>
        <div class="finished">
          <h3 class="title">完成事项</h3>

          <ul class="ul">
            <li v-for="(item,i) in fs" :key="i">
              <div class="text">
                <p>{{item.text}}</p>
              </div>
              <div class="btn-position">
                <div class="btn">
                  <mt-button size="small" @click="delufsone(item)" type="danger">删除</mt-button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="unfinished">
          <h3 class="title">待办事项</h3>

          <ul class="ul">
            <li v-for="(item,i) in ufs" :key="i">
              <div class="text">
                <p>{{item.text}}</p>
              </div>
              <div class="btn-position">
                <div class="btn">
                  <mt-button size="small" @click="finish(item)" type="primary">完成</mt-button>
                  <mt-button size="small" @click="delfsone(item)" type="danger">删除</mt-button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "index",
  props: ["fs", "ufs"],
  data() {
    return {};
  },
  created() {
    this.$nextTick(() => {
      this.initScroll();
    });
  },
  methods: {
    initScroll() {
      this.scroll = new BScroll(this.$refs.view, {
        click: true
      });
    },
    finish(val){
        this.$emit('finish',val)
    },
    delfsone(val){
        this.$emit('delfsone',val)
    },
    delufsone(val){
        this.$emit('delufsone',val)
    }
  }
};
</script>

<style scoped>
#index {
  margin-top: 20px;
}
.view {
  width: 100%;
  height: 420px;
  overflow: hidden;
}
.title {
  color: rgb(82, 80, 80);
}
.finished {
  width: 100%;
}
.unfinished {
  width: 100%;
  margin-top: 10px;
}
.ul {
  list-style: none;
  width: 80%;
  margin:0 auto;
}
.ul li {
  position: relative;
  width: 100%;
  height: 180px;
  margin-top: 10px;
  background-color: rgb(253, 251, 244);
  border: 1px solid rgb(195, 196, 192);
  border-radius: 10px;
}
.text {
  width: 100%;
  height: 150px;
  box-sizing: border-box;
  padding: 10px 5px;
  margin: 0 auto;
}
.btn-position {
  position: absolute;
  top: 130px;
  right: 10px;
}
.btn {
  display: flex;
  width: 120px;
  justify-content: space-around;
  align-items: center;
  height: 35px;
}
</style>