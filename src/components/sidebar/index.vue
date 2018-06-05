<template>
  <aside class="sidebar">
    <h1 class="logo">LOGO<span class="word-blue">X</span></h1>
    <ul>
      <li
        v-for="section in sections"
        v-bind:key="section"
        v-bind:class="['menu-item', { active: currentSection === section }]"
        v-on:click="currentSection = section"
      >{{section}}</li>
    </ul>
  </aside>
</template>

<script>

export default {
  name: 'SideBar',
  data () {
    return {
      sections: ['Fazer nova Transação', 'Fazer simulação', 'Painel do cliente', 'Meus dados cadastrais', 'Configurações'],
      currentSection: 'Meus dados cadastrais'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.sidebar {
  width: $sidenav-width;
  background: $bg-dark-grey;
  font-size: 14px;
  top: 0;
  left: 0;
  color: $font-light;
  position: fixed;
  height: 100%;
  box-sizing: border-box;

  .logo {
    padding: 1.3rem 1rem;
    font-weight: bold;
    font-size: 20px;
    .word-blue {
      color: $blue;
    }
  }

  .menu-item {
    background: $bg-blue-grey;
    padding: 1rem;
    border-bottom: 1px solid $bg-dark-grey;
    transition: background-color 0.4s;
    &:hover {
      background: $bg-light-hover;
      color: $font-dark;
    }
  }
  .active {
    background: $white;
    color: $font-dark;
    border-left: 5px solid $blue;

    &:hover {
      background: $white;
      color: $font-dark;
    }
  }
}
</style>
