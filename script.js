let quantity = Math.floor(Math.random() * 10000);
let currency = ['Dolars', 'Bitcoins', 'Euros', 'Reais', 'Ethers', 'Ripples', 'Cardanos', 'Pesos Argentinos'];
let years = [1,2,3,4,5,6,7,8,9,10];

let fortuneTeller = () =>{
    let i = Math.floor(Math.random()* currency.length)
    let j = Math.floor(Math.random() * years.length)
    console.log(`You will have: ${quantity} ${currency[i]} in the next ${years[j]} years`)
}
