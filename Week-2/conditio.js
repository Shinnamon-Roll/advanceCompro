const istatus = 400;

if (istatus) {
    console.log("OK")
} else if (istatus === 400) {
    console.log("Bad Request")
} else {
    console.log("Unknown Status")
}

switch (istatus) {
    case 200:
        console.log("OK")
        break;
    case 400:
        console.log("Bad Request")
        break;
    default:
        console.log("Unknown Status")
}

const result = istatus === 200 ? "OK" : "Bad Request"
console.log(result)