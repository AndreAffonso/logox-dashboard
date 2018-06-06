<template>
  <el-main class="main">
    <div class="wrapper">
    <h1 class="section-title title">{{section}}</h1>
    </div>
  </el-main>
</template>

<script>

export default {
  name: 'PainelDoCliente',
  data () {
    return {
      section: 'Painel do cliente'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.section-title {
  margin-top: 50px;
}
</style>
