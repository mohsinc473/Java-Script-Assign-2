// CHAPTER 21 to 25

// Task 1:
// var user1 = prompt("Enter your first name:");
// var user2 = prompt("Enter your last name:");
// var fullName = user1+" "+user2;
// alert("Welcome to Java Script "+fullName);

// Task 2:
// var phone = prompt("Enter your favorite phone:");
// var lenPhone = phone.length;
// document.write("My favorite phone is: "+phone+"</br>");
// document.write("Length of string: "+lenPhone+"</br>"));

// Task 3:
// var counIn = "Pakistan";
// for ( var i=0; i<counIn.length; i++){
//     if(counIn.charAt(i) === 'n'){
//         document.write("String: "+counIn+"</br>");
//         document.write("Index of 'n': "+i)+"</br>";
//         break;
//     }
// }

// Task 4:
// var counIn = "Hello World";
// for ( var i=counIn.length; i>0; i--){
//     if(counIn.charAt(i) === 'l'){
//         document.write("String: "+counIn+"</br>");
//         document.write("Last Index of 'l': "+i)+"</br>";
//         break;
//     }
// }

// Task 5:
// var country = "Pakistan";
// var checkInd = country.charAt(3);
// document.write("String: "+country+"</br>")
// document.write("Character at index 3: "+checkInd+"</br>");

// Task 7:
// var City = "Hyderabad";
// var newcity = City.replace("Hyder","Islam");
// document.write("City: "+City+"</br>");
// document.write("After replacement: "+newcity+"</br>");

// Task 8:
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replace(/and/g,"&");
// alert(newMessage);

// Task 9:
// var stTonum = "472";
// document.write("Value: "+stTonum+"</br>");
// document.write("Type: "+typeof stTonum+"</br>")
// var newNum = parseInt(stTonum);
// document.write("Value: "+stTonum+"</br>");
// document.write("Type: "+typeof newNum+"</br>");

// Task 10:
// var userMsg = prompt("Enter your message");
// document.write("User input: "+userMsg+"</br>");
// userMsg = userMsg.toUpperCase();
// document.write("User case: "+userMsg+"</br>");

//Task 11:
//  var userInput = prompt("Enter message");  
//  var sentence = userInput.toLowerCase().split(" ");
// for(var i = 0; i< sentence.length; i++){
//  sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//  }
// var title = sentence.join(" ");
// document.write("User Input: "+userInput+"</br>");
// document.write("Title case: "+title+"</br>");

// Task 12:
// var num = 35.36;
// var numStrn = num.toString();
// var fs = numStrn.replace(".","");
// document.write("Number: "+num+"</br>");
// document.write("Result: "+fs+"</br>");

// Task 13:
// var userName = prompt("Enter your username");
// for( var i=0; i<userName.length; i++){
//     if ( userName[i]==='@'|| userName[i]==='.'|| userName[i]===','|| userName[i]==='!'){
//         alert("Please enter a valid username")
//         break;
//     }else{
//         continue;
//     }
// }

// Task 14:
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userIn = prompt("What do you want to order")
// userIn = userIn.toLowerCase();
// for( var i=0; i<5; i++){
//     if ( A[i]===userIn){
//     alert("Cookie is available at index "+i+" in our bakery");
//     break;
//     } else {
//       continue;
//     }
// }alert("We are sorry."+userIn+" is not available in our bakery");

// Task 15:
// var passCheck = prompt("Set your password");
// if(passCheck.length <= 6){
//     alert("Password must at least 6 characters long");
// }
// else if(passCheck.charCodeAt(0) >= 48 && passCheck.charCodeAt(0) <= 57){
//     alert("Password should not start with a number");
// }else{
//     for( var i = 0; i<passCheck.length; i++){
//         if(passCheck.charCodeAt(i) >= 65 && passCheck.charCodeAt(0) <= 90){
//             alert("Password is good");
//             break;
//         }
//         else if(passCheck.charCodeAt(i) >= 97 && passCheck.charCodeAt(0) <= 122){
//             alert("Password is good");
//             break;
//         }else{
//             alert("Password should contain one alphabet");
//             break;
//         }
//     }
// }

// Task 16:
// var university = "University of Karachi";
// var uniSip = university.split("") ;
// for( var i=0; i<uniSip.length; i++){
//     document.write(uniSip[i]+"</br>");
// }

// Task 17:
// var userIn = prompt("Input the message");
// var inSiz = userIn.length;
// document.write(userIn.charAt(inSiz-1)); 

// Task 18:
// var Check = "The quick brown fox jumps over the lazy dog";
// var reCheck = Check.toLowerCase();
// a = 0;
// var n;
// for( var i = 0; i<2; i++){
//     n = reCheck.replace("the","THE") ;
//     a += 1;
// }
// document.write("Text: "+Check+"</br>");
// document.write("There are "+a+" occurrence(s) of word 'the'+"</br>"");


// CHAPTER 26 to 30

// Task 1:
// var posInt = +prompt("Enter positve integer");
// document.write("Number: "+posInt+"</br>");
// posInt = Math.round(posInt);
// document.write("Round off value: "+posInt+"</br>");
// posInt = Math.floor(posInt);
// document.write("Floor value: "+posInt+"</br>");
// posInt = Math.ceil(posInt);
// document.write("Ceil value: "+posInt+"</br>");

// Task 2:
// var posInt = +prompt("Enter negative float integer");
// document.write("Number: "+posInt+"</br>");
// posInt = Math.round(posInt);
// document.write("Round off value: "+posInt+"</br>");
// posInt = Math.floor(posInt);
// document.write("Floor value: "+posInt+"</br>");
// posInt = Math.ceil(posInt);
// document.write("Ceil value: "+posInt+"</br>");

// Task 3:
// var absNum = +prompt("Enter a number");
// var newAbs
// if( absNum < 0){
//     newAbs =  absNum * -1; 
//     alert("The absolute value of "+absNum+" is "+newAbs);
// }else{
//     alert("The absolute value of "+absNum+" is "+absNum);
// }

// Task 4:
// var Rand1 = Math.random();
// var Rand2 = (Rand1 * 6) + 1;
// var Rand3 = Math.floor(Rand2);
// document.write("Random dice value: "+Rand3+"</br>");
// var Rand1 = Math.random();
// var Rand2 = (Rand1 * 6) + 1;
// var Rand3 = Math.floor(Rand2);
// document.write("Random dice value: "+Rand3+"</br>");

// Task 5:
// var Rand1 = Math.random();
// var Rand2 = (Rand1 * 2) + 1;
// var Rand3 = Math.floor(Rand2);
// if (Rand3 === 2 ){
//     document.write("Random coin value: Head");
// }else{
//     document.write("Random coin value: Tails");
// }

// Task 6:
// var Rand1 = Math.random();
// var Rand2 = (Rand1 * 100) + 1;
// var Rand3 = Math.floor(Rand2);
// document.write("Random number between 1 & 100: "+Rand3+"</br>");

// Task 7:
// var weight = prompt("Enter your weight");
// var numb = weight.match(/\d+/g);
// var userWei = parseFloat(numb);
// document.write("The weight of user is "+userWei+" kilograms");

// Task 8:
// var Rand1 = Math.random();
// var Rand2 = (Rand1 * 10) + 1;
// var Rand3 = Math.floor(Rand2);
// var UserIn = +prompt("Guess a number from 1 - 10");
// if( UserIn === Rand3){
//     alert("Congratulation! number found");
// }else{
//     alert("Wrong number");
// }


// CHAPTER 31 to 34

// Task 1:
// var nowTime = new Date();
// document.write(nowTime+"</br>");

// Task 2:
// var monNames = ["January", "Feburary", "March", "April", "May", "June", "July","August","September","October","November","December"];
// var now = new Date();
// var theMon = now.getMonth();
// var nameOfMonth = monNames[theMon];
// document.write("Current Month: "+nameOfMonth+"</br>");

// Task 3:
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// document.write("Today is "+nameOfToday+"</br>");

// Task 4:
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// if( nameOfToday === "Sat" || nameOfToday === "Sun"){
//     document.write("It's Fun day "+"</br>");
// }else{
//     document.write("It's "+nameOfToday+" day"+"</br>");
// }

// Task 5:
// var now = new Date();
// var theDate = now.getDate();
// if( theDate <= 15){
//     document.write("First fifteen days of the month"+"</br>");
// }else{
//     document.write("Last days of the month"+"</br>");
// }

// Task 6:
// var now = new Date();
// var theMili = now.getTime();
// var theMin = theMili / (1000*60*60);
// document.write("Current Date: "+now+"</br>");
// document.write("Elapsed millisecond since January 1, 1970: "+theMili+"</br>");
// document.write("Elapsed minutes since January 1, 1970: "+theMin+"</br>");

// Task 7:
// var now = new Date();
// var theHour = now.getHours();
// if( theHour <=11){
//     alert("It's AM");
// }else{
//     alert("It's PM");
// }

// Task 8:
// var laterDate = new Date("Dec 31, 2020");
// document.write("Later date: "+laterDate);

// Task 9:
// var date1 = new Date("April 24, 2020");
// var date2 = new Date();
// var milDif = date2.getTime() - date1.getTime();
// var daysTillRamadan = Math.round( milDif / (1000 * 60 * 60 * 24));
// document.write(daysTillRamadan+" days have passed since 1st Ramadan,2015"+"</br>");

// Task 10:
// var date1 = new Date("Jan 1, 2020");
// var date2 = new Date();
// var millDIF = date2.getTime() - date1.getTime();
// var secondsTill = Math.round( millDIF / (1000 * 60));
// document.write("On reference date "+date2+", "+secondsTill+" seconds had passed since beginning of 2020"+"</br>");

// Task 11:
// var date1 = new Date();
// var theHour1 = date1.getHours();
// var date2 = new Date("June 23, 2020 23:7:00");
// var theHour2 = date2.getHours();
// var reamHour = date2.getHours() - date1.getHours();
// document.write("Curent date: "+date2+"</br>");
// document.write( reamHour+" hour ago, it was "+date1+"</br>");

// Task 12:
// var date1 = new Date();
// var date2 = new Date("June 23, 1920");
// var theYear = date1.getFullYear() - date2.getFullYear();
// document.write("Curent date: "+date1+"</br>");
// document.write( theYear+" years back, it was "+date1+"</br>");

// Task 13:
// var userAge = +prompt("Enter your age:");
// var date1 = new Date();
// var theYear = date1.getFullYear() - userAge;
// document.write("Your age is "+userAge+"</br>");
// document.write("Your birth year is "+theYear+"</br>");

// Task 14:
// var monNames = ["January", "Feburary", "March", "April", "May", "June", "July","August","September","October","November","December"];
// var date1 = new Date();
// var custNam = "Muhammad Mohsin Arif";
// var Month = monNames[date1.getMonth()];
// var numunit = 410;
// var chargPerUnit = 16;
// var latePay = 350;

// document.write("<h3>K-Electric Bill</h3>"+"</br>");
// document.write("Customer Name: "+custNam+"</br>");
// document.write("Month: "+Month+"</br>");
// document.write("Number of Units: "+numunit+"</br>");
// document.write("Charges per unit: "+chargPerUnit+"</br>");
// document.write("Net Amount Payable (within Due Date): "+(numunit*chargPerUnit)+"</br>");
// document.write("Late payment surcharge: "+latePay+"</br>");
// document.write("Gross Amount Payable (after Due Date): "+((numunit*chargPerUnit)+latePay)+"</br>");


// CHAPTER 31 to 34

// Task 1:
// function date(){
//     var now = new Date();
//     document.write(now);
// }
// date();

// Task 2:
// function greet(fname, lname){
//     document.write("Welcome to JS Land, "+fname+" "+lname);
// }
// var fname = prompt("Enter your first name:");
// var lname = prompt("Enter your last name:");
// greet(fname,lname);

// Task 3:
// function sum(num1, num2){
//     var sum = num1 + num2;
//     return sum;
// }
// var num1 = +prompt("Enter number 1:");
// var num2 = +prompt("Enter number 2:");
// var total = sum(num1,num2);
// alert(total);

// Task 4:
// function calculator(num1, num2, oper){
//     switch(oper) {
//     case '+' :
//         var sum = num1 + num2;
//         document.write(num1+" "+oper+" "+num2+" "+"= "+sum);
//         break;
//     case '-' :
//         var sub = num1 - num2;
//         document.write(num1+" "+oper+" "+num2+" "+"= "+sub);
//         break;
//     case '/' :
//         var div = num1 / num2;
//         document.write(num1+" "+oper+" "+num2+" "+"= "+div);
//         break;
//     case '*' :
//         var multi = num1 * num2;
//         document.write(num1+" "+oper+" "+num2+" "+"= "+multi);
//         break;
//     default :
//         alert("wrong Operator");
//     }    
// }
// var num1 = +prompt("Enter number 1:");
// var num2 = +prompt("Enter number 2:");
// var oper = prompt('Enter the operator');
// calculator(num1,num2,oper);

// Task 5:
// function square(num){
//     var sqr = num * num;
//     return sqr;
// }
// var num = +prompt("Enter the number to square");
// var resul = square(num);
// alert("Square of "+num+" is "+resul);

// Task 6:
// function factorial(num){
//     var a=1;
//     for( var i=1; i<=num; i++){
//         a = a*i;
//     }
//     alert("Factorial of "+num+" is "+a);
// }
// var num = +prompt("Enter num to get factorial");
// factorial(num);

// Task 7:
// function counting(start, end){
//     for( var i = start; i <= end; i++){
//         document.write(i+",");
//     }
// }
// var start = +prompt("Enter starting number:");
// var end = +prompt("Enter ending number:");
// counting(start,end);

// Task 8:
// function outer(){
//     var base = +prompt("Enter base:");
//     var perpen = +prompt("Enter perpendicular:");
//     var res = inner(base,perpen)
//     function inner(base, per){
//         var bres = base * base;
//         var pres = per * per;
//         var sum = bres + pres;
//         return sum;
//     }
//     var hypo = 5 * 5;
//     document.write(hypo+" = "+res);
// }
// outer();

// Task 9:
// function rectangle(v1, v2){
//         var A = v1 * v2;
//         return A;
// }
// var value = +prompt("Enter width:");
// var variable = +prompt("Enter height:");
// var area = rectangle(value,variable)
// document.write("Area of triangle is: "+area);

// Task 10;
// function palindrome(str){
//     var split = str.split("");
//     var rever = split.reverse();
//     var jon = rever.join("")
//     if(str === jon){
//         alert("Palindrome string")
//     }else{
//         alert("Not a Palindrome string")
//     }
// }
// var str1 = prompt("Enter palindrome string");
// palindrome(str1);

// Task 11:
// function titleCase(string) {
//     var sentence = string.toLowerCase().split(" ");
//     for(var i = 0; i< sentence.length; i++){
//        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//     }
//  var title = sentence.join(" ");
//  return title;
//  }
//  var expStrn = "the quick brown fox";
//  var out = titleCase(expStrn);
//  document.write("EXAMPLE STRING: "+expStrn+"</br>");
//  document.write("EXPECTED OUTPUT: "+out+"</br>");

// Task 13:
// function occu(strn, let){
//     var a=0;
//     for( var i = 0; i<2; i++){
//        if( strn.replace(let,"O") );{
//         a += 1;
//        }
//     }
//     return a;
// }
// var string = "JSResourceS.com";
// var letter = "o";
// var oc = occu(string,letter);
// alert("There are "+oc+" occurrences of 'o'");

// Task 14:
// function calcCircumference(rad){
//     var circum = 2*(3.1416)*rad;
//     return circum;
// }
// function calcArea(rad){
//     var area = 3.1416*(rad*rad);
//     return area;
// }
// var radius = +prompt("Enter radius of the Circle:")
// var circum = calcCircumference(radius);
// document.write("The circumference is "+circum+"</br>");
// var area = calcArea(radius);
// document.write("The area is "+area+"</br>");




