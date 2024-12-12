const log = console.log;

(function chai(){
    //Named IFFE
    log('DB connected');
})();

// Unnamed IFFE
((name) => {log(`trying arrow ${name}`)})('pranav');

log("\n\n")

let billion = 1_000_000_000;
log(Math.pow(2,3));
log(Math.log(10));