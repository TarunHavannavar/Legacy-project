function calculateTotal(items) {
    let total = 0;
    items.forEach(item => {
        total += item.quantity * item.price;
    });
    return total;
}

const inventory = [
    { name: "Apples", quantity: 10, price: 5.00 },
    { name: "Oranges", quantity: 15, price: 7.00 }
];

console.log("Total value of inventory:", calculateTotal(inventory)); // Output: Total value of inventory: 215
