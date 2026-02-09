// Passing Function to another Function 
// we can also pass the function as a function argument into another function 

/*
funtion avg(a,b,fn){
    return fn(a,b)/2;
}
*/

function add(a,b){
    return a+b;
}

function avg(a,b,sum){
    return sum(a,b)/2;
}

let res=avg(10,20,add);

console.log(res);

console.table("Product's List :");

let products = [
  { name: 'iPhone', price: 900 },
  { name: 'Samsung Galaxy', price: 850 },
  { name: 'Sony Xperia', price: 700 },
];

function compareBy(propertyName){
    return function (a,b){
        let x=a[propertyName];
        let y=b[propertyName];

        if(x>y){
            return 1;
        }else if(x<y){
            return -1;
        }else{
            return 0;
        }
    }
}

console.log("Product sorted by : Price");
products.sort(compareBy("price"));

console.table(products);


function cmTOIn(length){
    return length/2.54;
}

function inTocm(length){
    return length*2.54;
}

function converter(fn,length){
    return fn(length);
}

let conv=converter(cmTOIn, 10);
console.log(conv)                   // 3.937007874015748

let conv1=converter(inTocm, 10);
console.log(conv1)              //    25.4