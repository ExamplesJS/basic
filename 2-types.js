/**
    @description
        Javascript variables have weak typing, this is can assume any state
        in the course of execution, where they may have dynamic types or data types.
        
        Dynamic types
            The dynamic types used in javascript are:
            
            @argument number 
                @description
                Represents a number-type variable.
            
            @argument string 
                @description
                Represents a text-type variable.
            
            @argument boolean 
                @description
                Represents a logical type variable.

        @argument number
        Variable @var {number} numberVar receives a number and assumes the type number.
        @argument typeof shows the type of data that the.
        @example 
**/
        var numberVar = 0;
        console.log(numberVar); // 0
        console.log(typeof numberVar); // number
        
/** 
        @argument string 
        Variable @var {string} strVar receives a text and assumes the string type.
        @example 
**/
        var strVar = "Hello types";
        console.log(strVar); // Hello types
        console.log(typeof strVar); // string

/** 
        @argument boolean
        Váriavel @var {boolean} logicVar receives a logical assignment true and assumes the boolean type.
        @example 
**/
        var logicVar = true;
        console.log(logicVar); // true
        console.log(typeof logicVar); // boolean
/**
        Primitive data types
        The primitive data types used in javascript are:
        
        @argument Boolean
                @description
                Represents a data in the boolean type variable, where the logical conditions true and false can be assigned.
        
        @argument Null 
                @description
                Represents a data in the null-type variable, where it is considered null or invalid.        
        
        @argument Undefined 
                @description 
                Represents a data in the variable of type undefined, where it is considered indefinite.
       
        @argument Number
                @description
                Represents a data in the number type variable,
                where any number between
                - (2 ^ 53-1) and (2 ^ 53-1), and three symbolic types:
                @argument + Infinity, means a positive infinite number.
                @argument -Infinity means a negative infinite number.
                @argument NaN, which means is not a number.
        
        @argument String 
                @description
                Represents a data in the string-type variable,
                where any kind of text surrounded by "", "or" is considered.
**/
/**
        @argument Boolean
        Variable @var {boolean} logicVar as already stated in this document, this will be reused,
        receiving a logical assignment false and assumes the boolean type.
        @example 
**/
        console.log(logicVar); // true
        
        logicVar = false;

        console.log(logicVar); // false
        console.log(typeof logicVar); // boolean

/**
        @argument Null
        Variable @var {object} nullVar gets an null assignment.
        @example 
**/
        var nullVar = null;

        console.log(nullVar); // false
        console.log(typeof nullVar); // object
/**
        @argument Undefined
        Variable @var {undefined} undefinedVar not assigning value to a variable that becomes undefined.
        @example 
**/
        var undefinedVar;

        console.log(undefinedVar); // undefined
        console.log(typeof nullVar); // undefined

/**
        @argument Number
        Variable @var {number} numberVar as already stated in this document, it will be reused, receiving a new number.
        @example 
**/
        console.log(numberVar); // 1
        
        numberVar = 0;

        console.log(numberVar); // 1
        console.log(typeof numberVar); // number
        console.log(typeof Infinity); // number
        console.log(typeof -Infinity); // number
        console.log(typeof NaN); // number
/**
        @argument String
        Variable @var {string} strVar  as already stated in this document, it will be reused, receiving a new text.
        @example  
**/
        console.log(strVar); // Hello types

        strVar = "Hello primitive value";

        console.log(strVar); // Hello primitive value
        console.log(typeof strVar); // string
/** 
        Object type
        There is also the type @argument object, this being more complex will be treated in a separate file.
**/