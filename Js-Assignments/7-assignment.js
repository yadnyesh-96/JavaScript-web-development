
//T A1:
const car = {
  brand: "BMW",
  speed: 120,
  showSpeed() {
    console.log(this.speed);
  }
};

// here these can refer the corrent context values

//T A2:  Rename key std_name → name without mutating object.

car.std_name=car.name;
delete car.name;

const student = { std_name: "Raghav", age: 20 };

const { std_name, ...rest } = student;

const renamed = {
  ...rest,
  name: std_name
};

console.log(renamed);
// { age: 20, name: "Raghav" }


//T B1:  Extract name using destructuring.
const user = { name: "A", age: 20 };

const {name,age}=user;
console.log(name);      //A

//T B3: Extract first & third element.  
const arr = [1, 2, 3];

const [a, ,c]=arr;
console.log(a); //1
console.log(c); //3

//T C1:   Create [2, 4, 6]

const nums = [1, 2, 3];

const res=nums.map(n=>n*2)
console.log(res)            //[ 2, 4, 6 ]

//T C2:     Extract the names

const users = [{name:"A"}, {name:"B"}];

const data=users.map(nm=>nm.name)

console.log(data) //  [ 'A', 'B' ]

//T D1:     Filter numbers > 15

const nums1 = [10, 15, 20, 25];

const res1=nums1.filter(n=>n>15);
console.log(res1)                   //[ 20, 25 ]

// T D2:  Filter the active users

const users1 = [
  {name:"A", active:true},
  {name:"B", active:false}
];

const act=users1.filter(n=>n.active)

console.log(act) // [ { name: 'A', active: true } ]

// T E1: (SUM)  Get total price.

const prices = [100, 200, 300];

const total1=prices.reduce((p,n)=>p+n,0);
console.log(total1)                         //600

//  T E2:(count)            O/P = { a:2, b:1, c:1 }
const arr1 = ["a","b","a","c"];

const count1=arr1.reduce((acc,ch)=>{
    acc[ch]=(acc[ch]||0)+1;
    return acc;
},{});
console.log(count1)     //{ a: 2, b: 1, c: 1 }


const students = [
  { name: "A", div: "X" },
  { name: "B", div: "Y" },
  { name: "C", div: "X" }
];


const grp=students.reduce((acc,student)=>{
    
    const key=student.div;
    if(!acc[key]){
        acc[key]=[];
    }

    acc[key].push(student);

    return acc;
},{});

console.log(grp)
/*
{
  X: [ { name: 'A', div: 'X' }, { name: 'C', div: 'X' } ],
  Y: [ { name: 'B', div: 'Y' } ]
}
*/