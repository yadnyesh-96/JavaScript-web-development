let str1 = "abc"
let str2 = "pqr"

let len = str1.length+str2.length;
let res = ""
for(let i=1; i<=len; i++){
    
    if(i%2===0){
        res+=str1.charAt(i);
    }else{
        res+=str2.charAt(i);
    }
}

console.log(res);



