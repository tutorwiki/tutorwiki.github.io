var msgs = [
  'XP +30% // 2x Tournament Coins // Autoloot // Fast Regen // Montaria e Outfit Exclusivos // Boosted Exercises (25%+ Rapido) // +10% de critico // Sistema de loyalty: A cada 30 dias de VIP comprados, o jogador ganha 1 de Skill com um limite de 10',
  'O !autoloot é uma utilidade VIP. Com ele ativo, toda vez que voce mata uma criatura ela automaticamente é loteada. Caso você esteja em party, o leader recebe todo loot se ele for VIP. Precisa configurar o Quick Loot para funcionar',
  'O Ferumbrinha Loot é uma alternativa de lotear para quem não tem VIP. Dando USE (pode colocar na Hotkey), ele loteia todas as criaturas ao seu redor, como um *exeta loot*. Custa 250 Tournament na Store e precisa configurar o Quick Loot para funcionar.',
  'Para comprar uma casa você precisa ser lvl 250+. Va até a Cyclopedia, escolha uma house "Auctioned" e dê um BID. Se até o SS o seu BID for o maior você ganha. Descontará o valor do segundo maior BID + Aluguel Semanal. Um char pode comprar apenas 1 House.',
  'A Stamina regenera de 3 maneiras: Offline (Cama ou Statua), PZ (House, DP, Templo, Adventurers Guild) e nos Trainers BATENDO no MONK. A Stamina Verde regenera 1 min a cada 5 min RL, enquanto a Stamina Laranja regenera 1 min a cada 3 min RL.',
  'A Loot Pouch é um recipiente exclusivo para coletar loot, você configura ela no Quick Loot (recomendo Unassigned) e o loot vai diretamente para ela. O peso dos itens continuam contando para a cap do personagem.',
  'Para seu personagem não gerar mais flask vazia ao usar potions, digite !flask on (off para desativar)',
  'Para suas magias não saírem mais no Local Chat e ficarem em laranja na tela, digite !emotespell off (on para desativar)',
  'Voce ganha Tournament Poins ficando online durante 1 hora continua. Enquanto Free recebem 10 Tournament/h, quem é VIP recebe 20 Tournament/h.',
  'Apenas é permitido anunciar venda de Char que ESTEJA NO BAZAAR. Se depois de avisado o player continuar anunciando, o mesmo levara BAN de 1 dia, se persistir depois disso é BAN Permanente.',
  'Para colocar seu char no bazaar deve-se estar online no personagem e seguir a mesma maneira em que é feito no global, através do botão que fica localizado na STORE ao lado do "gift coins". Uma vez clicado ali, vai dar a lista dos requisitos necessários.',
  'O uso de macro é liberado apenas para treino, sendo estritamente proibido o uso para caçar. Quem for pego utilizando macro em locais de caça será banido.',
  'Para reportar um Bot/Macro afk na hunt, de um Ctrl+Click no personagem suspeito e vá em "Report Bot/Macro", assim que possível os GM irão averiguar o meliante. ',
  'Para reportar um BUG, de um Ctrl+Z e em seguida coloque o máximo de detalhes possíveis para que a equipe encontre a causa do problema. Reportar bugs é importante e você pode ser recompensado por isso.',
  'Todo Donate é processado de forma automática pelo servidor. Normalmente o processo ocorre imediatamente, mas o prazo máximo é de 24hrs. Lembre-se, quanto mais TC você comprar, maior vai ser o desconto. ',
  'Para um progresso mais rápido no avanço das skills, recomendamos o Dummy de House que da +10%.',
  'Conforme a mecânica do game, cada sala de Boss tem um tempo máximo de permanência, então se alguém estiver "trapando o boss", o mesmo será kikado no tempo limite da sala. A staff não pode intervir nisso.',
  'Você pode se conectar em até 5 contas no mesmo IP ao mesmo tempo. Porém apenas é permitido estar jogando em 1 Char, os outros podem ficar treinando. Caso seja detectado que o mesmo IP tem 2 personagens jogando ao mesmo tempo, a conta poderá ser Banida.',
  'Quando o personagem atingir o level 20, poderá utilizar o comando !reward para receber uma varinha de treino da sua maior skill, de acordo com a vocação escolhida',
  'Pode vir UMA das seguintes recompensas: 15 dias de Vip, Varinha de 46k, Outfit Retro, Outfit Store, 20 Pray cards, Mount Store, Loot Pouch, Tournament Coins',
  'Qualquer dúvida em relação aos eventos do servidor, consulte a aba de "EVENTOS" no nosso !discord.',
  'Não temos o npc Addoner, então todos os addons você tem que fazer seguindo a lógica do global, fazendo as quests e entregando os itens pedidos, portanto eu te aconselho a procurar nas wikis tibianas para fazer.',
  'Não temos o npc vendedor de itens de imbuements. Todos eles devem ser comprados via market, trocados via GT ou farmados por meio de drop.',
  'O Ferumbrinha é um boss diário que nasce na Event Island. Pra acessar basta entrar no TP à direita DENTRO DO TEMPLO de Thais. O portal abre as 19h, boss nasce as 19:10h.',
  'Ofensas CRIMINOSAS como: racismo, xenofobia, homofobia e etc.. Não serão toleradas e são passíveis de punição de acordo com a gravidade e contexto, caso seja vítima de algumas dessas ofensas encaminhe o máximo de provas possíveis (prints) para o e-mail do suporte.',
  'Todo e qualquer desrespeito, entre players e para/com a staff do jogo, não será tolerado e será punido de acordo com a gravidade e reincidência do ocorrido. Com a punição podendo variar entre WARNING até exclusão da conta.',
  'Quem estiver apresentando problemas de conexão façam o procedimento do !discord, lá da aba "LAG", e abram um ticket como orientado na própria aba.',
  'Qualquer comércio no [World Chat] é proibido, mute sem aviso prévio. Por Gentileza use o [Advertising]',
  'Conversas aleatórias, Vendas/Compras no Help não são permitidos, passivo de mute, Evitem por favor!',
  'Utilize o HELP para dúvidas, o uso indevido resultará em mute. Use Wchat para boss/hunt e Adversing para vendas.',
  'ferumbrinha.suporte@gmail.com',
  'Recompensa do Battlefield: 25 crystal coins - 25 tournament coins - 200K de experiência multiplicado pelo número de jogadores sobreviventes (ex.: 200K * 5 = 1KK EXP)',
  'Para pegar suas config e hotkeys de um cliente pro outro faça o seguinte: Config > Misc > Help > Export all options - E no cliente que for receber, faça a mesma coisa trocando o Export por Import',
  'As roletas são um sistema onde você tem chance de ganhar itens valiosos, a roleta do sul é para itens de fansite, a do norte esquerda é a roleta do ferumbrinhas do domingo para item raro, e as outras são as "normais" para o restante dos itens',
  'o Acesso das task está na Adventures Island subindo a escada a direita no TP do barquinho, as recompensas podem ser visualizadas ao aceitar uma task'
  ]

function c(t) {
    navigator.clipboard.writeText(msgs[t]);
  }
  