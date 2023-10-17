<template>
  <div id="app">
    <router-view/>
  </div>
  <van-tabbar v-model="active" route>
    <van-tabbar-item icon="home-o" replace to="/home">首页</van-tabbar-item>
    <van-tabbar-item icon="search" replace to="/menu">菜单</van-tabbar-item>
    <van-tabbar-item icon="setting-o" replace to="/setting">设置</van-tabbar-item>
  </van-tabbar>

</template>

<script>
import {ref} from 'vue';

export default {
  setup() {
    const active = ref(0);
    return {active};
  },
};

</script>

<style scoped lang="scss">

</style>