// fill in javascript code here
let form = document.querySelector("form");
let tbody = document.querySelector("tbody");
let data = [];
function savData() {
  localStorage.setItem("data", JSON.stringify(data));
}

function loadData() {
  let storedValue = JSON.parse(localStorage.getItem("data"));
  if (storedValue) {
    data = storedValue;
    showData(data);
  }
}
function handleFormSubmit(e) {
  e.preventDefault();
  //   console.log(e)
  let values = e.target;
  let name = values[0].value;
  let employeeId = values[1].value;
  let department = values[2].value;
  let exp = values[3].value;
  let email = values[4].value;
  let mob = values[5].value;

  console.log(values);

  let obj = {
    names: name,
    employeeID: employeeId,
    department: department,
    exp: exp,
    email: email,
    mob: mob,
  };
  data.push(obj);
  savData();
  showData(data);
  console.log(data);
}

function showData(arr) {
  tbody.innerHTML = "";
  arr.forEach( function(element,i) {
    let Row = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = element.names;
    let td2 = document.createElement("td");
    td2.innerText = element.employeeID;
    let td3 = document.createElement("td");
    td3.innerText = element.department;
    let td4 = document.createElement("td");

    td4.innerText = element.exp;
    let td5 = document.createElement("td");
    td5.innerText = element.email;
    let td6 = document.createElement("td");
    td6.innerText = element.mob;
    let Role = document.createElement("td");
    if (element.exp > 5) {
      Role.innerText = "senior";
    } else if (element.exp >= 2 && element.exp <= 5) {
      Role.innerText = "Junior";
    } else {
      Role.innerText = "Fresher";
    }
    let td8 = document.createElement("td");
    let btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.style.backgroundColor = "red";
    btn.addEventListener("click", function () {
      handleDelete(i);
    });
    td8.append(btn);
    Row.append(td1, td2, td3, td4, td5, td6, Role, td8);
    tbody.append(Row);
  });
}

function handleDelete(index){
     data = data.filter(function(ele,i){
         return index!==i
    
        
    })
    savData()
    showData(data)
   
}

form.addEventListener("submit", function (event) {
  handleFormSubmit(event);
});



loadData();
names="";
employeeId="";
department="";
exp="";
email="";
mob="";