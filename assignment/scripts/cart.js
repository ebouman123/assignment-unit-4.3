console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;


// Original addItem function
// function addItem(item) {
//     basket.push(item);
//     return true;
// }


// Stretch addItem function
function addItem(item) {
    if (isFull() === false){
        basket.push(item);
        return true;
    }
    else {
        console.log(`Basket is already full, will return false`);
        return false;
    }
}


console.log(basket);
console.log(`Adding Pasta (expect true)`, addItem(`Pasta`));
console.log(`Adding Marinara Sauce (expect true)`, addItem(`Marinara Sauce`));
console.log(`Adding Parmesan (expect true)`, addItem(`Parmesan`));
console.log(`Basket is now: `, basket);


function listItems() {
    for (i = 0; i < basket.length; i++) {
        console.log(basket[i]);
    }
}

listItems();


function empty() {
    while (basket.length>0){
        basket.pop();
    }
}

empty();
console.log(`Basket should be empty`, empty(), basket);





function isFull() {
    if (basket.length < maxItems){
        return false;
    }
    else {
        return true;
    }
}

console.log(`Should return false`, isFull());
addItem(`Pasta`);
addItem(`Marinara Sauce`);
addItem(`Parmesan`);
addItem(`Butter`);
addItem(`Garlic Bread`);
console.log(`Should return true`, isFull());

console.log(addItem(`Wine`));


function removeItem(remove) {
    for (i = 0; i < basket.length; i++){
        if (basket.indexOf(remove) != -1){
            basket.splice(basket.indexOf(remove), 1);
            return remove;
        }
        else {
            return null;
        }
    }
}

console.log(`Current basket: `, basket);
console.log(`This item was removed: `, removeItem(`Butter`));
console.log(`New contents of the basket: `, basket);
console.log(`Should return null`, removeItem(`Beer`));
console.log(`Current basket: `, basket);




// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
