let ssn=123456789;
console.log(fname);


let number1;
number1=2;
let number2;
number2=5;
let result;
result=number1 / number2;
console.log(result);


let fname="fatemeh";
let lname="soleimani";
let fullname= fname + lname; //concatination
console.log(fullname);


let age_0;
//age= age+1;
age-=1; //shorthand
console.log(age+1);

 let pic = document.getElementById("light");
        let ton=document.getElementById('turnon');
        let toff=document.getElementById('turnoff');
        function turnon() {
            pic.src = "images/pic_bulbon.gif";
            ton.style.display='none';
        }

        function turnoff() {
            pic.src="images/pic_bulboff.gif";
            ton.style.display="block";
            toff.style.display="none";

        }