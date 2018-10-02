var User = {
	name: "Alex",
	age: 16,
	gender: "M",
	"номер телефона": "+994513039896",
	smartphone : {
		model: "Samsung",
		code: "J5 Prime",
		price: 250
	},
	studyPlace: "School #20"
};


var Admin = {
	name: "Sam",
	age: 30,
	"номер телефона": "+994503223233",
	smartphone : {
		model: "iPhone",
		code: "X",
		price: 1200
	},
	studyPlace: null,
};

var Menu = {
	width: 300,
	height: 200,
	content: "Italian food",
	numberOfTitles: 20,
	weight: 5
}

var Goo = {
	width: 300,
	height: 200,
	content: "Italian food",
	numberOfTitles: 20,
	weight: 5
}





function makeBuffer(){
	var bufferArr = [];

	function buffer(){
		return bufferArr;
	}

	buffer.add = function(){
		for (var i = 0; i < arguments.length; i++){
			bufferArr.push(arguments[i]);
		}
	}

	buffer.clear = function(){
		bufferArr.splice(0,bufferArr.length);
	}

	return buffer;
}

var buffer = makeBuffer();

buffer.add("GGG",5,true,"ff",76,null);
console.log(buffer());
buffer.add("DADAYA");
console.log(buffer());
buffer.clear();
console.log(buffer());
buffer.add("ye","boi");
console.log(buffer());








// Сумма двух чисел через вложенную функцию
// function sum(a){
// 	return function(b){
// 		return a + b;
// 	}
// }

// var res = sum(10)(-5);
// console.log(res);




// Чекер через объект
// function makeChecker(){
// 	var checker = 0;

// 	return {
// 		getNext: function(){
// 			return ++checker;
// 		},
// 		setChecker: function(value){
// 			checker = value;
// 		},
// 		resetChecker: function(){
// 			checker = 0;
// 		},
// 		getCheckerCount: function(){
// 			return checker;
// 		},
// 	}
// }





// var checker1 = makeChecker();
// checker1.getNext();
// checker1.getNext();
// checker1.getNext();
// checker1.getNext();
// checker1.resetChecker();
// checker1.setChecker(5);
// checker1.getNext();
// checker1.getNext();
// checker1.getNext();
// checker1.getNext();
// console.log(checker1.getCheckerCount());




//Чекер. Замыкания
// function check(){
// 	var checker = 1;

// 	return function(){
// 		return checker += 5;
// 	}
// }

// var a = check();
// console.log(a());
// console.log(a());




//Возвращает новый массив из длин элементов исходного
function stringLenhgths(arr){
	arr.map(function(item,i,arr){
		return item.length;
	});
}

//Возвращает массив, элементами которого являются
//неповторяющиеся элементы исходного массива
function unique(arr){
	var Names = {};

	names.forEach(function(item,i){
		Names[item] = true;
	});

	return Object.keys(Names);
}



//Возвращает массив, исключающий анограммы из текущего массива
function aclean(arr){

	var listOfArrElements = []; 

	arr.forEach(function(item){
		var sortedKey = item.toLowerCase().split("").sort().join("");
		listOfArrElements[sortedKey] = item;
	});

	var result = [];

	for (var key in listOfArrElements){
		result.push(listOfArrElements[key]);
	}

	return result;
}



// Callback-function, передается в функцию Array.sort()
//Сравнение элементов массива по сумме их цифр
function compareNum(a,b){
	a = a + "";
	b = b + "";

	a = a.split("");
	b = b.split("");

	var sumA = 0;
	var sumB = 0;
	
	for (var i = 0; i < a.length; i++){
		sumA += +a[i];
	}

	for (var i = 0; i < b.length; i++){
		sumB += +b[i];
	}

	

	return sumA - sumB;
}


//Сортирует массив numbers в обратном порядке
// Равносильна встроенной функции Array.prototype.reverse()
function reverseArray(numbers){
	var firstLength = numbers.length;
	for (var i = numbers.length - 2; i > -1; i--){
		numbers.push(numbers[i]);
	}

	numbers.splice(0,firstLength - 1);
	
	return 0;
}

//Сортирует массив arr, оставляя лишь элементы от a до b, остальные удаляет.
//При этом меняется тот же массив arr, нового массива не создается.
function filterRangeInPlace(arr,a,b){
	for(var i = 0; i < arr.length; i++){

		if (arr[i] < a || arr[i] > b || !isNumeric(arr[i])){
			arr.splice(i,1);
			i--;
		}

		else
			arr[i] = +arr[i];
	}

	return null;
}

//Переводит строку, слова которой разделены дефисами, в верблюжью нотацию и возвращает новую строку
function camelize(str){
	var arr = str.split("-");

	for (var i = 1; i < arr.length; i++){
		arr[i] = upFirstLetter(arr[i]); 
	}

	str = arr.join("");
	return str;
}

//Переводит 1ый символ строки str в верхний регистр и возвращает новую строку
function upFirstLetter(str){
	var arr = str.split("");
	arr[0] = arr[0].toUpperCase();
	str = arr.join("");
	return str;
}



// задание
function removeClass(obj,cls){
	if ("className" in obj){
		var classNameArr = obj.className.split(" ");
		for (var i = 0; i < classNameArr.length; i++){
			if (classNameArr[i] == cls)
				classNameArr.splice(i,1);
		}
		obj.className = classNameArr.join(" ");
	}
}

// задание
  function addClass(obj,cls){
	if ("className" in obj){
		var classNameArr = obj.className.split(" ");
		classNameArr.push(cls);
		obj.className = classNameArr.join(" ");
	}
  }

  
// Возвращает максимальную сумму чисел, взятых из всевозможных подстрок массива arr
function getMaxSubSum(arr){
	var checker = 0;
	var maxSum = 0;
	for (var i = 0; i < arr.length; i++){
		if (arr[i] <  0) 
			checker++;
	}
	
	if (checker == arr.length)
		return 0;

	else {
		for (i = 0; i < arr.length; i++){
			var a = 0;

			for (var j = i; j < arr.length; j++){
				a += arr[j];
				if (a > maxSum)
						maxSum = a; 

			}

			
		}

	}

	return maxSum;
}


// Решето Эратосфена - алгоритм для нахождения простых чисел от 2 до n включительно
function primeNumbers(n){
	var p = 2;
	var numbers = [];
	for (var i = 0; i < n + 1; i++){
		numbers.push(i);  
	}


	for (p = 2; p * p < n; p++){

	for (var i = 2 * p; i < n + 1; i += p){ 
		delete numbers[i];
	}

}
	var newNumbers = [];
	for (i = 0; i < numbers.length; i++){
		if (numbers[i] !== undefined && numbers[i] != 0 && numbers[i] != 1)
			newNumbers.push(numbers[i]);
		
	}

	return newNumbers;
}



// Возвращает новый массив с численными значениями, взятыми из массива arr, в промежутке от a до b
function filterRange(arr,a,b){
	var newMassive = [];
	var j = 0;
	for (var i = 0; i < arr.length; i++){
		if (arr[i] > a && arr[i] < b){
			newMassive[j] = arr[i];
			j++; 
		}
	}

	return newMassive;
}

// Возвращает позицию элемента со значением value в массиве arr. Если такого элемента нет, то возвращается -1 
function find(arr,value){
	for (var i = 0; i < arr.length; i++){
		if (arr[i] === value) return i;
	}
	return -1;
}

// Возвращает случайное целое число в промежутке от min до max
function randomNum(min,max){
	return min + Math.floor(Math.random() * (max + 1 - min));
}


// Провеяет объект на наличие свойств
function isEmpty(obj){
	var counter = 0;
	for (var key in obj){
		counter++;
	}
	if (!counter) return true;
	else return false;
}


// Проверяет, является ли введеное выражение числом
function isNumeric(x){
	return !isNaN(parseFloat(x)) && isFinite(x);
}




























































































// var time = {
// 	year: 2345,
// 	month: 11,
// 	day: 10,
// 	hour: 11,
// 	minute: 12,
// 	second: 13,
// 	microsecond: 123456
//   }
  
//   console.log(time);
//   time.month++;
//   time.month++;
//   time.month++;
//   console.log(time);









// var salaries = {
// 	Mark: 500,
// 	Bob: 750,
// 	Steave: 450,
// 	Alex: 600,
// 	James: 1200
// };

// var leader = 0;
// var leaderName;

// if (isEmpty(salaries)) console.log("Нет сотрудников");

// else {
// 	for (var key in salaries){
// 	if (leader < salaries[key]){
// 		leader = salaries[key];
// 		leaderName = key;
// 	}
// }

// console.log(leaderName + " " + leader);

// }








/*"use strict";
var name;

function setName($name) {

	if ($name === undefined || $name === "" || $name === null){         
		$name = "Bob Bobo";                                             // getName и setName методы         
	}

	$name += "";
	name = $name;
	
}

function getName(){                               
	return name;
}


setName(prompt("Введите свое имя: ",""));

alert("Hi, " + getName() + "!");
*/
































/*mark: for(var i=32;i<=129;i++){
	for(var j=2;j<i;j++){
		if(i%j==0) continue mark;      //выводит простые числа в заданном интервале
	}
	alert(i);

}
*/





















/*while (true){
	var num = prompt("Enter the digit bigger than 100","");
	if (num < 100) continue;
	if (num > 100 || num == "undefined") alert("Your number is " + num);
	break;
}
*/
















/*
"" + 1 + 0 // 10
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" //6
4 + 5 + "px" //45px //9px
"$" + 4 + 5 // $45

"4" - 2 //2

"4px" - 2 // NaN

7 / 0 // Infity

"  -9\n" + 5 // -9\n5
"  -9\n" - 5 // -14
5 && 2 // 2

2 && 5 // 5

5 || 0 // 0

0 || 5 // 0
null + 1 // 1
undefined + 1 // 1
null == "\n0\n" // false
+null == +"\n0\n" // true
*/















/*var a = prompt("a:"," ");
var b = prompt("b:"," ");

var result = (+a + +b<4) ? "Little" : "Much"; 
alert(result);*/


/*
var login = prompt("Login:"," ");
var password;

if (login == "admin" || login == "Admin"){
	password = prompt("Password:"," ");
	if (password == "darklord") alert("Welcome");
	else if (password == null) alert("Access escaped");
	else alert("Invalid password");
}

else if (login == null) alert("Access escaped");

else alert("I dont know you");
*/




   /*do {

	var name = prompt("Your name is?","");
	if (name == "null" || name == "") alert("Name please...");
				   } while (name == "null");

alert("Hi, " + name);
var ageCheck = confirm("Are you 18+?");
if (ageCheck) alert("Welcome to fam, Mr. " + name + "!");
else alert("Sorry, only 18+!");
*/