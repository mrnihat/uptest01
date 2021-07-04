

// //function by using keyworcd
// const speak= function (firstName, lastName,time) {
//     console.log(`i am ${firstName} ${lastName} and i am ${time}`);
//     document.write(`i am ${firstName} ${lastName} and i am ${time}`);

// };

// speak('majedur','rahman','35');


// //use function

// function ola (firstName, lastName, age) {
//     document.write(`hey man ${firstName} and how r u doin in ${lastName} .call me ${age}`);

// }


// ola('whats up','there' ,'buddy');

// //arrow function
// // let a=5;
// // let b=8;
// // const sum =() => a+b
// // console.log(sum());


// //simple way to make an arrow function 

// // const sum = (a,b,c) => a+b+c
// // console.log(sum(10,12,13));


// const sum = (a,b,c) => a+b+c
// console.log(sum(12,12,13));



// function createCircle(radius){
//     return{
//         radius,
//         draw(){
//             console.log ('draw');

//         }
//     };
// }

// const circle1 = createCircle(2);
// console.log(circle1);




// function createCircle(radius){
//     return {
//         radius,
//         draw() {
//             console.log ('draw');
//         }
//     };
// // }

// const circle1 = createCircle(1);
// console.log(circle1);

// const circle2 = createCircle(2);
// console.log(circle2);

// const circle3 = createCircle(3);
// console.log(circle3);

// const circle4 = createCircle(4);
// document.write(circle1);


// function createCircle(radius) {
//     return{
//         radius,
//         draw(){
//             console.log('draw');
//         }
//     };
// }


// const circle1 = createCircle(2);
// console.log(circle1);



//camel notation 
//first word would be small and last word will start with capital word
//pascal notation 
//every word start with capital word
//constructor function




// const sum = (a,b,c) => a+b+c 
// document.write(sum(9,4,3));



//  function createCircle(radius) {
//      return {
//          radius,
//          draw(){
//              console.log('draw');
//          }
//      };

//  }
//  const circle1 = createCircle(2);
// console.log(circle1);






// const speak = function(firstName,lastName,age){
// console.log(`hey man i am ${firstName} and he is ${lastName} and i am ${age}`);

// };
// speak('majedur','rahman','34');


// const speak = function(firstName,lastName,age) {
// console.log(`ehdjui${firstName} dfuyeu ${lastName} aij ${age}`);

// };
// speak('rahman','majedur','23');



// function createCircle(radius) {
//     return {
//         radius,
//         draw(){
//             console.log('draw');
//         }
//     }

// }


// const circle1 = createCircle(1);
// console.log(circle1);




// const speak = function(firstName,lastName,age){
// console.log(`hey man i am ${firstName} and he is ${lastName} and i am ${age}`);

// };
// speak('majedur','rahman','34');


// const speak = function(firstName,lastName,age) {
// console.log(`ehdjui${firstName} dfuyeu ${lastName} aij ${age}`);

// };
// speak('rahman','majedur','23');


// class Student {
//     constructor(name,age,cls){
//         this.myname= name;
//         this.myage =age;
//         this.mycls = cls;

//     }
//     student_profile(){
//         console.log('this is test student profile ')
//     }
// }
// const student = new Student();
// student.student_profile();





/*class Student {
    constructor(name,age,cls){
        this.myname = name;
        this.myage = age;
        this.cls = cls;
    }

        student_profile(){
            return ` my name is ${this.myname} and i am ${this.myage}, i am in ${this.mycls}`;
             } 
            }           

    class player extends Student{
        constructor (name,age,cls,game){
            super(name,age,cls);
            this.mygame = game;
        }
    
      player_profile(){
          return `${this.student_profile()} and i like to play ${this.mygame}`;
      }
    }

      const student1 = new player('majedur','25','hons','football');
    console.log(student1.player_profile());
    */



/*
    class Student {
        constructor(name,age,cls){
            this.myname = name;
            this.myage = age;
            this.mycls = cls;
        }
        student_profile() {
        return `i am ${this.myname} and i am &{this.myage}  i am in ${this.mycls} `;
    
    }
    
    }
    class player extends Student {
        constructor(name, age, cls, game) {
            super(name, age, cls);
            this.mygame = game;
    
    
        }
        player_profile() {
        return `${this.student_profile()} and i like to play ${this.mygame}`;
    }
        
     }
    
    const student1 = new player('majedur', 'rahman', '23', 'cricket');
    
    console.log(student1.player_profile());
    
    */
/*function createCircle(radius){
    return{
        radius,
        draw(){
            console.log('draw');
        }
    }
}

const circle1 = createCircle(2);
console.log(circle1);

*/

/*function Student ( firstName,lastName,dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date (dob);
    this.getBirthYear = function(){
        this.dob.getFullYear();
    }
    this.fullName = function(){
        return `${firstName} ${lastName}`;
    }
}

const student1 = new Student('majedur','rahman','06-09-1996');
console.log(student1.fullName());
*/


// class Student {
//     constructor(name, age, cls) {
//         this.myname = name;
//         this.myage = age;
//         this.mycls = cls;
//     }
//     student_profile() {
//         return `my name is ${this.myname} and i am ${this.myage} and i am in ${this.mycls}`;
//     }
// }


// class player extends Student {
//     constructor(name, age, cls, game) {
//         super(name, age, cls);
//         this.mygame = game;
//     }
//     player_profile() {
//         return `${this.student_profile()} i love to play ${this.mygame}`;
//     }
// }

// const student1 = new player('majedur', '34', 'hons', 'cricket');
// console.log(student1.player_profile());



//understanding this keyword
// method creates under object
//regular function = global object
// //node and browser



// const video ={
//     title : 'a',
//     play: function(){
//         console.log(this);
//     }
// }

// video.play();

// alert('fuck u');

/*
const heading1 = document.getElementById('hola1');
heading1.innerText ='ola man';
heading1.style.background = 'cyan';
heading1.style.color = 'limegreen';
*/


// const heading2 = document.getElementsByTagName('h1');
// heading2.innerText = 'briliant';
// const heading1 =document.getElementsByTagName('h1');
// heading1[0].style.color ='red';
// heading1[1].innerText = 'majedur u r brilliant';


// const headingout = document.getElementById('itemsh1');
// headingout.remove();









/*
function xyz() {
    const x = document.getElementById('testid');
    x.innerHTML = Date();
    x.style.background ='lightgreen';
}

*/

function xyz(){
    const x = document.getElementById('testid');
    x.innerHTML = Date();
}


function ola(){
    const y = document.getElementById('inputid');
    y.value = y.value.toUpperCase();
}
 

































































































































































