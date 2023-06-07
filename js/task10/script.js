let x = prompt().split(" ")
a="qwerty"
b="user"
if ((x[1])==a&&(x[0])==b) {
  alert("Authentication completed")
} else{
  alert("Invalid login or password")
}

/*Напишите программу где я ввожу логин и пароль. И если они совпадают, то мы выводим Authentication completed, 
иначе Invalid login or password.


(Логин должен быть user, пароль - qwerty)

Ввод:
ilyas qweqwe
Ввод:
user qwerty
Вывод:
Invalid login or password
Вывод:
Authentication completed*/