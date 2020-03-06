// let arr = [1,2,3,4,5,6,7,8];
// let arr1=["Vivek","Satish","Gautam"]

// let [...last]=arr;
// const newArr = [...arr, ...arr1];
// // console.log(firstname);
// console.log(newArr);

let SumandMultiply =(a,b)=>{
return [a*b,a+b];
}

let [sum,multiply,division="No Values Found"] = SumandMultiply(10,20);
// console.log(sum);
// console.log(multiply);
// console.log(division);



let data={
    "id":1,
    "name":"Satish",
    "designation":"Python Developer",
    "place":"Nadiad",
    "academics":{
       "college": "KJIT",
       "University":"Gujarat Technological University",
    },
    "hobby":"Travelling"
};

let {id:rollid,food="No food available",...rest}= data; // id:rollid To change the keyname 
                                                        //food="No food available" To add dummy item while destructuring
// console.log(name);
// console.log(designation);
// console.log(food)
// console.log(rest);

let arr = [1,2,3,4,5,6,7,8];
let arr1=["Vivek","Satish","Gautam"];

let addSpread = {...arr,...arr1};
console.log(addSpread);