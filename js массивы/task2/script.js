let array = []
for(let i = 0 ;i<30;i++){
    array.push(parseInt(prompt()))
    if(array[i]==0)
    break;
}
let ans = ""
let index = 0 
for(let i = 0 ;i<array.length;i++){
    ans +=array[i]
    index++
}
alert(Math.pow(ans,1/index))