//*sum of two numbers
function sum(a, b) {
    return a + b;
}
//console.log(sum(2, 3));

//*multiplication and division of two numbers
function multiply(a, b) {
//   console.log(a * b);
}
function divide(a, b) {
 //   console.log(a / b);
}
multiply(4, 5);
divide(20, 5);

//*array methods(double and triple)
let arr=[2,3,4,5,6];
function double(n){
    return n*2;
}
let doubledArr=arr.map(double);
const tripledArr=arr.map((n)=>n*3);
//console.log(doubledArr);
//console.log(tripledArr);

//*filter method (to filter out odd and even numbers)
function isOdd(n){
    return n%2!==0;
}
let oddArr=arr.filter(isOdd);
let evebArr=arr.filter((n)=>n%2===0)
//console.log(oddArr);
//console.log(evebArr);

//*filter method (to filter out numbers which are multiple of 5)
let arr1=[13,15,20,35,27];
const multipleOfFiveArr=arr1.filter((n)=>n%5===0);
//console.log(multipleOfFiveArr);

//*reduce method
let pro=arr.reduce((product,current)=>product*current,1);
//console.log(pro);

//*sum of tripple even number using map,filter and reduce
const tripple = arr.map((n)=>n*3);
//console.log(tripple);
let even=tripple.filter((n)=>n%2===0);
//console.log(even);
let sum1=even.reduce((sol,vro)=>sol+vro,0);
//console.log(sum1);

//*destructuring in array
const [a,b,c,,d]=arr;
//console.log(a,b,c,d);

//*another
const[x,...y]=arr;
//console.log(y);

//like meging 
let e=[a,...y,b,c];
//console.log(e);

//merging using object
let obj1={name:"anitha",age:22};
let obj2={place:"bangalore",college:"srm",age:20};
let mergedObj={...obj1,...obj2};
//console.log(mergedObj);

// promises
const promise =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const success=true;
        if(success){
            //resolve('resolved successfully')
        }
        else{
            //reject('rejected')
        }
    },2000)
})
//console.log('before promise execution');
//promise.then((result)=>console.log(result))
       //.catch(err=>console.log(err))
       //.finally(()=>{console.log('promises completed')})
//console.log('after promises execution')

fetch('https://jsonplaceholder.typicode.com/users')
      //.then(response => {return response.json()})
      //.then((data) => data.map((user)=>{console.log(user.name)}))
      //.catch((err)=>console.log(err))

async function fetchApi(){
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users');
        const data=await response.json();
        //data.map((user)=>{console.log(user.name)})
    }
    catch(err){
        //console.log(err)
    }
}
fetchApi();

//string literalls
let name="anitha";
let age=22;
let place="varanasi palayam pirivi in trippur";
let str=`my mother name is ${name}.she is  ${age} years old.she live in ${place}`
console.log(str); 

