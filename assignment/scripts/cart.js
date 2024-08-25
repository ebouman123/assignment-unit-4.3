console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item) {
    basket.push(item);
    return true;
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
