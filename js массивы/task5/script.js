let x = parseInt(prompt("INSERT [1] TO SEARCH BY NAME INSERT [2] TO SEARCH BY YEAR INSERT [3] TO SEARCH BY ENGINE VOLUME INSERT [4] TO SEARCH BY PRICEINSERT [5] TO EXIT"))
cars = [
    {"name":"Toyota", "price": 12000000, "year": 2015, "volume": 2.2},
    {"name":"Mercedes", "price": 70000000, "year": 2018, "volume": 3.8},
    {"name":"Toyota", "price": 7000000, "year": 2013, "volume": 2.0},
    {"name":"BMW", "price": 11000000, "year": 2011, "volume": 3.0},
    {"name":"Lexus", "price": 60000000, "year": 2017 ,"volume": 5.7},
    {"name":"Lada", "price": 1000000, "year": 2010 ,"volume": 1.5},
    {"name":"Bentley", "price": 230000000, "year": 2021 ,"volume": 6.5},
    {"name":"Fiat", "price": 37500000, "year": 2014 ,"volume": 2.5},
];
var text = " "
if (x==1){
    let a = prompt("INSERT NAME OF CAR: ")
    for(var i=0;i<cars.length;i++){
        if(cars[i]["name"] === a)
        text+=cars[i]["name"] + " - " + cars[i]["price"]+" - " + cars[i]["year"]+ " - " + cars[i]["volume"]+" liters\n";
    }
    alert(text);
}
if (x==2){
    let b = prompt("INSERT YEAR START FROM: ")
    let c = prompt("INSERT YEAR ENDS FROM: ")
    for(var i=0;i<cars.length;i++){
        if(cars[i]["year"] >=b&&cars[i]["year"]<=c)
        text+=cars[i]["name"] + " - " + cars[i]["price"]+" - " + cars[i]["year"]+ " - " + cars[i]["volume"]+" liters\n";
    }
    alert(text);
}
if (x==3){
    let d = prompt("INSERT ENGINE VOLUME START FROM: ")
    let e = prompt("INSERT ENGINE VOLUME ENDS FROM: ")
    for(var i=0;i<cars.length;i++){
        if(cars[i]["volume"] >=d&&cars[i]["volume"]<=e)
        text+=cars[i]["name"] + " - " + cars[i]["price"]+" - " + cars[i]["year"]+ " - " + cars[i]["volume"]+" liters\n";
    }
    alert(text);
}
if (x==4){
    let f = prompt("INSERT PRICE START FROM:")
    let g = prompt("INSERT PRICE ENDS FROM:")
    for(var i=0;i<cars.length;i++){
        if(cars[i]["price"] >=f&&cars[i]["price"]<=g)
        text+=cars[i]["name"] + " - " + cars[i]["price"]+" - " + cars[i]["year"]+ " - " + cars[i]["volume"]+" liters\n";
    }
    alert(text);
}