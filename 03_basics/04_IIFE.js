// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();  // if we here do not use ; then iife does not know where to stop execution thats why it throws error if we use ; then it run clearly 


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
