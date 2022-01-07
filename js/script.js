const myBind = function (fn, context, ...argums) {

    return function (...args){
        fn.apply(context, [...argums, ...args]);
 }

}
                                                  
function person(newAge, ...cash) {
    this.age = newAge;
    console.log('cash = ',cash);
    this.cash = cash.reduce((acc,val)=> acc+val);
    console.log(this);
}

const namePerson = { userName: "Kate" };
const funcBind = myBind(person, namePerson, 25, 50); 
funcBind(100); 
funcBind(50,25);
funcBind(50,25,75);