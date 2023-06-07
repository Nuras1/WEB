let array = []
for(let i = 0 ;i<30;i++){
    array.push(parseInt(prompt()))
    if(array[i]==0)
    break;
}
let ans = " "
for(let i = 0 ;i<array.length;i++){
   if(array[i]>0)
   ans+=array[i]+ " "
}
alert(ans)