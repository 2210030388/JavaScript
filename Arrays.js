//arrays: coollections of items.(in a linear method)
//array is also a object in JS.
//arrays are muttable.
//  let array=[34,23,78,89];
//   console.log(array); 
//   console.log(array[2]);
//   array[2]=66;
//   console.log(array[2]);

// let array1=["tulasi","tejaswi","trisha","taruni"];
// console.log(array1);

// let array2=[98,"tulasi","good"];
// console.log(array2);
//properties of the array

// let array3=["iron man","ant man","bat man","captian america","thor","loki"];
// console.log(array3);



//looping over array.(using for loop)
// let heroes=["iron man","ant man","bat man","captian america","thor","loki"];
// for(let i=0;i<heroes.length;i++)
// {
//     console.log("i="+i+"  "+ heroes[i]);
// }

//for-of loop**
// let heroes=["iron man","ant man","bat man","captian america","thor","loki"];
// for(let el of heroes)
// {
//     console.log(el);
// }

//for-in loop
// let cities=["hyderabad","kammam","dammaiguda","hytech city"];
// for(let i of cities)
// {
//     console.log(i.toUpperCase());
// }



//practice questions 1:
// let sum=0;
// let array4=[85,97,44,37,76,60];
// for(let i of array4)
// {
//     sum+=i;
// }
// console.log("the avg marks are ",sum/array4.length);

//practice question 2:
// let array5=[250,645,300,900,50]

// let ind=0;
// for(let i of array5)//for-of loop directly gives the value but not the index.
// {
//     console.log(`value st index ${ind} = ${i}`);
//     let offer=i/10;
//     array5[ind]=array5[ind]-offer;
//     console.log(`value after the offer is :${array5[ind]}`)
//     ind++;
// }
// for(let i=0;i<array5.length;i++)
// {
//     console.log(`values at index ${i} are :${array5[i]}`);
//     let offer=array5[i]/10;
//     array5[i]-=offer;
//     console.log(`the values after the offer are ${i} :${array5[i]}`);
// }


//ARRAY METHODS: push : add to the end,
//pop : delete from end and return,
//toSting : convert array to string.
//let items =["icecream","slippers","laptop"];
// items.push("phone","watch");
// console.log(items);

// let i=items.pop();
// console.log(items);
// console.log(i);

// console.log(items.toString());

//concat(),unshift():add to start ,shift():deletefrom start and return.
// let products=["tomato","onions","spring onions","potato"];
// let heros=["spyder man","bat man","shakthi man","krish"];
// console.log(items.concat(products,heros));

//unshift ->push method  it is a function which doesnt need the print statement.
// let superhero = ["ant man","bat man","thanos"];
// superhero.unshift("spyder man");

//shift ->pop  changes in main array
// let val=superhero.shift();
// console.log("deleted:",val);// output: deleted: spyder man

//slice() returns the piece of the array.doesnt change the original array
// let superhero = ["ant man","bat man","thanos","iron man","thor"];

// console.log(superhero.slice(1,));

//splice :change the original array 
// syntax: slice(startidx,delCount,newEl1);

let numbers=[1,3,5,7,9,11,13,15,17,19,21,23,29];
numbers.splice(1,0,101,102);
numbers.splice(2,2,99,100);







