function ysyOrNay() {
    return new Promise((resolve, reject) => {
        const val = Math.round(Math.random() * 1);
        
        val ? resolve("Lucky!!!") : reject("Nope , try again.");
    });
}

async function msg() {
    try {
        const msg = await ysyOrNay();
        console.log(msg);
    } catch (err) {
        console.log(err);
    }
}

msg();
msg();
msg();
msg();
msg();
msg();
msg();
msg();
msg();
msg();