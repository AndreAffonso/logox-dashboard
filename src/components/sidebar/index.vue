<template>
  <aside class="sidebar">
    <div class="logo-wrapper">
      <h1 class="logo">LOGO<span class="word-blue">X</span></h1>
      <button class="naked-button menu-icon">
        <img src="../../assets/img/Group 171.png"   alt="menu"/>
      </button>
    </div>
    <ul>
      <li
        v-for="section in sections"
        v-bind:key="section.name"
        v-bind:class="['menu-item', { active: currentSection === section.name }]"
        v-on:click="currentSection = section.name"
      >
        <router-link class="no-style-link" :to="{ name: section.name }">
        </router-link>
          <img :src="section.img" :alt="section.name" /><p class="name-style">{{section.name}}</p>
      </li>
    </ul>
  </aside>
</template>

<script>
import img1 from '../../assets/img/Group 163.png'
import img2 from '../../assets/img/Path 500.png'
import img3 from '../../assets/img/noun_1323839_cc (1).png'
import img4 from '../../assets/img/ic_fingerprint_black_24px.png'
import img5 from '../../assets/img/noun_1299910_cc.png'

export default {
  name: 'SideBar',
  data () {
    return {
      sections: [
        {name: 'Fazer nova transação', img: img1},
        {name: 'Fazer simulação', img: img2},
        {name: 'Painel do cliente', img: img3},
        {name: 'Meus dados cadastrais', img: img4},
        {name: 'Configurações', img: img5}
      ],
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
  .logo-wrapper {
    padding: 1.5rem 1rem;
    .logo {
      display: inline;
      font-weight: bold;
      font-size: 20px;
      .word-blue {
        color: $blue;
      }
    }
    .menu-icon {
      display: inline;
      float: right;
    }
  }

  .menu-item {
    position: relative;
    background: $bg-blue-grey;
    padding: 0.7rem;
    border-bottom: 1px solid $bg-dark-grey;
    transition: background-color 0.4s;
    &:hover {
      background: $bg-light-hover;
      color: $font-dark;
    }

    .name-style {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      margin-left: 40px;
    }
    .fontDark {
      color: $font-dark;
    }
  }
  .active {
    color: $font-dark;
    background: $white;
    border-left: 5px solid $blue;

    &:hover {
      background: $white;
      color: $font-dark;
    }
  }
  .no-style-link {
    position: absolute;
    width: 100%;
    height: 100%;
    color: inherit;
  }
}
</style>
