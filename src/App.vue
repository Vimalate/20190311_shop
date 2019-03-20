<template>
 <div class="container" id='app'>
   <router-view></router-view>
   <FooterGuid v-if="$route.meta.showFooterGuild"></FooterGuid>
 </div>
</template>

<script>
//引入底部导航
import FooterGuid from './components/FooterGuid/FooterGuid.vue'
import {mapActions} from 'vuex'
// import {reqFoodCategory} from './api'
export default {
 data() {
  return {

  }
 },
 
  mounted() {
    this.getAddress()
    this.getUserInfo()
    // const result=await reqFoodCategory()
    // console.log(result)
 },
 methods: {
   ...mapActions(['getAddress', 'getUserInfo'])
 },
 components: {
   FooterGuid
 }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
    position relative
</style>
