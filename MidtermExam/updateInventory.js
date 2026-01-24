function updateInventory(currentInventory, newInventory) {
    let inventory = {};
    for (let item of currentInventory) {
        inventory[item.name] = item.quantity;
    }
    for (let item of newInventory) {
        if (inventory[item.name]) {
            inventory[item.name] += item.quantity;
        } else {
            inventory[item.name] = item.quantity;
        }
    }
    let result = [];
    for (let item in inventory) {
        result.push({ name: item, quantity: inventory[item] });
    }
    result.sort((a, b) => a.name.localeCompare(b.name));
    return result;
}

const currentInventory = [
    { name: 'item1', quantity: 10 },
    { name: 'item2', quantity: 5 },
    { name: 'item3', quantity: 8 }
];

const newInventory = [
    { name: 'item1', quantity: 5 },
    { name: 'item4', quantity: 7 },
    { name: 'item2', quantity: 10 }
];

console.log(updateInventory(currentInventory, newInventory));
