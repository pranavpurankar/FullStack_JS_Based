// Design a rate limiter

function rateLimiter(fn,limit){
  let lastCallTime = 0; // Keep track of the last function call time
  
  return function(...args){
    const now = Date.now(); // Get the current time

    if(now - lastCallTime < limit){
      return "Rate limit exceeded";
    }

    // Otherwise, call the original function & update the last call time
    lastCallTime = now;
    return fn(...args);
  };
}

function myFunction(){
  console.log("Function executed");
}

const limitedFunction = rateLimiter(myFunction, 1000);
limitedFunction();
setTimeout(limitedFunction, 1500);