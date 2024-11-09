const accountId =14553
let accountEmail="mandarzadpe01@gmail.com"
var accountPassword="Mandar0107@"
accountCity="Pune"
let accountState;
// accountId=2  //not allowed

accountEmail="hc@hc.com";
accountPassword="212121"
accountCity="Mumbai"

console.log(accountId);

/*
Prefer not to use var because of issue in block scope
and functional scope.
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])