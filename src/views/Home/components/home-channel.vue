<template>
    <van-tabs v-model:active="active">
        <van-tab :title="item.text" v-for="(item, index) in list" :key="index"></van-tab>
    </van-tabs>
</template>
<script setup lang="ts">

import axios from 'axios'
import {ref} from 'vue'

interface INavItem {
    id: string
    text: string
}

const active = ref(0)
const list = ref(<INavItem[]>[])


axios({
    url:'/navList',
    method: 'get'
}).then(res=>{
    list.value = res.data.result
})

</script>