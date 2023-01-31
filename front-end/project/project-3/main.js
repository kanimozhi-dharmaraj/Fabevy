 function handleValidation(e) {

  e.preventDefault();
    
  let formElement = this,
	result, validElements = 0,
	formData,
    requiredElements = formElement.getElementsByClassName("required");
  removeErrorMessages(formElement);
  for (let i = 0; i < requiredElements.length; i++) {
    result = checkRequired(requiredElements[i]);
	if(result == "valid"){
		validElements++;
	}
  }
  
  //Check if all elements are valid
  if(validElements == requiredElements.length){
	formData = collectFormData(formElement);
	createRow(formData);
  }
}

function collectFormData(formElement){
	var newFormElement = new FormData(formElement);
	let formDataObj = {};
	newFormElement.forEach(function(value, prop){
		formDataObj[prop] = value;
	});
	return formDataObj;
}

function createRow(rowData){
	//Create row element
	let tableRowElement = document.createElement('tr');
	for(key in rowData){
		if(key !== "password" && key !== "cpassword"){
			console.log(key, rowData[key]);
			//Create td
			let tableDataElement = document.createElement('td');
			//Add rowData[key] inside the td
			tableDataElement.innerText = rowData[key];
			//Insert the td inside the row
			tableRowElement.append(tableDataElement);
		}
	}
	
	//Insert the row inside the table "tableElement"
	tableElement.append(tableRowElement);
	console.log(tableElement);
}

function checkRequired(element) {
  let elementValue = element.value,
    elementWrapper = element.parentNode;
  if (elementValue == "") {
    let alertElement = document.createElement("div");
    alertElement.innerText = "This Field is Required";
    alertElement.classList.add("error");
    elementWrapper.append(alertElement);
	return "not valid";
  }else{
	return "valid";
  }
}

function removeErrorMessages(form) {
  let errorElements = form.getElementsByClassName("error");
  
  for (let i = errorElements.length-1; i >= 0; i--) {
    removeMe(errorElements[i]);
  }
}
function removeMe(ele) {
  ele.remove();
}

var signupElement = document.getElementById("signup");
var tableElement = document.getElementById("table");

signupElement.addEventListener("submit", handleValidation);