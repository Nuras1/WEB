let x = prompt().split(" ")
if (parseInt(x[0])+parseInt(x[1])>parseInt(x[2])&&parseInt(x[1])+parseInt(x[2])>parseInt(x[0])&&parseInt(x[2])+parseInt(x[0])>parseInt(x[1])) {
    alert("YES")
} 
else{
    alert("NO")
}