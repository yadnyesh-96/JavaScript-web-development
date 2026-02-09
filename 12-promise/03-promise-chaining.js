Promise.resolve(5)
  .then(x => x * 2)
  .then(x => x + 3)
  .then(result => console.log(result));


  /*
  Each .then() returns a new Promise
  Returned value → next .then()
  */