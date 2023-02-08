  class Student{
	rollNo
  studentName
  department
  academicYear
  mailId
  phoneNo
  address
  bloodGroup
  constructor(studentObject){
  	this.studentName = studentObject.studentName;
    this.rollNo = studentObject.rollNo;
    this.department = studentObject.department;
    this.academicYear = studentObject.academicYear;
    this.mailId = studentObject.mailId;
    this.phoneNo = studentObject.phoneNo;
    this.address = studentObject.address;
    this.bloodGroup = studentObject.bloodGroup;
  }
}

let students = [];

 function studentRecords(e) {

  e.preventDefault();
    
  let formElement = this;
  let formData = collectFormData(formElement);
  
  students.push( new Student(formData) );
  document.getElementsByName("rollNo")[0].value = students.length+1;
  
  console.log(students);

}

function collectFormData(formElement){
	var newFormElement = new FormData(formElement);
	let formDataObj = {};
	newFormElement.forEach(function(value, prop){
		formDataObj[prop] = value;
	});
	return formDataObj;
}





var signupElement = document.getElementById("signup");


signupElement.addEventListener("submit", studentRecords);