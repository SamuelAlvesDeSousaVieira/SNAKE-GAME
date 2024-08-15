# SNAKE-GAME
Jogo da cobrinha / snake game

<h1> Descrição do código</h1>
<p>Estrutura Geral
O código JavaScript segue uma estrutura orientada a objetos, com duas classes principais: Snake (Cobra) e Apple (Maçã). Além disso, há funções auxiliares para lidar com o movimento da cobra, renderização no canvas, e eventos de teclado.

1. Classe Snake
A classe Snake define a cobra, que tem as seguintes propriedades e métodos:

Propriedades:
x e y: A posição inicial da cabeça da cobra no canvas (coordenadas).
size: O tamanho de cada segmento da cobra (geralmente um quadrado).
tail: Um array que contém todos os segmentos da cobra. Cada segmento é representado por um objeto com coordenadas x e y. A cobra começa com apenas um segmento (sua cabeça).
rotateX e rotateY: Essas variáveis controlam a direção em que a cobra está se movendo. Por exemplo, rotateX = 1 significa que a cobra está se movendo para a direita, e rotateY = -1 significa que a cobra está se movendo para cima.
Métodos:
move(): Esse método atualiza a posição da cobra de acordo com a direção (rotateX e rotateY). Ele faz isso removendo o primeiro segmento da cobra (cauda) e adicionando um novo segmento na frente (cabeça). A posição do novo segmento é baseada na posição do último segmento (o que era a cabeça).

2. Classe Apple
A classe Apple define a maçã, que aparece em posições aleatórias no canvas. A maçã tem as seguintes propriedades:

Propriedades:
x e y: Coordenadas da posição da maçã no canvas, geradas aleatoriamente.
size: O tamanho da maçã, que é o mesmo da cobra.
color: A cor da maçã, definida como roxo (#BB86FC).
Construtor:
A maçã é posicionada aleatoriamente no canvas. O código garante que a maçã não apareça na mesma posição que qualquer segmento da cobra (verificando se as coordenadas da maçã coincidem com qualquer segmento da cobra).

3. Inicialização do Jogo
A partir da função window.onload, o jogo é iniciado através da chamada da função gameLoop(). O gameLoop define o ritmo do jogo, atualizando a tela a cada 50ms (20 frames por segundo).

4. Funções Globais
Aqui estão as funções principais que controlam o jogo:

gameLoop()
Inicia o loop principal do jogo chamando repetidamente a função show() em intervalos regulares (50ms, para 20 FPS).
show()
Função principal que atualiza e desenha o jogo. Ela chama as funções update() (para atualizar a lógica do jogo, como movimento da cobra e detecção de colisões) e draw() (para redesenhar a cobra, maçã e outras informações no canvas).
update()
Atualiza o estado do jogo:
Move a cobra chamando snake.move().
Verifica se a cobra comeu uma maçã chamando eatApple().
Verifica se a cobra bateu na parede chamando checkHitWall().
checkHitWall()
Verifica se a cobra atingiu as bordas do canvas. Se a cobra sair do canvas em qualquer direção, ela reaparece do outro lado. Isso cria a sensação de um mundo "circular".
eatApple()
Verifica se a cabeça da cobra está na mesma posição que a maçã. Se estiver, a cobra "come" a maçã:
Um novo segmento é adicionado à cobra (aumentando seu comprimento).
Uma nova maçã é gerada em uma posição aleatória.
draw()
Desenha todos os elementos do jogo no canvas:
Desenha um fundo preto para o canvas.
Desenha cada segmento da cobra como um pequeno quadrado branco.
Desenha a maçã como um quadrado roxo.
Exibe a pontuação (número de segmentos da cobra - 1) no canto superior direito.
createRect()
Função utilitária para desenhar um retângulo de uma cor específica no canvas. Ela é usada para desenhar a cobra e a maçã.

5. Controle por Teclado
O código também inclui um ouvinte de eventos de teclado (window.addEventListener("keydown", ...)) que permite ao jogador controlar a direção da cobra usando as setas do teclado. Dependendo da tecla pressionada, as variáveis rotateX e rotateY são atualizadas para mudar a direção da cobra.

Seta para a esquerda (keyCode === 37): Move a cobra para a esquerda (define rotateX = -1 e rotateY = 0).
Seta para cima (keyCode === 38): Move a cobra para cima (define rotateX = 0 e rotateY = -1).
Seta para a direita (keyCode === 39): Move a cobra para a direita (define rotateX = 1 e rotateY = 0).
Seta para baixo (keyCode === 40): Move a cobra para baixo (define rotateX = 0 e rotateY = 1).
Fluxo do Jogo
Início: O jogo começa quando o window.onload é chamado e gameLoop() inicia o loop principal do jogo.
Movimento: A cobra se move constantemente em uma direção até que o jogador pressione uma tecla para alterar sua direção.
Detecção de colisão com maçã: Sempre que a cobra se move, o jogo verifica se a cobra colidiu com a maçã. Se sim, a cobra cresce e uma nova maçã aparece em uma posição aleatória.
Detecção de colisão com paredes: Se a cobra colidir com as bordas do canvas, ela reaparece do lado oposto.
Renderização: A cada iteração do loop do jogo, a cobra e a maçã são redesenhadas no canvas, e a pontuação é atualizada com base no comprimento da cobra.
Conclusão
Este código implementa um jogo simples, mas eficaz, da "Cobrinha", utilizando classes para organizar os objetos do jogo e funções auxiliares para controlar o fluxo do jogo, renderização e interação do usuário. A lógica de movimento, crescimento da cobra e interação com o canvas são manipulados de forma sequencial e lógica, proporcionando uma experiência de jogo fluida e funcional.</p>
