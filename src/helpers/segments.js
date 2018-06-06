const segments = [
  'Academia de Esportes',
  'Artes Marciais',
  'Açúcar e Álcool',
  'Administração e Participação',
  'Agências de Turismo',
  'Viagem',
  'Agricultura',
  'Pecuária',
  'Silvicultura',
  'Alimentos',
  'Arquitetura',
  'Paisagismo',
  'Urbanismo',
  'Assessoria de Imprensa',
  'Automação',
  'Automotivo',
  'Bancário',
  'Financeiro',
  'Bebidas',
  'Bens de Capital',
  'Bens de Consumo (Outros)',
  'Borracha',
  'Café',
  'Calçados',
  'Comércio Atacadista',
  'Comércio Varejista',
  'Comunicação',
  'Concessionárias',
  'Auto Peças',
  'Construção Civil',
  'Consultoria Geral',
  'Contabilidade',
  'Auditoria',
  'Corretagem (Imóveis)',
  'Corretagem (Seguros)',
  'Corretagem de Títulos e Valores Imobiliários',
  'Cosméticos',
  'Diversão',
  'Entretenimento',
  'Educação',
  'Idiomas',
  'Eletrônica',
  'Eletroeletrônica',
  'Eletrodomésticos',
  'Embalagens',
  'Energia',
  'Eletricidade',
  'Engenharia',
  'Equipamentos industriais',
  'Equipamentos médicos',
  'Precisão',
  'Estética',
  'Academias',
  'Eventos',
  'Farmacêutica',
  'Veterinária',
  'Financeira',
  'Gráfica',
  'Editora',
  'Importação',
  'Exportação',
  'Incorporadora',
  'Indústrias',
  'Informática',
  'Internet',
  'Sites',
  'Jornais',
  'Jurídica',
  'Logística',
  'Armazém',
  'Madeiras',
  'Materiais de Construção',
  'Material de Escritório',
  'Mecânica',
  'Manutenção',
  'Metalúrgica',
  'Siderúrgica',
  'Mineração',
  'Móveis e Artefatos de decoração',
  'Órgãos público',
  'Outros',
  'Papel e Derivados',
  'Petroquímico',
  'Petróleo',
  'Plásticos',
  'Prestadora de Serviços',
  'Publicidade e Propaganda',
  'Recursos Humanos',
  'Relações Públicas',
  'Representação Comercial',
  'Restaurante',
  'Industrial',
  'Fast Food',
  'Saúde',
  'Segurança Patrimonial',
  'Seguros',
  'Previdência Privada',
  'Sindicatos ',
  'Associação',
  'ONG',
  'Supermercado',
  'Hipermercado',
  'Telecomunicações',
  'Telemarketing',
  'Call Center',
  'Têxtil',
  'Couro',
  'Transportes',
  'Turismo',
  'Hotelaria'
].sort((a, b) => {
  if (a > b) {
    return 1
  }
  if (a < b) {
    return -1
  }

  return 0
})

export default segments
