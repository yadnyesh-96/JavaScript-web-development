const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName()); //John Doe


//accessing the object values
const student={
    stdRollNo:11,
    stdName:"Yadnyesh",
    stdSubject:"Science"
};

console.log(student.stdRollNo+","+student.stdName+","+student.stdSubject);
//11,Yadnyesh,Science


