function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

async function longRunningOperation() {
    return 42;
}

async function run() {
    console.log("Starting long running operation...");
    await promiseTimeout(3000);
    const result = await longRunningOperation();
    console.log("Response:", result);
    console.log("Long running operation completed.");
}

run();