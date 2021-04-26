//set the variables that will compose the random message
let currency = ['Dolars', 'Bitcoins', 'Euros', 'Reais', 'Ethers', 'Ripples', 'Cardanos', 'Pesos Argentinos'];
let years = [1,2,3,4,5,6,7,8,9,10];
//random select an array element and output it
let i = (array) =>{
    let index = Math.floor(Math.random()* array.length);
    return array[index]
};
//get the data together and output the random message
let fortuneTeller = () =>{
    let quantity = Math.floor(Math.random() * 10000);
    return `You will have: ${quantity} ${i(currency)} in the next ${i(years)} years`
}


