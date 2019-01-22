/**
    @description
    At programming, conditions is primordial to comparison and decisions at program execution.
    
    Comparison:
    To comparison of values utilize the comparator operators:
        @argument == 
            @description 
            comparator equal the other.
            @example
*/
            var comparator = 1;
            var equalComparator = 1;
            console.log("==");
            console.log(comparator == equalComparator); // true.
/**       
        @argument != 
            @description 
            comparator different the other.
            @example
*/
            console.log("!=");
            var diffComparator = 2;
            console.log(comparator != diffComparator); // true.
/**       
        @argument ===
            @description 
            comparator exactly equal the other.
            @example
*/
            let exactlyEqualComparator = "1";
            console.log("===");
            console.log(comparator == exactlyEqualComparator); // true.
            console.log(comparator === exactlyEqualComparator); // false.
/**       
        @argument !==
            @description 
            comparator exactly different the other.
            @example
*/
            let exactlyDiffComparator = "2";
            console.log("!==");
            console.log(comparator != exactlyDiffComparator); // true.
            console.log(comparator !== exactlyDiffComparator); // true.
/**       
        @argument > 
            @description 
            comparator larger than the other.
            @example
*/
            var smallComparator = 0;
            console.log(">");
            console.log(comparator > smallComparator); // true.
/**       
        @argument <
            @description 
            comparator smaller than the other.
            @example
*/
            var largerComparator = 2;
            console.log(">");
            console.log(comparator < largerComparator); // true.
/**       
        @argument >=
            @description 
            comparator larger or equal than the other.
            @example
*/
            console.log(">=");
            console.log(comparator >= equalComparator); // true.
/**       
        @argument <=
            @description 
            comparator smaller or equal than the other.
            @example
*/
            console.log("<=");
            console.log(comparator <= equalComparator); // true.
/**
   To more of one expressions utilize the logic operators:
        @argument &&
            @description 
            operator what returning true, if two or most expressions are true.
            @example
*/
            console.log("&&"); 
            console.log((comparator < largerComparator) && (comparator <= equalComparator)); // true.
            console.log((comparator < smallComparator) && (comparator <= equalComparator)); // false.
/**       
        @argument ||
            @description 
            operator what returning true, if one expression are true.
            @example
*/
            console.log("||");
            console.log((comparator < largerComparator) || (comparator <= equalComparator)); // true.
            console.log((comparator < smallComparator) || (comparator <= equalComparator)); // true.
            console.log((comparator < smallComparator) || (comparator > largerComparator)); // false.
/**       
        @argument !
            @description 
            operator what returning true, if denying the expression are true.  
            @example
*/
        console.log("!");
        console.log(!comparator == equalComparator); // false.
/**             
        Decisions:
        Utilize the reserved words to decisions:
        @argument if
        @argument else if
        @argument else.
 **/