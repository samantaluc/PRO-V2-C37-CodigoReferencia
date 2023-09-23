class Player {
  constructor() {
    // Construtor da classe Player
    this.name = null; // Nome do jogador
    this.index = null; // Índice do jogador
    this.positionX = 0; // Posição X do jogador na tela
    this.positionY = 0; // Posição Y do jogador na tela
  }

  addPlayer() {
    // Função para adicionar um jogador ao banco de dados
    var playerIndex = "players/player" + this.index;

    // Define a posição inicial do jogador com base no índice
    if (this.index === 1) {
      this.positionX = width / 2 - 100;
    } else {
      this.positionX = width / 2 + 100;
    }

    // Define os dados do jogador no banco de dados
    database.ref(playerIndex).set({
      name: this.name, // Nome do jogador
      positionX: this.positionX, // Posição X do jogador
      positionY: this.positionY // Posição Y do jogador
    });
  }

  getCount() {
    // Função para obter o número total de jogadores do banco de dados
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val(); // Atualiza a variável global playerCount com o valor obtido do banco de dados
    });
  }

  updateCount(count) {
    // Função para atualizar o número total de jogadores no banco de dados
    database.ref("/").update({
      playerCount: count // Define o novo valor do playerCount no banco de dados
    });
  }

  static getPlayersInfo() {
    // Função estática para obter informações de todos os jogadores do banco de dados AULA 38
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value", data => {
      allPlayers = data.val(); // Atualiza a variável global allPlayers com os dados de todos os jogadores AULA 38
    });
  }
}
