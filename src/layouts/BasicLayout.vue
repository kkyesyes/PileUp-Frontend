<script setup lang="ts">

  import {ref} from "vue";
  import User from "../pages/User.vue";
  import Search from "../pages/Search.vue";
  import Index from "../pages/Index.vue";

  const onClickLeft = () => history.back();
  const onClickRight = () => alert('搜索');
  const active = ref('index');
  const onChange = (cur: string) => {return cur};
</script>

<template>
  <van-nav-bar class="van-nav-bar"
      title="title"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>

  <slot name="content">
    <template v-if="active === 'index'">
      <Index />
    </template>
    <template v-if="active === 'search'">
      <Search />
    </template>
    <template v-if="active === 'user'">
      <User />
    </template>
  </slot>

  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item icon="home-o" name="index">首页</van-tabbar-item>
    <van-tabbar-item icon="search" name="search">搜索</van-tabbar-item>
    <van-tabbar-item icon="friends-o" name="user">我</van-tabbar-item>
  </van-tabbar>
</template>

<style scoped>
  .van-nav-bar {
    left: 0;
    top: 0;
    position: fixed;
    width: 100%;
  }
</style>