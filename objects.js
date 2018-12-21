/**
    @description
        Javascript object are structure represented that may have data, properties or functions,
        an object has a dynamic type, which can be any dynamic or primitive type.
        For utilize the object declare:
        
        @argument var
        @argument let
        @argument const
        @argument class
        @argument Object

        
        @var {Object} exampleObject, as declared utilizing @argument var, 
        are utilize {} to representation of object, into object their properties 
        can be declare between "", '' or none, by default utilize "", after declare, set the value with :
        to most property separete with ,
        this have two properties:
        
        @argument {number} data
        @argument {string} properties
        @example
**/
        var exampleObject = {
            "data": 1,
            "properties": "Hello object"
        };

        console.log(exampleObject); // {data: 1, properties: "Hello object"}

/**      
        An object can own another object, as in the example.
        @var {Object} objectIntoAnother
        @example
**/
        var objectIntoAnother = {
            "objectInto": {
                "innerData": 2
            },
            "data": 1
        }

        console.log(objectIntoAnother) // {objectInto: {…}, data: 1}

/**
        To access property of object, insert . after its representation.
        @example
**/
        console.log(objectIntoAnother.data) // 1