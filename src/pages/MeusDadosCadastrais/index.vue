<template>
  <el-main class="main">
    <div class="wrapper">
    <h1 class="section-title title">{{section}}</h1>
    <div class="cards-wrapper">

    <div class="user-info card">
      <h1 class="mobile-section-title align">{{section}}</h1>
      <img  class="user-img user-icon-2" src="../../assets/img/user_icon.svg" alt="foto do usuário"/>
      <h2 class="user-name text-center text-spacing">Pedro Costa</h2>
      <h3 class="user-email text-center text-spacing">pedro.costa@tesla.com.br</h3>
      <h4 class="company-name text-center text-spacing">Tesla Mecânica</h4>
      <p class="progress text-center text-spacing">
        <el-progress
          :stroke-width="8"
          :show-text="false"
          :width="10"
          :percentage="70"/> 70% completo</p>
      <hr class="user-info-divider"/>

      <p class="user-config text-spacing"><img
      class="user-edit-img"
      src="../../assets/img/noun_1202141_cc.png" alt="Minha conta"> Minha conta listo</p>
      <p class="user-config text-spacing"><img class="user-edit-img" src="../../assets/img/noun_1426721_cc.png" alt="Domicílio bancário"> Domicílio Bancário</p>
      <p class="user-config text-spacing"><img class="user-edit-img" src="../../assets/img/noun_484247_cc.png" alt="Editar cadastro"> Editar cadastro</p>
      <p class="user-config text-spacing"><img class="user-edit-img" src="../../assets/img/noun_711818_cc.png" alt="Alterar senha"> Alterar senha</p>
      <p class="user-config text-spacing"><img class="user-edit-img" src="../../assets/img/noun_927439_cc.png" alt="Editar foto"> Editar foto</p>

      <div class="user-phones">
      <hr class="user-info-divider"/>
        <h2 class="contact text-center text-spacing">Dúvidas? Fale conosco</h2>
        <h3 class="main-phone text-center text-spacing">0800.942.1835</h3>
        <h3 class="aux-phone text-center text-spacing">11 3078.0876</h3>
        <h3 class="aux-phone text-center text-spacing">11 3078.0914</h3>

      </div>

    </div>

    <div class="user-edit card">
      <el-menu :default-active="currentTab" class="el-menu-demo" mode="horizontal" @select="handleSelecTab">
        <el-menu-item v-for="tab in tabs" v-bind:key="tab.name" :index="tab.index">{{tab.name}}</el-menu-item>

      </el-menu>
      <div class="form-wrapper">
        <h1 class="title">Minha conta listo</h1>
        <el-form
          :inline="true"
          :model="formInline"
          class="demo-form-inline"
          label-position="top"
        >
        <el-row :gutter="30">
           <el-col :xs="24" :md="12">
            <label class="input-label" for="name">Nome</label>
            <el-input  id="name" name="name"  placeholder="Digite seu nome"></el-input>
           </el-col>
           <el-col :xs="24" :md="12">
            <label class="input-label" for="fantasy-name">Nome Fantasia</label>
            <el-input  id="fantasy-name" name="fantasy-name" placeholder="Digite o nome fantasia"></el-input>
          </el-col>
        </el-row>
          <el-row :gutter="30">
          <el-col :xs="24" :md="12">
            <label class="input-label" for="segment">Segmento</label>
            <el-select id="segment" name="segment" v-model="currentSegment" placeholder="Escolha o segmento">
            <el-option class="select-option"
              v-for="segment in segments"
              :key="segment"
              :label="segment"
              :value="segment">
            </el-option>
          </el-select>
          </el-col>
          <el-col :xs="24" :md="12">
            <label class="input-label" for="gender">Gênero</label>
              <div class="checkbox-align">
            <div  id="gender" name="gender" class="checkbox-round">
            <input v-model="gender" type="radio" id="feminino" value="feminino" />
              <label for="feminino"></label><div class="radio-button-label">Feminino</div>
            </div>
            <div class="checkbox-round">
            <input v-model="gender" type="radio" id="masculino" value="masculino"/>
              <label for="masculino"></label><div class="radio-button-label">Masculino</div>
            </div>
            </div>
          </el-col>
          </el-row>

          <hr class="user-edit-divider"/>

          <el-row :gutter="30">
          <el-col :xs="24" :md="12">
            <label class="input-label" for="cep">Cep</label>
            <el-input id="cep" name="cep" placeholder="Digite seu cep"></el-input>
          </el-col>
          <el-col :xs="24" :md="8">
            <label class="input-label" for="address">Endereço</label>
            <el-input id="address" name="address" placeholder="Digite seu endereço"></el-input>
          </el-col>
          <el-col :xs="24" :md="4">
            <label class="input-label" for="number">Número</label>
            <el-input  id="number" name="number" placeholder="Número"></el-input>
          </el-col>
          </el-row>
          <el-row :gutter="30">
          <el-col :xs="24" :md="12">
            <label class="input-label" for="tip">Complemento</label>
            <el-input  id="tip" name="tip" placeholder="Digite o complemento"></el-input>
          </el-col>
          <el-col :xs="24" :md="8">
            <label class="input-label" for="city">Cidade</label>
            <el-input id="city" name="city" placeholder="Digite a sua cidade"></el-input>
          </el-col>
          <el-col :xs="24" :md="4">
            <label class="input-label" for="uf">UF</label>
            <el-input id="uf" name="uf" placeholder="UF"></el-input>
          </el-col>
          </el-row>

          <hr class="user-edit-divider"/>

          <el-row :gutter="30">
          <el-col :xs="24" :md="8">
            <label class="input-label" for="phone-1">Telefone 1</label>
            <el-input  id="phone-1" name="phone-1" placeholder="(99) 99999-9999"></el-input>
          </el-col>
          <el-col :xs="24" :md="8">
            <label class="input-label" for="phone-2">Telefone 2</label>
            <el-input id="phone-2" name="phone-2"  placeholder="(99) 99999-9999"></el-input>
          </el-col>
          <el-col :xs="24" :md="8">
            <label class="input-label" for="phone-3">Telefone 2</label>
            <el-input  id="phone-3" name="phone-3" placeholder="(99) 99999-9999"></el-input>
          </el-col>

          </el-row>

          <el-row class="form-submit-row" :gutter="30">
          <el-col :xs="24" :md="9">
            <div class="checkbox-round">
              <input type="checkbox" id="checkbox" />
              <label class="input-label" for="checkbox"></label>
              <p class="checkbox-round-label">Li e aceito os termos e condições de contrato</p>
            </div>
          </el-col>
          <el-col :xs="24" :md="7">
            <p class="print-icon"><img src="../../assets/img/noun_950946_cc.png" alt="botão de imprimir" class="align"> Imprimir</p>
          </el-col>
          <el-col :xs="24" :md="8">
            <el-button type="primary" round class="btn-submit">Salvar</el-button>
          </el-col>
          </el-row>
        </el-form>
      </div>
    </div>

    <!-- <el-card class="user-data">piditate aspernatur molestias?</el-card> -->

    </div>

    <footer class="footer">
      ® 2018 Logox Tecnologia S.A Todos os direitos reservados.
    </footer>
    </div>
  </el-main>
</template>

<script>
import segments from '../../helpers/segments.js'

export default {
  name: 'Content',
  data () {
    return {
      section: 'Meus dados cadastrais',
      gender: '',
      segments,
      currentSegment: '',
      tabs: [{name: 'Minha conta listo', index: 0}, {name: 'Domicílio bancário', index: 1}, {name: 'Editar cadastro', index: 2}, {name: 'Alterar senha', index: 3}, {name: 'Editar foto', index: 4}],
      currentTab: 0
    }
  },
  methods: {
    handleSelectTab () {
      console.log('novo')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main {
  padding: 0px;
  position: absolute;
  top: 65px;
  left: $sidenav-width;
  right: 0;
  bottom: 0;
  background: $bg-white-light;
  box-sizing: border-box;
  @include mq('phone-wide') {
    left: 0;
    top: 0;
  }

  .wrapper {
    box-sizing: border-box;
    position: relative;
    margin: 32px;
    @include mq('phone-wide') {
      margin: 0;
    }
  }

  .section-title {
    margin-top: 0px;
    padding: 0px;
  }

  .cards-wrapper {
    margin-top: 29px;
    justify-content: space-between;
    display: flex;

    .mobile-section-title {
      display: none;
      @include mq('phone-wide') {
        display: block;
        margin: auto;
        font-size: 20px;
      }
    }

    .user-info {
      flex-basis: 400px;
      padding: 4rem;
      padding-top: 2rem;
      box-sizing: border-box;
      @include mq('phone-wide') {
        position: absolute;
        width: 100%;
        z-index: 2;
      }
      .user-img {
        display: block;
        margin: 0 auto;
      }
      .user-name {
        font-size: 36px;
        color: $blue;
        letter-spacing: -1.4px;
      }
      .user-email {
        font-size: 20px;

        color: $grey;
      }
      .company-name {
        font-size: 18px;
        color: $dark-grey;
      }
      .progress {
        font-size: 12px;
        color: $dark-grey;
      }

      .user-config {
        font-size: 18px;
        color: $bg-blue-grey;
        padding: 0.6rem 0;
        .icon {
          margin-right: 40px;
          color: $blue;
        }
        .user-edit-img {
          margin-right: 12px;
          vertical-align: middle;
        }
      }

      .user-phones {
        @include mq('phone-wide') {
          display: none;
        }
      }

      .contact {
        padding: 1rem 0;
        font-size: 24px;
        color: $blue;
      }
      .main-phone {
        font-size: 24px;
        font-weight: bold;
        color: $black;
      }
      .aux-phone {
        font-size: 27px;
        color: $black;
      }
    }

    .user-edit {
      margin-left: 32px;
      box-sizing: border-box;
      flex-basis: 1152px;
      @include mq('phone-wide') {
        display: none;
      }
      .form-wrapper {
        padding: 2rem 10rem 0rem 2rem;
        .btn-submit {
          text-transform: uppercase;
          font-size: 20px;
          padding-right: 105px;
          padding-left: 105px;
          background-color: $blue;
          &:hover {
            background: $bg-blue-hover;
            border-color: $bg-blue-hover;
          }
        }
        .print-icon {
          color: $blue;
          font-size: 20px;
        }
        .form-submit-row {
          padding-top: 11rem;
          padding-bottom: 0rem;
          .submit-row-offset {
            margin-top: 4rem;
          }
        }
      }
    }
  }

  .footer {
    position: absolute;
    margin-top: 43px;
    margin-bottom: 43px;
    right: 36px;
  }
}
</style>
