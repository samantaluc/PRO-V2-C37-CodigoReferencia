// Declaração de variáveis globais
var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2;
var cars = [];

// Função para pré-carregar recursos do jogo AULA 38
function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  car1_img = loadImage("../assets/car1.png");
  car2_img = loadImage("../assets/car2.png");
  track = loadImage("../assets/pista.png");
}

// Função de configuração, chamada uma vez no início do jogo
function setup() {
  canvas = createCanvas(windowWidth, windowHeight); // Cria um canvas que preenche a janela do navegador
  database = firebase.database(); // Inicializa a conexão com o banco de dados Firebase
  game = new Game(); // Cria um objeto Game
  game.getState(); // Obtém o estado atual do jogo do banco de dados
  game.start(); // Inicia o jogo
}

// Função de desenho, executada continuamente para renderizar o jogo
function draw() {
  background(backgroundImage); // Define o plano de fundo do canvas com a imagem carregada

  if (playerCount === 2) {
    game.update(1); // Se houver dois jogadores, atualiza o estado do jogo para 1 (estado de jogo) AULA 38
  }

  if (gameState === 1) {
    game.play(); // Se o estado do jogo for 1, chama a função play() do objeto Game, que controla a lógica do jogo AULA 38
  }
}

// Função chamada sempre que a janela do navegador é redimensionada
function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Atualiza o tamanho do canvas para coincidir com o tamanho da janela
}
