let students = [
    { "name": "Nuras", "surname": "Bekmurad", "gpa": 3.5 },
    { "name": "Almas", "surname": "Amantayuly", "gpa": 2.7 },
    { "name": "Rauan", "surname": "Serik", "gpa": 2.9 },
    { "name": "Malik", "surname": "Berik", "gpa": 3.9 },
    { "name": "Baha", "surname": "Kalniaz", "gpa": 1.7 },
  ];
  
  let list = "";
  
  while (true) {
    let x = parseInt(prompt("PRESS 1 TO ADD STUDENT, PRESS 2 TO LIST STUDENTS, PRESS 0 TO EXIT"));
  
    if (x === 1) {
      let name = prompt("INSERT Name OF Student: ");
      let surname = prompt("INSERT Surname OF Student: ");
      let gpa = parseFloat(prompt("INSERT gpa OF Student: "));
      let obj = { name: name, surname: surname, gpa: gpa };
      students.push(obj);
    } else if (x === 2) {
      for (let i = 0; i < students.length; i++) {
        list += students[i]["name"] + " - " + students[i]["surname"] + " - " + students[i]["gpa"] + "\n";
      }
      if (students.length > 0) {
        alert(list);
      } else {
        alert("No students found.");
      }
    } else if (x === 0) {
      break;
    }
  }
 