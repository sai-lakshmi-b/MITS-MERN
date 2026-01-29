/*let arr=[1,2,3,4];
for(let i in arr)
{
    console.log(i,arr[i]);
}
var obj={
    name:"sai",
    age:20
}
for(let i in obj)
{
    console.log(i,obj[i]);
}
for(let val of arr)
{
    console.log(val);
}
let arr1=[1,2,3,4];

let result=arr.map(num => num*2);
console.log(result);

let result1=arr.filter(num => num%2==0)
console.log(result1);

let total=arr.reduce((acc,curr)=>
{
    let value=(curr*2)%2;
    return acc+value;
},0);
console.log(total); 


let num=7;
let count=0;
for(let i=1;i<=num;i++)
{
    if(num%i==0)
    {
        count=count+1;
    }
}
if(count==2)
{
    console.log("yes");
}
else{
    console.log("no");
}*/
/*function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}
function sayBye() {
  console.log("Bye!");
}
greet("Sai", sayBye);*/

/*let promise = new Promise(function(resolve, reject) {
  let success = true;

  if(success) {
    resolve("Task completed successfully!");
  } else {
    reject("Task failed!");
  }
});

promise
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.log(error);
  });*/
 

  /*const getData=()=>{
    return fetch("https://jsonplaceholder.typicode.com/posts");
  }
  getData().then((res)=>res.json())
  .then((data)=>console.log(data))
  .catch(err=>console.log(err))*/

const getData=async()=>{
    try{
        var res=await fetch("https://jsonplaceholder.typicode.com/posts");
        var data=await res.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
getData(); 