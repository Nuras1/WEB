var users = [
    {"login": "ilyas", "password": "qwerty"},
    {"login": "eldar", "password": "qqqqq"},
    {"login": "assylkhan", "password": "qweqwe"},
    {"login": "anel", "password": "asdasd"},
    {"login": "alibek", "password": "aaaaaa"}
  ];
  var inputLogin = prompt("Enter your login:");
  var inputPassword = prompt("Enter your password:");
  var isAuthenticated = false;
  for (var i = 0; i < users.length; i++) {
    if (users[i]["login"] === inputLogin && users[i]["password"] === inputPassword) {
      isAuthenticated = true;
      break;
    }
  }
  if (isAuthenticated) {
    alert("Welcome, you are authenticated");
  } else {
    alert("User not found");
  }
  