let x = prompt('Choose your branch:1 - Science, 2 - Humanitarian subjects, 3 - Art, 4 - Sport:').split(" ")
if (x==1) {
    let a =prompt('1 - Math, 2 - Physics:').split(" ")
    if (a==1){
        alert("You are Financier")
    }else{
        alert("You are Engineer")
    }
} if (x==2) {
    let a =prompt('11 - History, 2 - Foreign Languages:').split(" ")
    if (a==1){
        alert("You are Historic or Diplomat ")
    }else{
        alert("You are Translator")
    }
} if (x==3) {
    let a =prompt('1 - Drawing, 2 -Singing:').split(" ")
    if (a==1){
        alert("You are Painter or Architect")
    }else{
        alert("You are Singer or Tamada")
    }
}
if (x==4) {
    let a =prompt('1 - Team, 2 - Individual:').split(" ")
    if (a==1){
        alert("You are footballer or Basketball player")
    }else{
        alert(" You are boxer or tennis player")
    }
}
/*Напишите программу, которая может определить вашу будущую профессию по вашим способностям. Программа будет задавать несколько вопросов и примерно по ним определит кем вам нужно стать в будущем.

Логика вопросов такова:

Choose your branch:

1 - Science, 2 - Humanitarian subjects, 3 - Art, 4 - Sport:

Вы с экрана вводите ваш выбор, 1,2,3 или 4

Если вы нажали на 1, то: (Вы выбрали Science - Науку)

1 - Math, 2 - Physics:

Если вы выбрали 1 то:

You are Financier

Если вы выбрали 2 то:

You are Engineer

Если вы нажали на 2, то: (Вы выбрали Humanitarian subjects - Гуманитарные предметы)

1 - History, 2 - Foreign Languages:

Если вы выбрали 1 то:

You are Historic or Diplomat  

Если вы выбрали 2 то:

You are Translator

Если вы нажали на 3, то: (Вы выбрали Art - Искусство)

1 - Drawing, 2 -Singing:

Если вы выбрали 1 то:

You are Painter or Architect

Если вы выбрали 2 то:

You are Singer or Tamada

Если вы нажали на 4, то: (Вы выбрали Sport - Спорт)

1 - Team, 2 - Individual:

Если вы выбрали 1 то:

You are footballer or Basketball player

Если вы выбрали 2 то:

           You are boxer or tennis player

Пример:
Choose your branch:
1 - Science, 2 - Humanitarian subjects, 3 - Art, 4 - Sport:
3
 
1 - Drawing, 2 -Singing:
2
 
You are Singer or Tamada*/