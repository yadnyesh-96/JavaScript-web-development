

async function calculate(){
    const x= await Promise.resolve(10);
    const y= await Promise.resolve(20);

    console.log(x+y);
}

calculate();  //30

/*
  - await pauses only this function
  - JS event loop continues
  - Values are extracted from Promises
*/