/**
    @description
        Variáveis em Javascript possuem tipagem fraca, isso é podem assumir qualquer estado
        no decorrer da execução, onde podem possuir tipos dinâmicos ou tipos de dados.
        
        Tipos dinâmicos
            Os tipo dinâmicos utilizados em javascript são:
            
            @argument number 
                @description
                Representa uma váriavel do tipo número.
            
            @argument string 
                @description
                Representa uma váriavel do tipo texto.
            
            @argument boolean 
                @description
                Representa uma váriavel do tipo lógico.

        @example @argument number
        Váriavel @var {number} numberVar recebe um número e assume o tipo number.
        @argument typeof mostra o tipo de dado que a váriavel possuí no momento.
**/
        var numberVar = 0;
        console.log(numberVar); // 0
        console.log(typeof numberVar); // number
        
/** 
        @example @argument string
        Váriavel @var {string} strVar recebe um texto e assume o tipo string.
**/
        var strVar = "Hello types";
        console.log(strVar); // Hello types
        console.log(typeof strVar); // string

/** 
        @example @argument boolean
        Váriavel @var {boolean} logicVar recebe uma atribuição lógica true e assume o tipo boolean.
**/
        var logicVar = true;
        console.log(logicVar); // true
        console.log(typeof logicVar); // boolean
/**
        Tipos de dados primitivos
        Os tipo de dados primitivos utilizados em javascript são:
        
        @argument Boolean
            @description
            Representa um dado na váriavel do tipo boolean, 
            onde pode ser atribuída as condições lógicas true e false.
        
        @argument Null 
            @description
            Representa um dado na váriavel do tipo null, 
            onde é considerada nula ou inválida.
        
        @argument Undefined 
            @description 
            Representa um dado na váriavel do tipo undefined, 
            onde é considerada indefinida.
       
        @argument Number
            @description
            Representa um dado na váriavel do tipo number, 
            onde pode ser considerada qualquer número entre 
            -(2^53 - 1) e (2^53 - 1), e três tipo simbolicos:
            @argument +Infinity, significa um número infinito positivo.
            @argument -Infinity, significa um número infinito negativo.
            @argument NaN, que significa não é um número.
        
        @argument String
            @description
            Representa um dado na váriavel do tipo string, 
            onde é considerada qualquer tipo de texto circundado por "", '' ou ``.
**/
/**
        @example @argument Boolean
        Váriavel @var {boolean} logicVar  como já declarada nesse documento, essa vai ser reutiliza-da,
        recebendo uma atribuição lógica false e assume o tipo boolean.
**/
        console.log(logicVar); // true
        
        logicVar = false;

        console.log(logicVar); // false
        console.log(typeof logicVar); // boolean

/**
        @example @argument Null
        Váriavel @var {object} nullVar recebe uma atribuição null.
**/
        var nullVar = null;

        console.log(nullVar); // false
        console.log(typeof nullVar); // object
/**
        @example @argument Undefined
        Váriavel @var {undefined} undefinedVar ao não atribuir valor a uma váriavel essa se torna undefined.
**/
        var undefinedVar;

        console.log(undefinedVar); // undefined
        console.log(typeof nullVar); // undefined

/**
        @example @argument Number
        Váriavel @var {number} numberVar  como já declarada nesse documento, 
        essa vai ser reutiliza-da, recebendo um novo número.
**/
        console.log(numberVar); // 1
        
        numberVar = 0;

        console.log(numberVar); // 1
        console.log(typeof numberVar); // number
        console.log(typeof Infinity); // number
        console.log(typeof -Infinity); // number
        console.log(typeof NaN); // number
/**
        @example @argument String
        Váriavel @var {string} strVar  como já declarada nesse documento, 
        essa vai ser reutiliza-da, recebendo um novo texto.
**/
        console.log(strVar); // Hello types

        strVar = "Hello primitive value";

        console.log(strVar); // Hello primitive value
        console.log(typeof strVar); // string
/** 
        Object type
        Há também o tipo @argument object, esse por ser mais complexo será tratado em um arquivo em separado.
**/