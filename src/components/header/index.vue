<template>
  <el-header class="header">Header </el-header>
</template>

<script>

export default {
  name: 'Header',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: $sidenav-width;
  right: 0;
  text-align: center;
  background: white;
  height: $header-height;
  box-sizing: border-box;
  box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.05);
}
</style>
