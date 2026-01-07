function criticalCode() {
    throw "throwing an exception";
}

function logError(theException) {
    console.log(theException);
}

console.log("\n-- Demonstrating try...catch...finally --");

try {
    criticalCode();
} catch (ex) {
    console.log("Caught exception: " + ex);
    logError(ex);
}

console.log("\n-- Demonstrating throw statement --");

try {
    throw "An exception thrown in try block";
} catch (ex) {
    console.log("Caught exception: " + ex);
    logError(ex);
}

console.log("\n-- Demonstrating finally block --");

try {
    criticalCode();
} catch (ex) {
    console.log("Caught exception: " + ex);
    logError(ex);
} finally {
    console.log("This is the finally block executing.");
}

function hello() {
    console.log("Throwing from hello function");
}