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
  
  createRow(){
	let rowElement = document.createElement('tr'),
	    rollNoElement = document.createElement('td'),
		studentNameElement = document.createElement('td'),
		actionElement = document.createElement('td'),
		buttonElement = document.createElement('button');
		
	rollNoElement.innerText = this.rollNo;
	studentNameElement.innerText = this.studentName;
	buttonElement.innerText = "update";
	actionElement.append(buttonElement)
	rowElement.append(rollNoElement);
	rowElement.append(studentNameElement);
	rowElement.append(actionElement);
	tableElement.append(rowElement);
	return rowElement;
	}
	getStudentDetails(){
		return{
			"studentName" : this.studentName,
			"rollNo" : this.rollNo,
			"department" : this.department,
			"academicYear" : this.academicYear,
			"mailId" : this.mailId,
			"phoneNo" : this.phoneNo,
			"address" : this.address,
			"bloodGroup" : this.bloodGroup
		}
	}
}

let students = [];

 function studentRecords(e) {

  e.preventDefault();

  let formElement = this,
   formData = collectFormData(formElement),
  
   studentObject = new Student(formData);
  
  students.push(studentObject);
  document.getElementsByName("rollNo")[0].value = students.length+1;
  
  let studentRow = studentObject.createRow();
  
  let updateButton = studentRow.getElementsByTagName('button')[0];
  console.log(updateButton.innerText);
  updateButton.addEventListener('click',function(){
  let studentDetails = studentObject.getStudentDetails();
	  console.log(studentDetails);
  });
  
}


function collectFormData(formElement){
	var newFormElement = new FormData(formElement);
	let formDataObj = {};
	newFormElement.forEach(function(value, prop){
		formDataObj[prop] = value;
	});
	return formDataObj;
}

var signupElement = document.getElementById("signup"),
	tableElement = document.getElementById("table");
signupElement.addEventListener("submit", studentRecords);