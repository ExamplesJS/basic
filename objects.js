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
        can be declare between "", '' or none, by default utilize "", after declare, set the value with :,
        this value declared use "", '', `` to string or none to numbers.
        to most property separete with ,
        this have two properties:
        
        @argument {number} data
        @argument {string} properties
        @example
**/
        var exampleObject = {
            "data": 1,
            "properties": "Hello object",
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
        To access property of object, insert . after its representation or ["name property"].
        @example
**/
        console.log(objectIntoAnother.data) // 1
        console.log(objectIntoAnother["data"]) // 1
/**
        An object can declare a function into property value.
        @example
**/
        var objectFuction = {
            "myFunction" : function() {
                console.log("Hello function");
            }
        }

        objectFuction.myFunction();

/**
@description
        The object in javascript can instance another objects, following the object-oriented programming model.
        Exist two types of instances. 
        
        @class ClassExample 
        added in ECMAScript 2015, is most utilized to instance objects.
        In to example is utilized the method constructor, which receives by parameters two properties.
        
        @param {String} textParam
        @param {number} numberParam

        @argument {Object} this utilize to reference of class.

        @example
**/
        class ClassExample {
                constructor(textParam, numberParam) {
                        this.textParam = textParam;
                        this.numberParam = numberParam;
                }
        }
/**     
        Utilize the @argument new, what create an object instance @class Person
        @example
**/
        var classExample = new ClassExample("Hello class", 1);

        console.log(classExample.textParam); // "Hello class"
        console.log(classExample.numberParam); // 1
/**
        There are also object instance per function declaration.
        In to example is utilized the method constructor, which receives by parameters two properties.

        @argument {Object} InstanceFunction

        @param {String} textParam
        @param {number} numberParam

        @argument {Object} this Also here utilize to reference of function/object.

        @example
**/
        var InstanceFunction = function(textParam, numberParam) {
                this.textParam = textParam;
                this.numberParam = numberParam;
        }
/**     
        Utilize the @argument new, what create an object instance @argument {Object} InstanceFunction
        @example
**/
        var instanceFunction = new InstanceFunction("Hello instance function", 2);

        console.log(instanceFunction.textParam); // "Hello instance function"
        console.log(instanceFunction.numberParam); // 2

        /**
        function methods and property of class and object, will be treated in a separate file. 
        **/