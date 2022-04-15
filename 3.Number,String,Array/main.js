// // let x = 10;
// // let y = "10";

// // // == / ===

// // if(x === y) {
// //     alert("Equals");
// // }
// // else{
// //     alert("Non equal")
// // }

// // let a = 10;
// // let b = "20";
// // console.log(a + " " + b);


// // let x = "P129"; // string
// // let y = new String("P129"); // object

// // if(x === y) {

// // }

// // let a = b = new String('a');

// // length
// // let ad = "Hasanov";

// // if(ad.length<6) {
// //     alert("Minimum 6 simvol olmalidir")
// // }

// // let course = "Code Academy is programming course.this Academy sadsadasdasd";
// // console.log(course.toUpperCase());
// // console.log(course.toLowerCase());

// // g // i // gi

// // console.log(course.replace(/academy/gi,"Course"))

// // let new_name = ad.slice(-2);
// // let lastname = new_name.replace("ov","li");
// // console.log(lastname);

// // // let new_ad = 

// // console.log(ad.length);
// // console.log(ad.slice(-2));


// // let user_name = "     Isgender "
// // console.log(user_name.trim().length)

// // slice, substring, substr

// // trim / trimStart / trimEnd



// // let ad = 'Musa';
// // console.log(ad.charCodeAt(0));


// // Template Literals

// // let group_name = "P129";
// // let count = 15;

// // console.log(group_name + " qrupunun dersi basliyir.Qrupda " + count + " telebe var");
// // console.log(`${group_name} qrupunun dersi basliyir.Qrupda ${count} telebe var`)


// // let x = 10;
// // let y = new Number("20");

// // // toFixed / toString / toPrecision / toExponential / valueOf

// // // toPrecision(3) => toFixed(2)

// // let z = x.toString();
// // console.log(typeof z);

// // let v = 5.67;
// // console.log(v.toExponential());


// // let isStudent = false
// // let n = Number(isStudent)


// // // isNaN => is Not a Number

// // let t = new String("10");
// // console.log(isNaN(t)); 


// // let arr = ['Musa',10,false];
// // let colors = ['red','black','green','yellow','white'];
// // let array = new Array('Musa',10,false);

// // // delete colors[0]; 

// // // colors.pop();
// // // colors.push('orange');
// // // colors.shift();
// // // colors.unshift('purple');

// // colors[0] = 'orange';
// // colors.length = 0
// // colors.length = 5;
// // // colors = []; // ==> colors.length = 0



// // console.log(colors)
// // let z = colors.toString();
// // console.log(z)


// // // pop / push || shift / unshift

// // // concat

// // let front_end = ['html','css','js'];
// // let back_end = ['c#','sql','web server'];

// // let l = front_end+back_end
// // console.log(l);

// // let full_stack = front_end.concat(back_end);
// // full_stack.sort();
// // full_stack.reverse();
// // console.log(full_stack);


// // LOOP ==> for / for in / for of / while / do while / forEach 


// // x++
// // ++x

// // let z = 11;
// // z++;
// // console.log(z)



// // for(let i=0;i<100;i+=10) {
// //     console.log(i)
// // }

// // let front_end = ['html','css','js'];
// // let back_end = ['c#','sql','web server'];

// // let full_stack = front_end.concat(back_end);

// // for(let i=0;i<full_stack.length;i++) {
// //     document.write(full_stack[i] + "<br>")
// // }


// // for(let s of full_stack) {
// //     console.log(s);
// // }

// // for(let f in full_stack) {
// //     console.log(f);
// // }



// let x=1;
// while(x<100) {
//     x++;
//     console.log(x);
// }


// let z = 1;
// do{
//     z++;
//     console.log(z)
// }
// while(z<100);


// // for(var x=0;x<100;x++) {
// //     if(x==10) {
// //         console.log("10-a catdi");
// //         continue;
// //     }
// //     else if(x==50) {
// //         console.log("50-ye catdi");
// //         break;
// //     }
// //     console.log(x);
// // }


// FUNCTIONS


// function P129() {
//     let bdy = document.body;
//     if(bdy.style.backgroundColor === "red") {
//         bdy.style.backgroundColor = "white"
//     }
//     else{
//         bdy.style.backgroundColor = "red"
//     }
// }



// function Bulb() {
//     let image = document.getElementById('photo');
    
//     if(image.style.filter === "grayscale(1)"){
//         image.style.filter = "grayscale(0)";
//     }
//     else{
//         image.style.filter = "grayscale(1)";
//     }
// }


// function Hesabla(x,y) {
//     console.log(x*y);
// }

// Hesabla(5,3);


// function ShowMessage(firstname) {
//     alert("Welcome " + firstname);
// }

// ShowMessage("Isgender");


// Function Declarations
function Mode(){
    let body = document.body;
    let icon = document.getElementById('icon');
    if(body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white"
        body.style.color = "black";
        icon.className = "fa-solid fa-sun"
    }
    else{
        body.style.backgroundColor = "black"
        body.style.color = "white"
        icon.style.color = "black"
        icon.className = "fa-solid fa-moon"
    }
}

// // Function Expression
// const Mode = function() {
//     let body = document.body;
//     let icon = document.getElementById('icon');
//     if(body.style.backgroundColor === "black") {
//         body.style.backgroundColor = "white"
//         body.style.color = "black";
//         icon.className = "fa-solid fa-sun"
//     }
//     else{
//         body.style.backgroundColor = "black"
//         body.style.color = "white"
//         icon.style.color = "black"
//         icon.className = "fa-solid fa-moon"
//     }
// }

// function Hesabla(){ 

// }

// let Hesabla = function() {

// }



// HOISTING

// x = 10;
// console.log(x);
// var x;


Show();
function Show() {
    console.log("Salam");
}


// Hello();
// const Hello = function() {
//     console.log("Hello");
// }


let Person = {
    ad: "Ali",
    yas: 20,
    tevellud() {
        return new Date().getFullYear()-this.yas
    }
}

console.log(Person.tevellud());