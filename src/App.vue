<template>
  <div id="app">
    <el-container>
      <sidebar :sections="sections"/>
      <el-container>
        <main-header/>
          <router-view/>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import img1 from './assets/img/Group 163.png'
import img2 from './assets/img/Path 500.png'
import img3 from './assets/img/noun_1323839_cc (1).png'
import img4 from './assets/img/ic_fingerprint_black_24px.png'
import img5 from './assets/img/noun_1299910_cc.png'

import SideBar from '@/components/sidebar'
import Header from '@/components/header'

export default {
  name: 'App',
  components: {
    'sidebar': SideBar,
    'main-header': Header
  },
  data () {
    return {
      sections: [
        {name: 'Fazer nova Transação', img: img1},
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

<style  lang="scss">
#app {
  font-family: 'Montserrat', sans-serif;
}
</style>
