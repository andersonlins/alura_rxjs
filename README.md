# Alura Angular RxJS

Foi abordado os seguintes operadores:

  - Operadores de transformação:
    - pluck
    - map
  - Operadores de fluxo:
    - switchMap
    - merge
  - Operadores de filtro:
    - filter
    - debounceTime
    - distinctUntilChanged


Pontos importantes aprendidos:

  - Observables podem gerar um vazamento de memória caso eles não sejam devidamente destruídos;
  - Angular fornece um modo de gerenciar o ciclo de vida dos observables automaticamente, ou seja, iniciá-los e destruí-los no momento certo;
    - exemplo: "*ngIf="obj$ | async as obj"
  - Podemos comparar um observable com um cano, a informação entra e durante a passagem no 'cano' podemos analisar, transformar e filtrar o fluxo de informação que percorre;
  - Operador Tap, podemos analisar o valor naquele momento do fluxo, ex: console.log
  - Operador Map, podemos alterar o valor antes de retorná-lo
  - Operador SwitchMap, podemos redirecionar o fluxo do observable para outro fluxo, ex: pegar as teclas digitadas num input e no momento certo chamar a api para realizar uma consulta, sendo a chamada da api um outro observable
  - Operador Merge, podemos juntar dois tipos de observables;
  - Operador Filter, podemos aplicar um if e o fluxo só prossegue se atender a condição
  - Operador debounceTime, podemos adicionar um tempo de espera antes que o fluxo prossiga pra outro operador;
  - Operador distinctUntilChanged, apenas prossegue no fluxo se for diferente do último valor válido



