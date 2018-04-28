var posicaoAleatoria = Math.ceil(Math.random() * 5);				//variável que define a posição inicial do barco

var parte1 = posicaoAleatoria;										//variável que define a posição da primeira parte do barco
var parte2 = parte1+1;												//variável que define a posição da segunda parte do barco
var parte3 = parte2 +1;												//variável que define a posição da terceira parte do barco

var parteEscolhida = []; 											//variável que controla se uma parte do barco já foi atingida

var jogada;															//variável de controlo que define a jogada do jogador
var atingidas = 0;													//variável de controlo que define o número de partes do barco atingidas
var totalJogadas = 0;												//variável de controlo que define o número de jogadas

var afundado = false;												//variável que determina se o jogo terminou

while (afundado === false) { 										//enquanto todas as partes não forem atingidas o ciclo irá continuar
	
	jogada = prompt("Pode jogar - Escolha um número entre 1 e 7:"); //obtém o valor que o jogador selecionou
	
	if (isNaN(jogada)) { 											//força o jogador a usar números. Caso não seja um número, o ciclo recomeça
	
		alert("Insira um número entre 1 e 7!");
	
	} else if (jogada < 1 || jogada > 7) { 							//garante que o valor está nos critérios do jogo, ou seja, se está entre 1 e 7

		alert("Jogada inválida. Tente de novo!");
	
	} else if (jogada % 1 !== 0) { 									//garante que o valor introduzido pelo jogador é um número inteiro
		
		alert("O número tem de ser inteiro!");
		
	} else {
		var comando = 0; 
	
		for (i=0; i < parteEscolhida.length; i++) { 				//ciclo que se repete por cada valor do array "parteEscolhida"
		    if (jogada == parteEscolhida[i]) { 						//caso o valor "jogada" seja igual a um valor do array este adiciona uma unidade à variável "comando"
		        comando++;
		    }
		}

		if (comando !== 0) { 										//caso "comando" nao seja zero o jogador está a repetir uma jogada com o mesmo valor, isto porque o valor já se encontra no array "parteEscolhida"
		    
		alert("Essa parte já foi atingida! Tenta de novo!");
		
		} else {  													//se for zero o jogador não está a repetir uma jogada, corre normalmente
		
		    totalJogadas += 1;
		
		    parteEscolhida.push(jogada); 							//insere a jogada no array "parteEscolhida"
        
		    if (jogada == parte1 || jogada == parte2 || jogada == parte3) { //determina se alguma das partes foi atingida após a jogada

			    alert("Acertaste! Joga de novo!");

			    atingidas += 1;
            
			    if (atingidas == 3) { 								//se as três partes forem atingidas, o jogo acaba

				    afundado = true;

				    alert("Ganhaste, Parabens!");

			    }
        
		    } else { 												//se após a jogada nenhuma parte do barco for acertada, dá-se o alerta

			    alert("Falhaste, tenta de novo!");

		    }

	    }

    }

}

var estatistica = "Foi preciso um total de " + totalJogadas + " jogadas para afundar o navio, " + 
                          "o que quer dizer que a tua pontaria foi de " + (3/totalJogadas); //variável que calcula a precisão do jogador

alert(estatistica);