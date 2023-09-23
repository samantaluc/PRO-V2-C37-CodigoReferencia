class Game {
  constructor() {} // Construtor vazio

  getState() {
    // Obtém o estado atual do jogo do banco de dados Firebase
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val(); // Atualiza a variável global gameState com o valor obtido do banco de dados
    });
  }

  update(state) {
    // Atualiza o estado do jogo no banco de dados Firebase AULA 38
    database.ref("/").update({
      gameState: state // Define o novo estado do jogo no banco de dados
    });
  }

  start() {
    // Função chamada para iniciar o jogo
    player = new Player(); // Cria um novo objeto Player
    playerCount = player.getCount(); // Obtém o número total de jogadores no jogo

    form = new Form(); // Cria um novo objeto Form (formulário)
    form.display(); // Exibe o formulário na tela

    // Cria e configura dois carros (Sprites) para os jogadores AULA 38
    car1 = createSprite(width / 2 - 50, height - 100);
    car1.addImage("car1", car1_img);
    car1.scale = 0.07;

    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage("car2", car2_img);
    car2.scale = 0.07;

    cars = [car1, car2]; // Adiciona os carros a um array AULA 38
  }

  handleElements() {
    // Função para lidar com elementos na tela
    form.hide(); // Esconde o formulário
    form.titleImg.position(40, 50); // Define a posição da imagem do título
    form.titleImg.class("gameTitleAfterEffect"); // Aplica uma classe CSS à imagem do título
  }

  play() {
    // Função para controlar a fase de jogo AULA 38
    this.handleElements(); // Chama a função para lidar com elementos na tela AULA 38

    Player.getPlayersInfo(); // Obtém informações sobre todos os jogadores AULA 38

    if (allPlayers !== undefined) {
      // Verifica se há informações de jogadores disponíveis AULA 38
      image(track, 0, -height * 5, width, height * 6); // Exibe a imagem da pista no canvas AULA 38

      drawSprites(); // Desenha todos os Sprites, incluindo os carros, na tela AULA 38
    }
  }
}
