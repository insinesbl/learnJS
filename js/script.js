// 2.
// let number = 5; переменная

// console.log("Privet");
// alert("Куда пошел")

// let answer = confirm("18 стукнуло?"); спрашивает, и если "да", то true, если "нет", то false
// let answer = prompt("18 стукнуло?"); можно вводить данные (ответ) в строку
// let answer = prompt("18 стукнуло?");
// console.log(answer); выводит указанную переменную

// 3. Спросили у пользователя и записали его ответы в массив, и
// и сразу вывели это на экран

// 4. Запускаем цикл. Начинаем с 0 и увеличиваем каждый раз на 1, пока не будет меньше 10. И останавливаем
// for (let i = 0; i < 10; i++) {
// 	console.log(i)
// }

// 5. Можем увеличивать массив хоть на сколько, но при этом цикл выполняется всего 3 строками
// let answers = [], 
// 		questions = [
// 		"Как вас зовут?",
// 		"Где вы живете?",
// 		"Старый?"
// 		];

// for(let i = 0; i < questions.length; i++) {
// 	answers[i] = prompt(questions[i])
// }

// document.write(answers)

// Если введенный возраст не подходит в условие, то "else", а если все ок, то "true"
// "prompt" - пользователь вводит свой ответ
// let age = prompt("Сколько тебе, малыш?") ;

// if (age > 18) {
// 	alert("Заходите")
// } else {
// 	alert("Мимо!")
// }

// Просто описали, что делает функция, но ее еще надо вызвать
// function humanSayHello() {
// 	document.write("Приведдд!")
// }

// // Вызываем функцию - просто пишем ее название
// humanSayHello();

// 6.
// function humanSayHello(obj) {
// 	document.write("Приведдд!" + obj + "DA")
// }

// humanSayHello("Blaam");
// humanSayHello("Glaam");
// humanSayHello("Boom");

// 7. Калк - складываем указанные числа между собой
// function calc(a,b) {
// 	console.log(a + b)
// };
// calc(4,5);
// calc(8,1);
// calc(0,2);
// calc(12,16);

function myFirstApplee(name, age) {

	alert("Да! Меня зовут " + name + ", мне " + age + " лет" + " и это май фёст программ!");

	function showSkills() {
			let skills = ['html 5.0','Photoshop CC','CSS','Webflow'];
			// 		2 вариант
			//		myskills = [
			// 		"html 5.0",
			// 		"Photoshop CC",
			// 		"CSS",
			// 		"Webflow"
			// ];
			document.write("Я знаю и умею:<br><br>")
			// 2 вариант
			//for(let i = 0; i < myskills.length; i++) {
			// 	skills[i] = document.write(myskills[i] + "<br>")
			// }
			for(let i = 0; i < skills.length; i++) {
				document.write("- " + skills[i] + "<br>")
			}
	}

		showSkills();

		function proverkaAge() {
			if (age > 18) {
				/* Вывести сообщение, что можно или нельзя*/
				alert("Супер! Хороший шанс в таком возрасте стать разработчиком");
			} else {
				alert("Ранова-то еще, иди учись");
			}
		}

		proverkaAge();

		document.write("<br>")

		function calcPiu(num) {
			document.write("Квадрат выбраного вами числа = " + num * num)
			// Написать функционал квадрата числа
		}

		calcPiu(4)
}

myFirstApplee("Никита", 26)