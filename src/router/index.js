import Vue from 'vue'
import Router from 'vue-router'

import MeusDadosCadastrais from '@/pages/MeusDadosCadastrais'
import FazerNovaTransacao from '@/pages/FazerNovaTransacao'
import FazerSimulacao from '@/pages/FazerSimulacao'
import Configuracoes from '@/pages/Configuracoes'
import PainelDoCliente from '@/pages/PainelDoCliente'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Meus dados cadastrais',
      component: MeusDadosCadastrais
    },
    {
      path: '/fazer-nova-transacao',
      name: 'Fazer nova transação',
      component: FazerNovaTransacao
    },
    {
      path: '/configuracoes',
      name: 'Configurações',
      component: Configuracoes
    },
    {
      path: '/fazer-simulacao',
      name: 'Fazer simulação',
      component: FazerSimulacao
    },
    {
      path: '/painel-do-cliente',
      name: 'Painel do cliente',
      component: PainelDoCliente
    }
  ]
})
