let x = parseInt(prompt())
let array = []
for(let i = 0 ;i<x;i++){
    array.push(parseInt(prompt()))
}
let sum = 0 
let b  = 0
for(let i = 0 ; i <x;i++){
    sum +=array[i]
    b++
}
alert(sum + " "+ b)