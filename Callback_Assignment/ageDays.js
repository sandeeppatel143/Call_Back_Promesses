const person={
    firstName:"Sandeep",
    lastName:"Patel",
    age:21,
}

function ageInDays(personObject,callback){
    const fullName=`${personObject.firstName} ${personObject.lastName}`
    const ageInDays=personObject.age*365;
    callback(fullName,ageInDays);
}

function logResult(fullName,ageInDays){
    console.log(`The person's fullName is ${fullName} and their age in days is ${ageInDays}`);
}

ageInDays(person,logResult)
