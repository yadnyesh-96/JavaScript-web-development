
let i=527;
let rev=0;
while(i!=0){
    let rem=i%10;
    rev=rev*10+rem;
    i=Math.floor(i/10);
}

console.log(rev) //725