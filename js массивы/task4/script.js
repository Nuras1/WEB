let x = parseInt(prompt())
let array = []
for(let i = 0 ;i<x;i++){
    array.push(parseInt(prompt()))
}
let proiz = 1
for(let i = 0 ;i<array.length;i++){
   if(array[i]!=0)
   proiz *= array[i]
}
alert(proiz)