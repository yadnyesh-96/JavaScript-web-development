

function number_checker(num,call_back){
  call_back(num);
}

function chk_num(a){
    if(a%2==0) console.log("EVEN");
    else console.log("ODD");
}

number_checker(8,chk_num)


function counter(){
    let count=0;

    return function(){
        count ++;
        return count;
    };
}

const c1=counter();

console.log(c1());
console.log(c1());


const person = {
    name:"Yadnesh",

    greet() {
        console.log(`Hello ${this.name}`);
    }
};

person.greet()


const student = {
    std_name="Raghav",

    gesture: () =>{
        console.log(`Welcom ${student.std_name}`)
    }
}