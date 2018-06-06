<template>
  <header class="header card">
    <button class="naked-button">
      <img src="../../assets/img/icon_search.png" alt="botão de pesquisa">
    </button>
    <span class="search"> Buscar</span>
    <p class="my-profile"> <span class="divider"/>
    Meu perfil
    <button class="naked-button align">
      <img src="../../assets/img/noun_1256649_cc.png" alt="editar perfil">
    </button>
    <button class="naked-button align">
      <img class="user-icon " src="../../assets/img/noun_1695617_cc_2.png" alt="editar perfil">
    </button>
    <button class="naked-button badge align" data-badge="4">
      <img src="../../assets/img/noun_867355_cc.png" alt="editar perfil">
    </button>
    </p>
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
  padding: 0 32px;
  position: fixed;
  top: 0;
  left: $sidenav-width;
  right: 0;
  height: $header-height;
  line-height: $header-height;
  z-index: 5;

  box-sizing: border-box;
  .search {
    color: $blue;
    font-size: 20px;
    margin-left: 20px;
  }

  .my-profile {
    float: right;
    color: $black;
    font-size: 15px;
    height: 28px;
    line-height: 70px;

    .align {
      vertical-align: middle;
    }

    .divider {
      font-size: 28px;
      content: '';
      border-left: 1.2px solid $light-blue-grey;
      margin-right: 32px;
    }
    .notification-badge {
      margin-top: 20px;
      margin-right: 0px;
    }
  }
}
</style>
