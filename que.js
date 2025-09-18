// // // // const product = {
// // // //     title: "Ball pen",
// // // //     Rating : 4.5 , 
// // // //     isdeal : true,
// // // //     mrp : 259 ,
// // // //     offer: "5%"
// // // // };
// // // // console.log(product);

// // // // const profile = {
// // // //     username : "Shreya Parikh",
// // // //     isfollow : false,
// // // //     followers : 120,
// // // //     following : 145
// // // // };
// // // // console.log(typeof profile["username"]);

// // // // let mode = "light";
// // // // let color;
// // // // if(mode=="dark"){
// // // //       color = "black";
// // // //     }
// // // //    if(mode == "light"){
// // // //     color = "white";
// // // //    }
// // // //    console.log(color);

// // // //que 1
// // // // let number;
// // // // prompt("Enter a number",number);        //one type of input
// // // // console.log(number);

// // // // if(number%5==0){
// // // //     console.log("The number is multiple of 5");
// // // // }else{
// // // //     console.log("The number is not multiple of 5");
// // // // }


// // // // let marks;
// // // // prompt("Enter your marks",marks);

// // // // if(marks>=80 && marks<=100){
// // // //     console.log("You have scored an A grade");
// // // // }else  if(marks>=70 && marks<89){
// // // //     console.log("You have scored a B grade");
// // // // }else if(marks>=60 && marks<=69){
// // // //     console.log("You have scored a C grade");
// // // // }else if(marks>=50 && marks<=59){
// // // //     console.log("You have scored a D grade");
// // // // }else{
// // // //     console.log("You have scored an F grade");
// // // // }



// // // /*LOOPS*/
// // // //For of loops
// // // // let str ="Apna COllege";
// // // // for(let val of str){
// // // //     console.log("val = ",val);
// // // // }

// // // // //For in loops it returns key value
// // // // let student1 = {
// // // //     name: "Shreya",
// // // //     age: 20,
// // // //     course: "BCA"
// // // // }
// // // // for(let val in student1){
// // // //     console.log(val);
// // // // }


// // // // let num =100;
// // // // for(let i = 0; i<=num;i++){
// // // // if(num%2===0){
// // // //     console.log("num = " ,num);
// // // // }
// // // // }

// // // //QUE 
// // // // let gamenum = 25;
// // // //     let userno = prompt("Enter number");
// // // //     while(userno!=gamenum){
// // // //         userno = prompt("You entered an incorrect number, try again");
// // // //     }
// // // //    console.log("Congratulations! You have guessed the number correctly.");

// // // // const obj = {
// // // //     name1: "Shreya",
// // // //     name2: "Parikh"
// // // // }
// // // // let out = `the name 1 is ${obj.name1} and the name 2 is ${obj.name2}`;
// // // // console.log(out);
// // // // console.log("Shreya \n Parikh")
// // // // console.log("HI! \n HOW ARE YOU ?")
// // // // let Upper = obj.name1.toUpperCase();
// // // // console.log(Upper);

// // // //QUE
// // // // let fullName = prompt("Enter your full name");
// // // // let username = '@' + fullName + fullName.length;

// // // // console.log(username);


// // // let marks = [2,4,4,5,6,3];
// // // let sum = 0;
// // // for(let ans of marks){
// // //     sum += ans;
// // // }
//  let avg  = sum/marks.length;
//  console.log("The average is: " + avg);

// // let items = [34,4,5,3,232,4,5342];

// // for(let i = 0; i<items.length;i++){
// //     let offer = items[i]/10;
// //      items[i] = items[i]-offer;
// //     console.log("The offer is: " + items[i]);
// // }

// // let array = [2,3,4,5,6];

// array.splice(2,2,101,102);
// // 

// let companies = ["Apple","Samsung","Oneplus","Xiaomi"];
// companies.shift();
// companies.splice(3,1,"Oppo");
// companies.push("Vivo");

// function sum(a,b){
//     a = 5;
//      b = 10;
//     let sum = a + b;
//    console.log("The sum is: " + sum);
// }

// sum(5,10);


// let arrowsum = (a,b) => {
//     return a + b;
// }

let arr = [1, 2, 3, 4, 5];

arr.forEach (function Hello(value){
    console.log(value);
});