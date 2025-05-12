//strings methods in JS
//to upper case
// let str = "apna college";
// let newstr1 = str.toUpperCase();

// console.log(str);
// console.log(newstr1);
// strings are immutable(means doesnot changes)

//to lower case
// let str ="APNA COLLEGE";
// console.log(str.toLowerCase());

// strim
// removes the spaces before or after the whole string
// let str ="       APNA COLLEGE  Js    ";
// console.log(str.trim());

//slice
//syntax: str.slice(start,end?) ending value is non incusive.
// let str="Apna college";
// console.log(str.slice(2,9));//output (na coll)
// we can also write it as console.log(str.slice(2)); with out the ending value.

//concat
// we can also concat the two strings by + symbol.
// let str="Tulasi ";
// let str1="Nalluri "
// let str2="3";
// console.log(str.concat(str1));
// console.log(str1.concat(str));
// console.log(str1+str2);
// console.log("my name is "+str+str1);


//replace
//to search the value from the string.
// let str="Tulasi";
// console.log(str.replace("Tu",""));
// let str1="hellololo";
// console.log(str1.replace("lo","p"));//it only replaces one value.
// console.log(str1.replaceAll("lo","p"));


// //charAt
// let str3="tejaswi nalluri";
// all=str3.replace("i","s");
// console.log(all.charAt(6));



//practice question:

let usernum = prompt("Enter the full name to generate the username");
console.log("user name is : @"+usernum+usernum.length);


//includes method.
// let browserType = "mozilla";

// if (browserType.includes("zilla")) {
//   console.log("Found zilla!");
// } else {
//   console.log("No zilla here!");
// }
// //startsWith
// let browser1Type = "mozilla";

// if (browserType.startsWith("zilla")) {
//   console.log("Found zilla!");
// } else {
//   console.log("No zilla here!");
// }
// //endsWith
// let browser2Type = "mozilla";

// if (browserType.endsWith("zilla")) {
//   console.log("Found zilla!");
// } else {
//   console.log("No zilla here!");
// }
// //indexof
// let str="MY NAME IS TULASI AND I AM STUDING IN TULASI UNIVERSITY";
// console.log(str.indexOf("TULASI"));
// let firstOccurrence=str.indexOf("TULASI");
// let secondOccurrence=str.indexOf("TULASI",firstOccurrence+1);
// console.log(firstOccurrence);
// console.log(secondOccurrence);


