<template>
  <header class="header">
    <span class="search">i Buscar</span>
    <span class="my-profile"> <span class="divider"/> Meu perfil i i i</span>
    </header>
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
  font-family: 'Roboto', sans-serif;
  padding: 0 35px;
  position: fixed;
  top: 0;
  left: $sidenav-width;
  right: 0;
  background: white;
  height: $header-height;
  line-height: $header-height;

  box-sizing: border-box;
  .search {
    color: $blue;
    font-size: 20px;
  }

  .my-profile {
    float: right;
    color: $black;
    font-size: 15px;
    height: 28px;

    .divider {
      font-size: 28px;
      content: '';
      border-left: 1.2px solid $light-blue-grey;
      margin-right: 30px;
    }
  }
}
</style>
