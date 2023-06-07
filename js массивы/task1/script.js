let x = parseInt(prompt())
let array = []
for(let i = 0 ;i<x;i++){
    array.push(parseInt(prompt()))
}
let a = parseInt(prompt())
let found = false
let index = 0;
for(let i = 0 ;i<x;i++){
    if(array[i]==a){
        found = true
        index = i
    }
}
if (found){
    alert("YES " + index)
}
else alert ("NO")