/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var lista = [19, 78, 40, 25, 51];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function mostraValor(arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
mostraValor(lista)[1] //78

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function displayValues(arr, n) {
    return arr[n];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var valores = [2334, 65, 23, 867, 34];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(displayValues(valores, 0));
console.log(displayValues(valores, 1));
console.log(displayValues(valores, 2));
console.log(displayValues(valores, 3));
console.log(displayValues(valores, 4));


/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(name) {
    var obj = {
        ligarofodase: {
            quantidadePaginas: 167,
            autor: 'Mark Manson',
            editora: 'Intrínseca'

        },
        poderdohabito: {
            quantidadePaginas: 464,
            autor: 'Charles Duhigg',
            editora: 'Objetiva'
        },
        hobbit: {
            quantidadePaginas: 344,
            autor: 'J.R.R Tolkien',
            editora: 'Harpper Collins Brasil'
        }

    }
    if (!name) return obj;
    console.log(name);
    return obj[name];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

console.log('O autor do livro O Hobbit tem ' + book('hobbit').quantidadePaginas + ' páginas');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro O Hobbit é ' + book('hobbit').autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro O Hobbit foi publicado pela editora ' + book('hobbit').editora);