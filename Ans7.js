const arr =[1,2,3,4,5]
const reverse = arr.reduce((acc,val)=>{
   acc.unshift(val)
   return acc
},[])
console.log(reverse);
