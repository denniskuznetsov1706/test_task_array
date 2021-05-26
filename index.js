console.log("hello");

function attempt(available, allowed, preffered)
{



let intersection = available.filter(x => allowed.includes(x));

if (intersection.length==0) return [];

switch (preffered.length)
{
    case 1: 
       var closet=preffered[0];

       for (let x of intersection)
          if (x<closet) {
              closet=x;
             break;
          }
          return [closet];
    break;

    case 2: 
    var closet=preffered;
    
    for (let x of intersection)
       if (x<closet) {
           closet[0]=x;
          break;
       }
    
    if (intersection.length==1) return [closet[0]];   
    if (preffered[0]> intersection[intersection.length-1]) return [intersection[intersection.length-1]];

    if (intersection.includes(preffered[1])) closet[1]=preffered[1];
    else for (let x of intersection)
            if (preffered[1]<x) {
              closet[1]=x;
              break;
            }
    return [closet];

    break;



}




//console.log(closet)

//console.log(intersection+"--int")

    return [closet];
}


console.log(attempt([240,360,720],[360,720],[1080]))//360
console.log(attempt([240,720],[360,720],[1080]))//720
console.log(attempt([240],[360,720],[1080]))//[]

console.log(attempt([240,360,720],[240,360,720,1080],[240,360]))//[240, 360]
console.log(attempt([240,720],[240,360,720,1080],[240,360]))//[240, 360]
console.log(attempt([240,720],[240,360,1080],[240,360]))//[240]
console.log(attempt([720],[240,360,1080],[240,360]))//[]
console.log(attempt([240,360],[240,360],[720,1080]))//[360]
