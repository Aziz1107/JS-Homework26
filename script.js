var aziz = [];

var info = 'Для начала добавьте свое имя с помощью команды "add", затем введите свое имя. После того как вы ввели свое имя вы можете его удалить или увидеть в консоле с помощью команды "stop" или "show". Если у вас выходит "undefined" то проверьте правильность введение команд. Спасибо за ваше внимание!'

alert(info);

for (let i = 0; i < Infinity; i++) {
  var com = prompt("Введите команду.");

  if (com === `add`) {
    var addcom = prompt("Введите ваше имя.");
    aziz.push(`${addcom}`);

  } else if (com === "del") {
    aziz.splice(0, 100);

  } else if (com === "stop") {
    console.log(aziz[0]);
    break;

  } else if (com === "show") {
    console.log(aziz[0]);
    break;
  }
}