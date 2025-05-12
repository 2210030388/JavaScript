// //strings
// let str="apna clg";
// let str1='tulasi';
// console.log(str1.length);
// console.log(str[0]);

// //template litrals

// let str2 ="apna clg";
// console.log(str[8]);
// let specialString=`this is a template literal`;
// let letter=` the 6th letter od str[6 ] is ${str[6]}`;
// console.log(letter);

// //escape characters
// console.log("apna\ncollege");//next line
// console.log("apna\tcollege");//tab space

// let str3="apna\tcollege";
// console.log(str3.length)//we espect it to be 13 but it give 12 
// //because in JS the escape characters are considered as one character

//string function in js
// let str="   NtuL asi   ";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.trim());//starting and ending spaces (removing)

//str.slice(start,end?)//return part of string
//str1.concat(str2)//join 2 strings
//str.replace(searchVal,newVal)
//str.charAt(idx)
// let str="Nalluri Tulasi";
// console.log(str.slice(2,9));//end is a non-inclusive.

// let str1="ramakrishna";
// console.log(str1.concat(str));
// console.log(str1 + str);

// str1.replace(ramakrishna,Tulasi);
// console.log(str1);

// var petDog ='rex';
// console.log(petDog);

// let str ='Hello world?';
// let a=2;
// console.log(str+a);
let i;
for( i=0;i<2;i++)
{
    for(var j=0;j<3;j++)
    {
        console.log("hello");
    }
}