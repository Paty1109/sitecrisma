// EDITE AQUI: todos os textos e dados do site ficam neste arquivo.
// Mantenha os placeholders até receber o conteúdo que deseja publicar.
export const content = {
  navigation: {
    brand: '[INSERIR NOME DO SITE]', menuLabel: '[INSERIR RÓTULO DO MENU]', backToTopLabel: '[INSERIR RÓTULO PARA VOLTAR AO TOPO]',
    links: [{ href: '#inicio', label: '[INSERIR ITEM DE MENU]' }, { href: '#biografia', label: '[INSERIR ITEM DE MENU]' }, { href: '#linha-do-tempo', label: '[INSERIR ITEM DE MENU]' }, { href: '#conteudos', label: '[INSERIR ITEM DE MENU]' }],
  },
  home: {
    kicker: '[INSERIR CHAMADA DE ABERTURA]', title: '[INSERIR TÍTULO DO SITE]', subtitle: '[INSERIR FRASE DE DESTAQUE]', buttonText: '[INSERIR TEXTO DO BOTÃO]', scrollHint: '[INSERIR CHAMADA PARA NAVEGAÇÃO]',
    // Para usar uma imagem, substitua src por um caminho, por exemplo: '/images/nome-da-imagem.jpg'.
    image: { src: '', alt: '[INSERIR DESCRIÇÃO DA IMAGEM]', label: '[INSERIR IMAGEM DE DESTAQUE]' },
  },
  biography: {
    kicker: '[INSERIR CHAMADA DA SEÇÃO]', title: '[INSERIR TÍTULO DA BIOGRAFIA]', text: '[INSERIR BIOGRAFIA AQUI]', highlight: '[INSERIR DESTAQUE OU INFORMAÇÃO COMPLEMENTAR]',
    image: { src: '', alt: '[INSERIR DESCRIÇÃO DA IMAGEM]', label: '[INSERIR IMAGEM DA BIOGRAFIA]' },
  },
  timelineHeading: { kicker: '[INSERIR CHAMADA DA LINHA DO TEMPO]', title: '[INSERIR TÍTULO DA LINHA DO TEMPO]', description: '[INSERIR DESCRIÇÃO DA LINHA DO TEMPO]' },
  // EDITE AQUI: adicione, remova ou reorganize eventos da linha do tempo.
  timeline: [
    { date: '[INSERIR DATA OU PERÍODO]', title: '[INSERIR TÍTULO DO EVENTO]', description: '[INSERIR DESCRIÇÃO DO EVENTO]', image: { src: '', alt: '[INSERIR DESCRIÇÃO DA IMAGEM]', label: '[INSERIR IMAGEM OPCIONAL]' } },
    { date: '[INSERIR DATA OU PERÍODO]', title: '[INSERIR TÍTULO DO EVENTO]', description: '[INSERIR DESCRIÇÃO DO EVENTO]', image: { src: '', alt: '[INSERIR DESCRIÇÃO DA IMAGEM]', label: '[INSERIR IMAGEM OPCIONAL]' } },
    { date: '[INSERIR DATA OU PERÍODO]', title: '[INSERIR TÍTULO DO EVENTO]', description: '[INSERIR DESCRIÇÃO DO EVENTO]', image: { src: '', alt: '[INSERIR DESCRIÇÃO DA IMAGEM]', label: '[INSERIR IMAGEM OPCIONAL]' } },
  ],
  devotion: {
    kicker: '[INSERIR CHAMADA DA SEÇÃO]', title: '[INSERIR TÍTULO DA SEÇÃO]', curiositiesTitle: '[INSERIR TÍTULO DO BLOCO]', quotesTitle: '[INSERIR TÍTULO DO BLOCO]', detailsTitle: '[INSERIR TÍTULO DO BLOCO]',
    curiosities: ['[INSERIR CURIOSIDADE]', '[INSERIR CURIOSIDADE]', '[INSERIR CURIOSIDADE]'], quotes: ['[INSERIR FRASE]', '[INSERIR FRASE]'],
    patronLabel: '[INSERIR RÓTULO]', patron: '[INSERIR INFORMAÇÃO]', feastDayLabel: '[INSERIR RÓTULO]', feastDay: '[INSERIR DATA]',
  },
  footer: { credit: '[INSERIR CRÉDITOS OU AUTORIA]', additionalInfo: '[INSERIR INFORMAÇÃO ADICIONAL]' },
}
