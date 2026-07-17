


// =========================================
// Chapter 1: Variables for Strings
// =========================================

// Q1
var username;

// Q2
var myName = "Faisal";

// Q3
var message = "Hello World";
alert(message);

// Q4
var studentName = "Jhone Doe";
var age = "15 years old";
var course = "Certified Mobile Application Development";

alert(studentName);
alert(age);
alert(course);

// Q5
var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(pizza);

// Q6
var email = "example@example.com";
alert("My email address is " + email);

// Q7
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);

// Q8
document.write("Yah! I can write HTML content through JavaScript");
document.write("<br>");

// Q9
var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(design);


// =========================================
// Chapter 2: Variables for Numbers
// =========================================

// Q1
var myAge = 18;
alert("I am " + myAge + " years old");

// Q2
var visitCount = 10;
alert("You have visited this site " + visitCount + " times");

// Q3
var birthYear = 2007;
document.write("My birth year is " + birthYear + "<br>");
document.write("Data type of my declared variable is number");
document.write("<br><br>");

// Q4
var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;

document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.");









// ==========================================
// Chapter 3 - Variables for Strings
// ==========================================


// Q1. Declare a variable called username.

var username;


// Q2. Declare a variable called myName and assign your full name.

var myName = "Faisal Khan";


// Q3. Declare a variable called message, assign "Hello World"


var message = "Hello World";
alert(message);


// Q4. Save student's bio data in variables


var studentName = "Jhone Doe";
var age = "15 years old";
var course = "Certified Mobile Application Development";

alert(studentName);
alert(age);
alert(course);


// Q5. Display the following alert using one JS variable.

var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";

alert(pizza);


// Q6. Declare a variable called email


var email = "example@example.com";

alert("My email address is " + email);


// Q7. Declare a variable called book


var book = "A smarter way to learn JavaScript";

alert("I am trying to learn from the Book " + book);


// Q8. Display this in browser through JavaScript.

document.write("Yah! I can write HTML content through JavaScript");

document.write("<br><br>");


// Q9. Store the following string in a variable


var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";

alert(design);

document.write(design);


// ==========================================
// Chapter 4 - Variables for Strings
// ==========================================





// Question 1


var age = 18;
alert("I am " + age + " years old");

// =========================
// Question 2

var visitCount = 14;
alert("You have visited this site " + visitCount + " times.");


// Question 3


var birthYear = 2007;

document.write("My birth year is " + birthYear + "<br>");
document.write("Data type of my declared variable is " + typeof birthYear + "<br><br>");



// Question 4

var visitorName = "John Doe";
var productTitle = "T-shirt(s)";
var quantity = 5;

document.write("<b>" + visitorName + "</b> ordered <b>" + quantity + " " + productTitle + "</b> on XYZ Clothing store.");






// Question 1

var firstName = "Faisal",
    age = 18,
    city = "Peshawar";



// Question 2

var myName;
var user1;
var _age;
var $price;
var studentName;


// Question 3


document.write("<h1>Rules for naming JS variables</h1>");

document.write("Variable names can only contain <b>letters</b>, <b>numbers</b>, <b>$</b> and <b>_</b>.<br>");
document.write("For example: <b>$my_1stVariable</b><br><br>");

document.write("Variable names must begin with a <b>letter</b>, <b>$</b> or <b>_</b>.<br>");
document.write("For example: <b>$name</b>, <b>_name</b> or <b>name</b><br><br>");

document.write("Variable names are <b>case sensitive</b>.<br><br>");

document.write("Variable names should not be <b>JS keywords</b>.");




// ==========================================
// Chapter 5 - Variables for Strings
// ==========================================

// Q1

let num1 = 3;
let num2 = 5;
let sum = num1 + num2;

document.write("<h3>Q1</h3>");
document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br><br>");


// Q2

let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;
let mod = num1 % num2;

document.write("<h3>Q2</h3>");
document.write("Subtraction = " + sub + "<br>");
document.write("Multiplication = " + mul + "<br>");
document.write("Division = " + div + "<br>");
document.write("Modulus = " + mod + "<br><br>");


// Q3

let value;

document.write("<h3>Q3</h3>");
document.write("Value after variable declaration is: " + value + "<br>");

value = 5;
document.write("Initial value: " + value + "<br>");

value++;
document.write("Value after increment is: " + value + "<br>");

value = value + 7;
document.write("Value after addition is: " + value + "<br>");

value--;
document.write("Value after decrement is: " + value + "<br>");

let remainder = value % 3;
document.write("The remainder is: " + remainder + "<br><br>");


// Q4

let ticketPrice = 600;
let totalCost = ticketPrice * 5;

document.write("<h3>Q4</h3>");
document.write("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR");



var number = 4;

document.write("<h2>Table of " + number + "</h2>");

for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}

document.write("<br><br>");


// Question 6

// Celsius to Fahrenheit
var celsius = 25;
var fahrenheit = (celsius * 9 / 5) + 32;

document.write(celsius + "°C is " + fahrenheit + "°F<br><br>");

// Fahrenheit to Celsius
var fahrenheit2 = 70;
var celsius2 = (fahrenheit2 - 32) * 5 / 9;

document.write(fahrenheit2 + "°F is " + celsius2 + "°C");



// ==========================================
// Chapter 6-9 - Variables for Strings
// ==========================================



// Question 1


var a = 10;

document.write("<h2>Question 1</h2>");
document.write("Result:<br><br>");

document.write("The value of a is: " + a + "<br><br>");

document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br><br><hr><br>");


// Question 2

var a = 2;
var b = 1;

var result = --a - --b + ++b + b--;

document.write("<h2>Question 2</h2>");

document.write("a = 2<br>");
document.write("b = 1<br><br>");

document.write("Result of --a: " + (--a + 1) + "<br>");
document.write("Result of --a - --b: 1<br>");
document.write("Result of --a - --b + ++b: 2<br>");
document.write("Result of --a - --b + ++b + b--: 3<br><br>");

document.write("Final value of a: " + a + "<br>");
document.write("Final value of b: " + b + "<br>");
document.write("Final result: " + result);



// Question 3 
var name = prompt("Enter your name:");
document.write("<h2>Question 3</h2>");
document.write("Hello " + name + "! Welcome.<br><br>");


// Question 5 

var number = prompt("Enter a number:");

if (number === "" || number === null) {
    number = 5;
}
document.write("<h2>Question 5</h2>");
document.write("Multiplication Table of " + number + "<br><br>");

for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}
document.write("<br>");


// Question 6

// Subject Names
var sub1 = prompt("Enter first subject name:");
var sub2 = prompt("Enter second subject name:");
var sub3 = prompt("Enter third subject name:");

// Total Marks for each subject
var totalMarks = 100;

// Obtained Marks
var marks1 = Number(prompt("Enter obtained marks for " + sub1 + ":"));
var marks2 = Number(prompt("Enter obtained marks for " + sub2 + ":"));
var marks3 = Number(prompt("Enter obtained marks for " + sub3 + ":"));

// Calculations
var total = totalMarks * 3;
var obtained = marks1 + marks2 + marks3;

var per1 = (marks1 / totalMarks) * 100;
var per2 = (marks2 / totalMarks) * 100;
var per3 = (marks3 / totalMarks) * 100;

var overallPercentage = (obtained / total) * 100;

// Output
document.write("<table border='1' cellpadding='8'>");
document.write("<tr>");
document.write("<th>Subject</th>");
document.write("<th>Total Marks</th>");
document.write("<th>Obtained Marks</th>");
document.write("<th>Percentage</th>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + sub1 + "</td>");
document.write("<td>" + totalMarks + "</td>");
document.write("<td>" + marks1 + "</td>");
document.write("<td>" + per1 + "%</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + sub2 + "</td>");
document.write("<td>" + totalMarks + "</td>");
document.write("<td>" + marks2 + "</td>");
document.write("<td>" + per2 + "%</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + sub3 + "</td>");
document.write("<td>" + totalMarks + "</td>");
document.write("<td>" + marks3 + "</td>");
document.write("<td>" + per3 + "%</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<th></th>");
document.write("<th>" + total + "</th>");
document.write("<th>" + obtained + "</th>");
document.write("<th>" + overallPercentage.toFixed(0) + "%</th>");
document.write("</tr>");

document.write("</table>");

// ======================
// Chapter 9-11 - Variables for Strings
// ======================


// Question 1
var city = prompt("Enter your city name:");

if (city.toLowerCase() === "karachi") {
    document.write("Welcome to city of lights<br><br>");
} else {
    document.write("Welcome to " + city + "<br><br>");
}


// Question 2
var gender = prompt("Enter your gender (Male/Female):");

if (gender.toLowerCase() === "male") {
    document.write("Good Morning Sir.<br><br>");
} else if (gender.toLowerCase() === "female") {
    document.write("Good Morning Ma'am.<br><br>");
} else {
    document.write("Good Morning!<br><br>");
}


// Question 3
var signal = prompt("Enter traffic signal color:");

if (signal.toLowerCase() === "red") {
    document.write("Must Stop<br><br>");
} else if (signal.toLowerCase() === "yellow") {
    document.write("Ready to move<br><br>");
} else if (signal.toLowerCase() === "green") {
    document.write("Move now<br><br>");
} else {
    document.write("Invalid Signal Color<br><br>");
}

// Question 4
var fuel = parseFloat(prompt("Enter remaining fuel in litres:"));

if (fuel < 0.25) {
    document.write("Please refill the fuel in your car.<br><br>");
} else {
    document.write("Fuel level is OK.<br><br>");
}


// Question 5
// (a)
var a = 4;
if (++a === 5) {
    document.write("a) Given condition for variable a is true.<br>");
}

// (b)
var b = 82;
if (b++ === 83) {
    document.write("b) Given condition for variable b is true.<br>");
}

// (c)
var c = 12;
if (c++ === 13) {
    document.write("c) Condition 1 is true.<br>");
}
if (c === 13) {
    document.write("c) Condition 2 is true.<br>");
}
if (++c < 14) {
    document.write("c) Condition 3 is true.<br>");
}
if (c === 14) {
    document.write("c) Condition 4 is true.<br>");
}

// (d)
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === materialCost + laborCost) {
    document.write("d) The cost equals.<br>");
}

// (e)
if (true) {
    document.write("e) True<br>");
}
if (false) {
    document.write("e) False<br>");
}

// (f)
if ("car" < "cat") {
    document.write("f) car is smaller than cat.<br>");
}

// 7. Guess Game
let secretNumber = 7;
let guess = +prompt("Guess a number (1 to 10):");

if (guess === secretNumber) {
    document.write("Bingo! Correct answer<br><br>");
} else if (guess + 1 === secretNumber) {
    document.write("Close enough to the correct answer<br><br>");
} else {
    document.write("Wrong guess<br><br>");
}

// 8. Divisible by 3
let num1 = +prompt("Enter a number:");

if (num1 % 3 === 0) {
    document.write(num1 + " is divisible by 3<br><br>");
} else {
    document.write(num1 + " is not divisible by 3<br><br>");
}

// 9. Even or Odd
let num2 = +prompt("Enter a number:");

if (num2 % 2 === 0) {
    document.write(num2 + " is Even<br><br>");
} else {
    document.write(num2 + " is Odd<br><br>");
}

// 10. Temperature
let temp = +prompt("Enter temperature:");

if (temp > 40) {
    document.write("It is too hot outside.<br><br>");
} else if (temp > 30) {
    document.write("The Weather today is Normal.<br><br>");
} else if (temp > 20) {
    document.write("Today's Weather is cool.<br><br>");
} else if (temp > 10) {
    document.write("OMG! Today's weather is so Cool.<br><br>");
} else {
    document.write("It's very cold.<br><br>");
}

// 11. Simple Calculator
let first = +prompt("Enter first number:");
let second = +prompt("Enter second number:");
let operation = prompt("Enter operation (+, -, *, /, %)");

if (operation === "+") {
    document.write("Result: " + (first + second));
} else if (operation === "-") {
    document.write("Result: " + (first - second));
} else if (operation === "*") {
    document.write("Result: " + (first * second));
} else if (operation === "/") {
    document.write("Result: " + (first / second));
} else if (operation === "%") {
    document.write("Result: " + (first % second));
} else {
    document.write("Invalid operation");
}


// ================================
// Chapter 12-13 = if and if else statement testing set of conditions.
// ================================


// Q1. Check Number, Uppercase or Lowercase
var ch = prompt("Q1: Enter one character:");

var code = ch.charCodeAt(0);

if (code >= 48 && code <= 57) {
    alert("It is a Number.");
}
else if (code >= 65 && code <= 90) {
    alert("It is an Uppercase Letter.");
}
else if (code >= 97 && code <= 122) {
    alert("It is a Lowercase Letter.");
}
else {
    alert("Invalid Input.");
}

// Q2. Find Larger Number
var num1 = parseInt(prompt("Q2: Enter first number:"));
var num2 = parseInt(prompt("Enter second number:"));
if (num1 > num2) {
    alert(num1 + " is larger.");
}
else if (num2 > num1) {
    alert(num2 + " is larger.");
}
else {
    alert("Both numbers are equal.");
}

// Q3. Positive, Negative or Zero
var number = parseInt(prompt("Q3: Enter a number:"));
if (number > 0) {
    alert("Positive Number");
}
else if (number < 0) {
    alert("Negative Number");
}
else {
    alert("The number is Zero");
}

// Q4. Check Vowel
var letter = prompt("Q4: Enter a letter:");

if (
    letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u" ||
    letter == "A" || letter == "E" || letter == "I" || letter == "O" || letter == "U"
) {
    alert("True - It is a vowel.");
}
else {
    alert("False - It is not a vowel.");
}

// Q5. Password Validation
var correctPassword = "admin123";
var userPassword = prompt("Q5: Enter your password:");

if (userPassword == "") {
    alert("Please enter your password.");
}
else if (userPassword == correctPassword) {
    alert("Correct! The password you entered matches the original password.");
}
else {
    alert("Incorrect password.");
}

// Q6. Fix If/Else Statement
var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}

alert("Q6: " + greeting);

// Q7. Greeting According to Time
var time = parseInt(prompt("Q7: Enter time in 24-hour format (Example: 1900)"));

if (time >= 0 && time < 1200) {
    alert("Good Morning");
}
else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon");
}
else if (time >= 1700 && time < 2100) {
    alert("Good Evening");
}
else if (time >= 2100 && time <= 2359) {
    alert("Good Night");
}
else {
    alert("Invalid Time");
}

