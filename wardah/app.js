============== Chapter 21-25 Task 1
var first_name = prompt("Enter your first name: ");
var last_name = prompt("Enter your last name: ");
var name = alert("Hello "+first_name+" "+last_name+"!");


============ Chapter 21-25 Task 2
var phone = prompt("Enter your favourite mobile phone model: ");
document.write("My favourite phone is: "+phone+"<br>Length of string: "+phone.length);


============ Chapter 21-25 Task 3
var string = "Pakistan";
for(i=0; i<=string.length; i++){
    if(string[i]==='n'){
        var ind = i;
    }
}
document.write("String: "+string+"<br>Index of 'n': "+ind);


============ Chapter 21-25 Task 4
var string = "Hello World";
var char = new Array();
for(i=0 ; i<=string.length; i++){
    if(string[i]==='l'){
        char.push(i);
    }

}
document.write("String: "+string+"<br>Last index of 'l': "+char[char.length-1]);



============ Chapter 21-25 Task 5
var string = "Pakistan";
document.write("String: "+string+"<br>Character at index 3: "+string.charAt(3));


============ Chapter 21-25 Task 6
var f_name = prompt("Enter your first name: ");
var l_name = prompt("Enter your last name: ");
var name = f_name.concat(" ",l_name);
alert("Hello "+name+"!");



============ Chapter 21-25 Task 7
var city = "Hyderabad";
var firstChar = city.indexOf("Hyder");
if(firstChar !== -1);{
    var replaced = city.slice(0,firstChar)+"Islam"+city.slice(firstChar+5);
}
document.write("City: "+city+"<br>After relacement: "+replaced);



============ Chapter 21-25 Task 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var firstChar = message.indexOf("and");
var lastChar = message.lastIndexOf("and");
if(firstChar !== -1){
    var replace = message.slice(0,firstChar)+"&"+message.slice(firstChar+3,lastChar)+"&"+message.slice(lastChar+3);
}
document.write("Message: "+message+"<br>Replaced message: "+replace);


=========== short method ================
var message ="Ali and Sami are best friends. They play cricket and football togethor.";
var replace = message.replace(/and/g,"&");
alert(replace);

============ Chapter 21-25 Task 9
var value = "472";
var num = Number(value);
document.write("Value: "+value+"<br>Type: "+typeof value+"<br>Value: "+num+"<br>Type: "+typeof num);



============ Chapter 21-25 Task 10
var inp = prompt("Enter any input");
var upper = inp.toUpperCase();
document.write("User input: "+inp+"<br>Upper case: "+upper);



============ Chapter 21-25 Task 11
var inp = prompt("Enter any input");
firstChar = inp.charAt(0);
var replace = inp.replace(firstChar,firstChar.toUpperCase());
document.write("User input: "+inp+"<br>Title case: "+replace);




============ Chapter 21-25 Task 12
var num = 35.36 ;
var string = String(num);
string = string.replace(".","");
document.write("Number: "+num+"<br>String: "+string);



============ Chapter 21-25 Task 13
var username = prompt("Enter your username: ");
for(i=0; i<=username.length; i++){
    if(username.charCodeAt(i) === 33 || username.charCodeAt(i) === 44 || username.charCodeAt(i) === 46 || username.charCodeAt(i) === 64){
        alert("Please enter a valid username");
    }
}


============ Chapter 21-25 Task 14
A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
search = search.toLowerCase();
for(i=0; i<=4; i++){
    if(search === A[i]){
        alert(search+" is available at index "+i+" in our bakery");
        break;
    }
}
if(search !== A[0] && search !== A[1] && search !== A[2] && search !== A[3] && search !== A[4]){
    alert("We are sorry. "+search+" is not available in our bakery.");
}    




============ Chapter 21-25 Task 15
var password = prompt("Enter your password");
for(i=48; i<=57; i++){
    if(password.charCodeAt(0) === i){
        document.write("Entered password: "+password+"<br>Password cannot begin with a number <br>Please enter a valid password");
    }
}
if(password.length>6){
    document.write("Entered password: "+password+"<br>Password cannot be greater than 6 characters <br>Please enter a valid password");
}



============ Chapter 21-25 Task 16
var university = "University of Karachi";
var array = university.split("");
for(i=0;i<=20;i++){
    document.write(array[i]+"<br>");    
}



============ Chapter 21-25 Task 17
var userInput = prompt("Enter any input: ");
document.write("User input: "+userInput+"<br>Last character of input: "+userInput.charAt(userInput.length-1));



============ Chapter 21-25 Task 18
var string = "The quick brown fox jumps over the lazy dog";
string = string.toLowerCase();
var arr = string.split(" ");
var num =0;
for(i=0; i<=9; i++){
    if(arr[i] === "the"){
        num++;
    }
}
document.write("Text: "+string+"<br>There are "+num+" occurence(s) of word 'the'");






================================================================================================================================
================================================================================================================================




============ Chapter 26-30 Task 1
var num = +prompt("Enter a positve integer: ");
document.write("number: "+num+"<br>round off value: "+Math.round(num)+"<br>floor value: "+Math.floor(num)+"<br>ceil value: "+Math.ceil(num));



============ Chapter 26-30 Task 2
var num = prompt("Enter a negative floating point: ");
document.write("number: "+num+"<br>round off value: "+Math.round(num)+"<br>floor value: "+Math.floor(num)+"<br>ceil value: "+Math.ceil(num));



============ Chapter 26-30 Task 3
var num = -4;
alert("The absolute value of "+num+" is "+Math.abs(num));


============ Chapter 26-30 Task 4
var random = Math.random();
var improved = (random*6)+1;
var final = Math.floor(improved);
document.write("random dice value: "+final);



============ Chapter 26-30 Task 5
var random = Math.random();
var improved = (random*2)+1;
var final = Math.floor(improved);
if(final === 2){
    document.write(final+"<br>random coin value: Heads");
}
else if(final === 1){
    document.write(final+"<br>random coin value: Tails");
}


============ Chapter 26-30 Task 6
var random = Math.random();
var improved = (random*100)+1;
var final = Math.floor(improved);
document.write("random number between 1 and 100: "+final);


============ Chapter 26-30 Task 7
var weight = prompt("Enter your weight in kilograms: ");
document.write("The weight of user is "+parseInt(weight)+" kilograms");



============ Chapter 26-30 Task 8
var random = Math.random();
var improved = (random*10)+1;
var final = Math.floor(improved);
var input = +prompt("Enter anumber between 1 and 10");
if(final === input){
    alert("Congratulation! you guesses it right.");
}
else{
    alert("try again!");
}





================================================================================================================================
================================================================================================================================







============ Chapter 31-34 Task 1
document.write(new Date());



============ Chapter 31-34 Task 2
var d = new Date();
var date = d.toString();
month = d.getMonth();
if(month === 5){
    document.write("Current month: June");
}


============ Chapter 31-34 Task 3
var date = new Date();
var str_date = date.toString();
var day = str_date.slice(0,3);
alert("Today is "+day);



============ Chapter 31-34 Task 4
var date = new Date();
var day = date.getDay();
if(day === 5 || day === 6){
    alert("It's Fun day")
}


============ Chapter 31-34 Task 5
var date = new Date();
var doM = date.getDate();
if(doM < 16){
    alert("First fifteen days of the month");
}
else{
    alert("Last fifteen days of the month");
}


============ Chapter 31-34 Task 6
var date = new Date();
var mili = date.getTime();
var min = mili/(60*60);
document.write("Current Date: "+date+"<br>Elapsed miliseconds since January 1, 1970: "+mili+"<br>Elapsed minutes since January 1, 1970: "+min);



============ Chapter 31-34 Task 7
var date = new Date();
var hours = date.getHours();
if(hours > 12){
    alert("Its PM")
}
else{
    alert("Its AM")
}


============ Chapter 31-34 Task 8
var laterDate = new Date("December 31, 2020");
alert("Later Date: "+laterDate);


============ Chapter 31-34 Task 9
var firstRamadan = new Date("April 25, 2020");
var currentDate = new Date();
var day1 = firstRamadan.getTime()/(1000*60*60*24);
var day2 = currentDate.getTime()/(1000*60*60*24);
var days = day2 - day1;
days = Math.floor(days);
alert(days+ " days have passed since 1st Ramadan, 2020");



============ Chapter 31-34 Task 10
var startDate = new Date("Jan 1, 2020");
var referenceDate = new Date();
var seconds1 = referenceDate.getTime()/(1000);
var seconds2 = startDate.getTime()/(1000);
var seconds = seconds1 - seconds2;
seconds = Math.floor(seconds);
alert("On reference date "+referenceDate+", "+seconds+" seconds had passed since beggining of 2020");



============ Chapter 31-34 Task 11
var dt= new Date();
var ct = new Date();
dt.setHours(dt.getHours()+1);
document.write("current date: "+dt+"<br>1 hour ago, it was "+ct);


============ Chapter 31-34 Task 12
var dt= new Date();
var ct = new Date();
dt.setFullYear(ct.getFullYear()-100);
alert("current date: "+ct+"\n100 years back, it was "+dt);



============ Chapter 31-34 Task 13
var age = +prompt("Enter your age in numbers");
var dt = new Date();
var year = dt.getFullYear();
var yoB = year - age;
alert("Your age: "+age+"\nYour birth year is: "+yoB);



============ Chapter 31-34 Task 14
var name = "ABC Customer";
var month = "June";
var noU = +prompt("Enter number of units for the month");
noU = noU.toFixed(2);
var cpU = +prompt("Enter charges per unit");
cpU = cpU.toFixed(2);
var netAmount = noU*cpU;
netAmount = netAmount.toFixed(2);
netAmount = parseFloat(netAmount);
var Late = (netAmount/100)*5.335;
Late = Late.toFixed(2);
Late = parseFloat(Late);
var GrossAmount = netAmount+Late;
GrossAmount = Math.ceil(GrossAmount);
document.write("<h1>K-Electric Bill</h1><br><br>Customer Name: "+name+"<br>Month: "+month+"<br>Number of Units: "+noU+"<br>Charges per Unit: "+cpU+"<br><br>Net Amount Payable(within Due Date): "+netAmount+"<br>Late Payent Surcharge: "+Late+"<br>Groos Amount Payable(after Due Date): "+GrossAmount);







================================================================================================================================
================================================================================================================================






============ Chapter 35-38 Task 1
function tellTime() {
 var date = new Date();
 document.write(date);   
}


============ Chapter 35-38 Task 2
function greeting() {
    var f_name = prompt("Enter your fist name: ");
    var l_name = prompt("Enter your last name: ");
    alert("Hello "+f_name+" "+l_name+"!");
}


============ Chapter 35-38 Task 3
function add() {
    var num1 = +prompt("Enter first number in digits");
    var num2 = +prompt("Enter second number in digits");
    var num = num1 + num2;
    alert(num);
}


============ Chapter 35-38 Task 4
function calculator() {
    var num1 = +prompt("Enter first number in digits");
    var num2 = +prompt("Enter second number in digits");
    var operator = prompt("Enter operator (+ , - , * , / , %)");
    var num;
    if(operator === "+"){
        num = num1 + num2;
        alert(num);
    }
    else if(operator === "-"){
        num = num1 - num2;
        alert(num);
    }
    else if(operator === "*"){
        num = num1 * num2;
        alert(num);
    }
    else if(operator === "/"){
        num = num1 / num2;
        alert(num);
    }
    else if(operator === "%"){
        num = num1 % num2;
        alert(num);
    }
    else{
        alert("Please enter from the given operators.");
    }
}



============ Chapter 35-38 Task 5
function square(number) {
    alert(number*number);
}



============ Chapter 35-38 Task 6
function factorial(num) {
    for(i=num-1 ; i>0 ; i--){
        num = num * i;
    }
    alert(num);
}




============ Chapter 35-38 Task 7
function counting(num1,num2) {
    for(i=num1; i<=num2; i++){
        document.write(num1++ + "<br>");
    }
}



============ Chapter 35-38 Task 8
function hypotenuse(b, p) {
    function square(num) {
        return num*num;
    }
    var b = square(b);
    var p = square(p);
    var h = Math.sqrt(b+p);
    h = h.toFixed(2);
    alert(h);
}


============ Chapter 35-38 Task 9
======== method 1
function rectArea(width,height) {
    var a = width * height;
    alert(a);
}

rectArea(4,2);

======== method 2
function rectArea(width,height) {
    var width =3;
    var height =2;
    var a = width * height;
    alert(a);
}

rectArea();



============ Chapter 35-38 Task 10
function palindrome(str) {

    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            alert('string is not a palindrome');
            return false;
            
        }
    }
    alert('string is a palindrome');
    return true;
}



============ Chapter 35-38 Task 11
function capital_letter(str) 
{
    str = str.split(" ");

    for (let i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    var a = str.join(" ");
    alert(a);
}

capital_letter('My name is Rayyan khan');



============ Chapter 35-38 Task 12
function longWord(str) {
    var word = "";
    var words = str.split(" ");
    for(i=0; i<words.length;i++){
        if(word.length<words[i].length){
            word = words[i];
        }
    }
    alert(word);
}




============ Chapter 35-38 Task 13
function countLetter(str,letter) {
    stri = str.toLowerCase();
    var len = stri.length;
    var count = 0;
    for(i=0; i<len; i++){
        if(stri.charAt(i) == letter){
            count++;
        }
    }
    alert("number of letter: "+letter+", in the given string: '"+str+"', is: "+count);
}



============ Chapter 35-38 Task 14
function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    circumference = circumference.toFixed(2);
    alert("The circumference is: "+circumference);
}


function calcArea(radius) {
    var area = Math.PI * radius * radius;
    area = area.toFixed(2);
    alert("The area is: "+area);
}