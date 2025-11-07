// LETS TEST YOUR GRADE



let student = prompt("Enter the name of student")
console.log("Student name is " , student )
let score = prompt("enter student marks" )
console.log( student , " marks is " , score )

if (score >= 80 && score <= 100 ){
    console.log("You got A, GREAT WORK ")
}else if (score >= 60 && score <= 79 ){
    console.log("You got B, CAN DO BETTER ")
}else if (score >= 40 && score <= 59 ){
    console.log("You  got c, need to work")
}else if (score >=0 && score <=39){
    console.log("You got F , work very very hard ")
}else
{
    console.log("u enter invalid number")
}