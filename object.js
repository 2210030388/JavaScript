//collection of variables.
//we can update the values of the object in the const unlike other individual variables
const student ={
    fullname :"Tulasi",
    age : 20,
    cgpa : 9.3,
    ispass : true,
};
// updating the values of the objects
student["age"]=student["age"]+1;
console.log(student["age"]);

student["fullname"]="TULASI NALLURI";
console.log(student.fullname);

//console.log(student["age"]);

const product={
    fullname:"Parker Jotter Standard CT Ball Pen",
    rating:4.5,
    offer:20,
    price:270,
};
console.log(product) 

const profile ={
    username:"ShradhaKhapra",
    followers:"569K",
    following:4,
    noofpost:195,
    isFollow:false,
};
console.log(profile);

//console.log(typeof profile);
console.log(typeof profile["username"]);
