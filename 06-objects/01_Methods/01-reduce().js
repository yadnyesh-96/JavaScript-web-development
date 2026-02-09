

const nums=[10, 20, 30]

const res = nums.reduce((sum,n)=> {
    return sum+n;
}, 0);

console.log(res) //60


const words= ["js","react","js"];

const count = words.reduce((acc,word)=>{
    acc[word]=(acc[word]||0)+1;
    return acc;
},{})

console.log(count) //{ js: 2, react: 1 }


const users = [{id:1,name:"A"},{id:2,name:"B"}];

const byId=users.reduce((acc,user)=>{
    acc[user.id]=user;
    return acc;
},{});

console.log(byId) // { '1': { id: 1, name: 'A' }, '2': { id: 2, name: 'B' } }