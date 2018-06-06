<template>
  <header class="header card">
    <div class="desktop-header">

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
    </div>
    <div class="mobile-header">
      <div class="img-wrapper"><img class="mobile-header-img" src="../../assets/img/ic_fingerprint_black_24px.png" alt="meus dados">
      <span class="text-header">Dados</span></div>
      <div class="img-wrapper"><img class="mobile-header-img" src="../../assets/img/noun_484247_cc.png" alt="simulação"><span class="text-header">Simulação</span> </div>
      <div class="img-wrapper"><button class="naked-button badge mobile-header-img" data-badge="4">
      <img src="../../assets/img/noun_867355_cc.png" alt="editar perfil">
    </button><span class="text-header">Mensagens</span></div>
    </div>
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
  .desktop-header {
    @include mq('phone-wide') {
      display: none;
    }
  }
  .mobile-header {
    display: none;
    @include mq('phone-wide') {
      display: flex;
      position: fixed;
      height: 64px;
      bottom: 0;
      left: 0;
      width: 100%;
      justify-content: space-between;
      font-size: 10px;
      background: $white;
      color: $bg-grey;
      box-sizing: border-box;
      border-top: 1px solid $light-grey;
      text-align: center;

      .mobile-header-img {
        display: block;
        margin: auto;
        margin-top: 5px;
        margin-bottom: 0;
      }
      .img-wrapper {
        flex-basis: 33.3%;
        border-right: 1px solid $light-grey;
        position: relative;
      }
      .text-header {
        position: absolute;
        top: 20px;
        left: auto;
        transform: translate(-50%, 0);
      }
    }
  }

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
