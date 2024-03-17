/* Closure: it is combination of functions bundled together with their surrounding states (lexical scope). 
In short, in closure the inner function should have the access outer function's variable, including global variables also.
On other hand, the outer function have the access of the global variables but not having access of inner function's variable.
*/
var a = "Hello";
function createCounter() {
    console.log("Global variable a:", a);
    var count = 0;
    function counter() {
        count++;
        console.log(count);
    }
    return counter;
}
var increment = createCounter();
increment();

/* Output: Global variable a: Hello
           1
*/