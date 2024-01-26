
//              1
var arr = ["Use let and const for Variables",
"Master Basic Data Types:Understand strings, numbers, booleans, and null/undefined.",
"Explore Array Methods:Learn common array methods like push, pop, shift, and unshift.",
"Conditional Ternary Operator",
"Understand Object Notation",
"Embrace Template Literals:",
"Arrow Functions for Conciseness",
"Destructuring Assignments",
"Asynchronous Code with Promises",
"You can put and delete the semi:colon"
];
let rndm;
rdm = parseInt(Math.random()*10);
console.log(`${arr[rdm]} \n`);
console.log("========================");

/*===============================================*/

//      2
var date = new Date();
// document.write("<p class='date'>"+date+"</p>");
console.log(date)
console.log("========================");

/*===============================================*/

//          3
var email = "@Hellog@mail.com@"
emailF(email);

function emailF (email) {
    var test = false;
    for (let i=1;i<email.length-1;i++)
    {

    if (email[i] === "@")
       {
        test = true;
        break;
       }
    }

    if (test == true)
        console.log(`your email is correct`);

    else
        console.log("your email is wrong")
}
/*===============================================*/

//          4

var Name,Email;

while(true)
{
    Name =  prompt("Enter your name");

    if(Name.match(/^[A-Z]{3,}(\s[A-Z]{3,})*$/))  
       break;

    else
    alert(`Please enter a valid name with uppercase letters only, 
 and each word should have at least three characters.`);
}

while(true)
{
    Email = prompt('Enter your Email');
    if(Email.match(/^\w{3,30}@\w+.\w{2,5}.eg$/))
    {
        break;
    }

    else
    {
        alert(`please enter correct email`);
    }   
}

/*===============================================*/
//          5
document.write(`Hello ${Name}`);        //      مش هعرف أعملها في الوقت الحالي من غير الجافا


/*===============================================*/
//          6
let temp;
let arrNum = [60, 100, 10, 15, 85];
let len = arrNum.length;

for (let i = 0; i < len - 1; ++i) {
    for (let j = i + 1; j < len; ++j) {
        if (arrNum[i] < arrNum[j]) {
            temp = arrNum[i];
            arrNum[i] = arrNum[j];
            arrNum[j] = temp;
        }
    }
}
// first wanted
console.log(`array in the descending oder: ${arrNum}`);
console.log("========================");

//second wanted
console.log(`the biggest element: ${arrNum[0]}`);
console.log("========================");

console.log(`the smallest element: ${arrNum[len]}`);
console.log("========================");


// third wanted
console.log(`failers:  ${arrNum.filter(num => num <= 60)}`); // chat gpt مش فاهمها
console.log("========================");


/*===============================================*/
//          7

let Students = [
    {
        firstName: "Abdallah",
        grade: "99",
    },
    {
        firstName:"Mahmoud",
        grade: "80",
    },
    {
        firstName:"Ahmed",
        grade: "30",
    },
    {
        firstName:"Mohammed",
        grade:"25",
    },
    {
        firstName:"Kareem",
        grade:"60",
    }
]


let Length = Students.length;
// First wanted
for(let i = 0;i < Length;++i)
{
    if(Students[i].grade >= 90)      // I don't know find ()
    {
        console.log(`Degree more than 90: ${Students[i].firstName}`);
    }
}

console.log("========================");

// second wanted
for(let i = 0;i < Length;++i)
{
    if(Students[i].grade >= 60 && Students[i].grade < 90)      // I don't know find ()
    {
        console.log(`Degree from 60 to 90: ${Students[i].firstName}`);
    }
}

console.log("========================");

// third wanted
Students.push(
    {
        firstName:"7mada",
    }
);

for(let i = 0;i < Students.length;++i)
{
    console.log(Students[i].firstName);
}

console.log("========================");

// fourth wanted
Students.pop();
for(let i = 0;i < Students.length;++i)
{
    console.log(Students[i].firstName);
}
console.log("========================");


// Students.slice(2,0,
//     {
//         firstName:"Ali"      //مش راضية تظبط 
//     }
//     )
// console.log(Students);



while(true)
{
    var bithDay = prompt("write your birth day");
    if(bithDay.match(/^\d{2}-\d{2}-\d{4}$/))
    {
        break;
    }

    else
    {
        alert(`Wong Date Format\n
        write true birthday in the right format`);
        continue;
    }

}

