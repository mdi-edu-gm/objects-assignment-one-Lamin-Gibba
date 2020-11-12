
    const student = {
    fname: "Lamin",
    lname: "Jabbi",
    department: "ITC",
    program: "Computer Science",
    class: "21",
    admittedDate: "2017",
    completedDate: "2021"
} //question 1

    // student.fname = "Lamin";
    // student.lname = "jabbi";
    // student.department = "ITC";
    // student.program = "Computer Science";
    // student.class = "21";
    // student.admittedDate = "2017";
    // student.completedDate = "2021"  ;//end of q1

     student.courses = ['java','Web programming','Database','pld','networking']; //that Q2 (i)

     delete student.class; //Q2 (ii)

     update student.admittedDate = "2020"; //Q2 (iii)

     student.grades = [{
      code: "WP101",
      title: "Web Programming I",
      creditHrs: 2,
      grade: "C",  
  },
  {
      code: "DB101",
      title: "Database I",
      creditHrs: 2,
      grade: "A",  
  }] //Q2 iv

  //question 3
   greetings(){
     return
     `Peace, I am ${fname} ${lname}. How are you?`
   }
