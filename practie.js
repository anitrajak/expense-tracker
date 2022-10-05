

let arr = [1 ,2 ,3,4,5,6];

// for(let i in arr)
// console.log(arr[i])

// for(let x of arr)
// console.log(x)

// arr.forEach((n , i , nums) =>{
    
    // })
    
// let a = arr.filter( (n , i , nums) => {
//      return n % 2 === 0
// }).forEach(n => console.log(n))

// arr.filter(n => n % 2 === 0).forEach(n => console.log(n))

// let a = arr.map((n,i , nums) =>{
//     return n*2
// })

// let a = arr.reduce(function(sum , curr){
//     sum += curr;
//     return sum;
// },0)
// console.log(a);

let Arr = [
    {fName : 'Samad' , lName :'Sarwar' , Age : 20},
    {fName : 'Aman' , lName :'Shrivatsav' , Age : 10},
    {fName : 'Rahul' , lName :'Roy' , Age : 30},
    {fName : 'Ram' , lName :'Roy' , Age : 30}
]

// function isAdult(n){
//    return n.Age >= 18
// }
// let a = Arr.filter(isAdult)
// let a = Arr.filter(function (n){
//     return n.Age >= 18
//  })

// let a = Arr.filter((n) =>{
//     return n.Age >= 18
// })
// let a = Arr.filter(n => n.Age >= 18)
// console.log(a);

let a;
//  a = Arr.map(function(n){
//     return n.fName+" "+n.lName
// })
//  a = Arr.map(n => 
//      n.fName+" "+n.lName
// )

a = Arr.reduce(function(acc , curr){
    if(acc[curr.Age]){
        acc[curr.Age]++
    }
    else{
        acc[curr.Age] = 1;
    }

    return acc
} ,{} )
console.log(a)

