<template>
    <!-- 头部组件 -->
    <AppHeader />
    <!-- 频道组件 -->
    <homeChannel />
    <!-- 轮播图 -->
    <homeSwipe />
    <homeVideoList />
</template>
<script setup lang="ts">
import AppHeader from '@/components/app-header.vue'
import homeChannel from './components/home-channel.vue'
import homeSwipe from './components/home-swipe.vue';
import homeVideoList from './components/home-video-list.vue';
</script>
