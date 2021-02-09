
var patientName = prompt("please enter your name");
console.log(patientName)
while (patientName == null || patientName == '') {
    patientName = prompt("please enter your name");
};

alert('Welcome ' + patientName + ' Stay Healthy and Safe')


var patientAge = prompt('please enter your age');

var gender = prompt("are you a female or male");
if (gender === "female" || gender === 'f') { document.write(" lovely day Ms.", patientName) }
else { document.write(" lovely day Mr.", patientName); }

var withWho = prompt("do you live alone?")

var numberWith = "";
if (withWho == "yes") {
    numberWith = '<img class="alone" src="download.jpg"/>';
}
else { numberWith = '<img class="notAlone" src="family.jpg"/>' }

var memberNumber = prompt("How many family members do you have?")
var answer = ' ';
// 


if (memberNumber > 3) {


    for (var i = 0; i < Number(memberNumber); i++) {
        answer = answer + numberWith
    }

    document.write(answer)





}
else {
    document.write(numberWith)
}


function myfunctionIs() { 
 confirm(" please confirm "); alert ("Thank you for your time ")

    
}



thankYou();

