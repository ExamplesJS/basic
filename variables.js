/**
    @description
        Variables are dynamic representations of a property or given.
        In javascript we have three types of declaration for various variables:
    @argument var 
        @description
        represents a global or function scope variable, depending on where it is declared.
    @argument let 
        @description
        represents a range-only variable from where it is declared.
    @argument const 
        @description
        
represents a constant variable that does not change after being defined, a constant has to be defined.
    @description 
    By adding the = sign to the side of the variable,
    is assigned in the variable the value that is defined.
    @example 
        var variable = 1; 
        let escopeVariable = 2;
        const constantVariable = 3;
**/

/** 
    @argument var
    variable @var variable declared within an object is visible outside its scope.
     @example 
**/
    var variable;

    {
        var variable = 1;
    }
    console.log(variable); // 1
/**
    Assign new value in the variable.
**/
    variable = 2;
    console.log(variable); // 2

/**
    @argument let 
    variable @let escopeVariavel declared within an object is not visible outside its scope
    @example  
**/
    let escopeVariable;
    {
        let escopeVariable = 1;
    }
    console.log(escopeVariable); // undefined
/**
    Assign new value in the variable.
**/
    escopeVariable = 1;
    console.log(escopeVariable); // 1

/**
    @argument const
    Váriavel @const constantVariable once declared, it will not be possible to change its value.
    @example  
**/
    const constantVariable = 1;
    console.log(constantVariable); // 1
/**
    When you assign a new value to the constant, an error will appear.
    constantVariable = 2; // error: Assignment to constant variable.
**/
