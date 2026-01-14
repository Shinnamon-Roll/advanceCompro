const promise = new Promise((resolve, reject) => {
    const res = true;

    if (res) {
        resolve("Promise is resolved");
    } else {
        reject(Error("Promise is rejected"));
    }
})

promise.then(
    (res) => console.log(res),
    (err) => console.log(err.message)
)