
//  console.log("Aniket");
//  alert("aniket");
// console.log("its my first code")
// let name = prompt("enter your name" );
// console.log (name);

// let prime = prompt("enter your number to check its prime or not ")
// console.log("your number is" , prime)
// if ( prime % 5 === 0){
//     console.log(prime,"is multiple of 5 ");
// }
// else{
//     console.log(prime,"is NOT multiple of 5");
// }


// ifelse(prime == 0)
// {
// console.log("you enter a number that is zero ")
// }


let student = prompt("Enter the name of student")
console.log("Student name is " , student )
let score = prompt("enter student marks" )
console.log( student , " marks is " , score )

if (score >= 80 && score <= 100 ){
    console.log("u got A, GREAT WORK ")
}else if (score >= 60 && score <= 79 ){
    console.log("u got B, CAN DO BETTER ")
}else if (score >= 40 && score <= 59 ){
    console.log("u got c, need to work hard")
}else if (score >=0 && score <=39){
    console.log("u got F , work very very hard ")
}else
{
    console.log("u enter invalid number")
}