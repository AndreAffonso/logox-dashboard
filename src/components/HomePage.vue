<template>
  <el-container>
  <sidebar />
  <el-container>
    <main-header/>
    <main-content/>
  </el-container>
</el-container>
</template>

<script>

import SideBar from '@/components/sidebar'
import Header from '@/components/header'
import Content from '@/components/content'

export default {
  name: 'HomePage',
  components: {
    'sidebar': SideBar,
    'main-header': Header,
    'main-content': Content
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
