#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Cliente {
  char nome[100];
  char sexo;
  int idade;
};
typedef struct Cliente Cliente;

struct Venda {
  Cliente clienteInfo;
  int quantidadeItens;
  float valorTotal;
  char horarioCompra[10];
};
typedef struct Venda Venda;

int main(void) {
  FILE *arquivo;
  char resposta = ' ';
  int opcao = 0;
  int qtdVendas = 0;
  int qtdVendasCadastrar = 0;
  char nomeCliente[100];
  char linha[100];
  float valorReferencia = 0;
  int qtdVendasAcima = 0;
  int vendasDoisItens = 0;
  int comprasAposMeioDia = 0;
  int totalMulheres = 0;
  int itensTotal = 0;
  int comprasHomens = 0;
  float totalComprasMulheres = 0;
  float somaTotalCompras = 0;
  int tamNome = 0;
  int menorNomeIdx = -1;
  int maisVelhoIdx = -1;
  float mediaValorCompra = 0;
  float maiorValorCompra = 0;
  float totalValorCompras = 0;

  // Variáveis auxiliares para cálculos detalhados
  int totalVendasRealizadas = 0;
  int totalItensVendidos = 0;
  int qtdItensNomeCliente = 0;
  int qtdItensMaisNovo = 0;
  float somaValoresNomeCliente = 0;
  float mediaValoresNomeCliente = 0;
  float valorMaisAltoCliente = 0;

  // Arrays auxiliares para armazenar detalhes de cada venda
  char nomes[100][100];
  char sexos[100];
  int idades[100];
  int qtdItens[100];
  float totalCompras[100];
  char fim[100][100];
  int tamNomeAux = 0;
  int idadeMenor = 0;
  int indiceMenor = 0;

  Venda *vendas = (Venda *)malloc(totalVendasRealizadas * sizeof(Venda));

  // Loop do menu principal com várias mensagens para guiar o usuário
  do {
    printf("\033[0;35m----------------------------MENU "
           "PRINCIPAL----------------------------\033[0m\n");
    printf("1. Cadastrar novas vendas\n");
    printf("2. Ver informações de uma venda específica, baseado no nome do "
           "cliente\n");
    printf("3. Ver informações de todas as vendas\n");
    printf("4. Encerrar o programa\n");
    printf("\033[0;35m---------------------------------------------------------"
           "--------------\033[0m\n");
    printf("Escolha uma opção: ");
    scanf("%i", &opcao);

    system("clear");

    if (opcao == 1) {
      // Lógica para cadastrar vendas
      printf("Opção 1 escolhida.\n");
    } else if (opcao == 2) {
      // Lógica para ver informações de uma venda específica
      printf("Opção 2 escolhida.\n");
    } else if (opcao == 3) {
      // Lógica para ver informações de todas as vendas
      printf("Opção 3 escolhida.\n");
    } else if (opcao == 4) {
      printf("Encerrando o programa...\n");
    } else {
      printf("\033[1;31m\nErro: Opção inválida! Tente novamente.\033[0m\n");
    }

  } while (opcao != 4 &&
           resposta != 'x'); // Fechando o loop com o 'while' correto

  free(vendas);
  printf("\nPrograma encerrado.\n");
  return 0;
}
