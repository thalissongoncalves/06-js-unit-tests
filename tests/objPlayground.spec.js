const { calculator, arrayGenerator } = require('../src/objPlayground');

/*
  *Função calculator*

    Implemente a função calculator que recebe dois números inteiros como parâmetro e retorna um objeto com as seguintes chaves:
      - sum;
      - mult;
      - div;
      - sub.
    Para cada chave atribua como valor a operação correspondente à sua chave:
      - sum: retorna o resultado da soma dos dois números;
      - mult: retorna o resultado da multiplicação dos dois números;
      - div: retorna o resultado da divisão dos dois números;
      - sub: retorna o resultado da subtração dos dois números.

    Os resultados das divisões devem sempre ser arredondados para baixo.

    Parâmetros:
    - Dois números inteiros.

    Comportamento:
    calculator(1, 2); // { sum: 3, mult: 2, div: 0, sub: -1 }

  *Função arrayGerenator*

    Depois de ter implementado a função calculator, desenvolva uma função que converta objetos em arrays, de chaves, valores ou ambos.
    A sua função deve receber dois parâmetros:

      * o primeiro parâmetro deve ser uma string que indica o tipo de conversão;
      * o segundo parâmetro deve ser um objeto semelhante ao que é retornado pela função calculator que você acabou de desenvolver.

    Parâmetros:
    - O primeiro parâmetro deve receber uma string que indica o tipo de conversão;
    - O segundo parâmetro deve ser um objeto no formato { sum: 3, mult: 2, div: 0, sub: -1 };

    Comportamento:
    arrayGenerator('keys', { sum: 3, mult: 2, div: 0, sub: -1 }) // [ 'sum', 'mult', 'div', 'sub' ]
    arrayGenerator('values', { sum: 3, mult: 2, div: 0, sub: -1 }) // [ 3, 2, 0, -1 ]
    arrayGenerator('entries', { sum: 3, mult: 2, div: 0, sub: -1 }) // [ [ 'sum', 3 ], [ 'mult', 2 ], [ 'div', 0 ], [ 'sub', -1 ] ]
*/

describe('7 - Implemente as funções `calculator` e `arrayGenerator`', () => {
  it('Verifica se a função `calculator` retorna os valores esperados', () => {
    expect(calculator(1, 3)).toEqual({ sum: 4, mult: 3, div: 0, sub: -2 });
    expect(calculator(10, 3)).toEqual({ sum: 13, mult: 30, div: 3, sub: 7 });
    expect(calculator(5, 2)).toEqual({ sum: 7, mult: 10, div: 2, sub: 3 });
    expect(calculator(0, 0)).toEqual({ sum: 0, mult: 0, div: NaN, sub: 0 });
    expect(calculator(0, 1)).toEqual({ sum: 1, mult: 0, div: 0, sub: -1 });
    expect(calculator(5, 5)).toEqual({ sum: 10, mult: 25, div: 1, sub: 0 });
    expect(calculator(-10, 5)).toEqual({ sum: -5, mult: -50, div: -2, sub: -15 });
  });

  it('Verifica se a função `arrayGenerator` retorna os valores esperados', () => {
    expect(arrayGenerator('keys', { sum: 4, mult: 3, div: 0, sub: -2 })).toEqual([ 'sum', 'mult', 'div', 'sub' ]);
    expect(arrayGenerator('keys', { chave: 'valor' })).toEqual([ 'chave' ]);
    expect(arrayGenerator('values', { sum: 13, mult: 30, div: 3, sub: 7 })).toEqual([ 13, 30, 3, 7 ]);
    expect(arrayGenerator('values', { sum: 4, mult: 3, div: 0, sub: -2 })).toEqual([ 4, 3, 0, -2 ]);
    expect(arrayGenerator('entries', { sum: 13, mult: 30, div: 3, sub: 7 })).toEqual([ ['sum', 13], ['mult', 30], ['div', 3], ['sub', 7] ]);
    expect(arrayGenerator('entries', { sum: 4, mult: 3, div: 0, sub: -2 })).toEqual([ ['sum', 4], ['mult', 3], ['div', 0], ['sub', -2] ]);
    expect(arrayGenerator('entries', { sum: -5, mult: -50, div: -2, sub: -15 })).toEqual([ ['sum', -5], ['mult', -50], ['div', -2], ['sub', -15] ]);
  });
});
