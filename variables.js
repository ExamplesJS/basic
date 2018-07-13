/**
<<<<<<< HEAD
@description
Variáveis são representações dinâmicas de uma propriedade ou dado.
Em javascript possuímos três tipos de declaração para váriaveis:
=======
    Variáveis são representações dinâmicas de uma propriedade ou dado.
    Em javascript possuímos três tipos de declaração para váriaveis:
    @argument var representa uma váriavel de escopo global ou de escopo, dependendo de onde é declarada.
    @argument let representa uma váriavel somente de escopo de onde é declarada.
    @argument const representa uma váriavel constante que não muda após ser definida.
*/
>>>>>>> 7fbb7421e292ed4bc86fa9a4b66eb1ea7fe1db7b

@argument var @description
representa uma váriavel de escopo global ou de função, dependendo de onde é declarada.
@argument let @description
representa uma váriavel somente de escopo de onde é declarada.
@argument const @description
representa uma váriavel constante que não muda após ser definida, uma constante tem que ser definida.

@description Ao adicionar o sinal de =  ao lado da váriavel, 
é atribuído na váriavel o valor que for definido.
@example 
    var variable = 1; 
    let escopeVariable = 2;
    const constantVariable = 3;
**/

/** 
@example @argument var 
Váriavel @var variable declarada dentro de um objeto é visível fora do seu escopo. 
**/
    {
        var variable = 1;
    }
    console.log(variable); // 1
/**
Atribuir novo valor na váriavel.
**/
    variable = 2;
    console.log(variable); // 2

/**
@example @argument let
Váriavel @var escopeVariavel declarada dentro de um objeto não é visível fora do seu escopo. 
**/
    let escopeVariable;
    {
        let escopeVariable = 1;
    }
    console.log(escopeVariable); // undefined
/**
Atribuí valor a váriavel 
**/
    escopeVariable = 1;
    console.log(variable); // 1

/**
@example @argument const
Váriavel @const constantVariable uma vez declarada não será possível alterar o seu valor. 
**/
    const constantVariable = 1;
    console.log(constantVariable); // 1
/**
Ao atribuir novo valor a constante, aparecerá um erro.
    constantVariable = 2; // error: Assignment to constant variable.
**/

