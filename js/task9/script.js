let x = prompt('INSERT YOUR AMOUNT IN KZT : 1- CONVERT TO USD 2- CONVERT TO EUR3- CONVERT TO GBP').split(" ")
if (parseInt(x[1])==1) {
  alert(Math. trunc(parseInt(x[0])/380))
} else if (Math. trunc(parseInt(x[1])==2) )
{
  alert(Math. trunc(parseInt(x[0])/430))
} else {
  alert(Math. trunc(parseInt(x[0])/480))
}