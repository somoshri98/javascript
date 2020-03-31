function Student(id, firstName, lastName, email,mobile) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.mobile=mobile;
}

Student.prototype.name = function(){
    return this.firstName + ' ' + this.lastName
}

var students = []

function addStudent() {
    // if (!checkMobile()) {
    //     return;
    // }
    let student = new Student(
        document.getElementById('id').value,
        document.getElementById('firstName').value,
        document.getElementById('lastName').value,
        document.getElementById('email').value,
        document.getElementById('mobile').value
    )


    
    var table = document.getElementById("studentTable").getElementsByTagName('tbody')[0];
    var row = table.insertRow(table.rows.length);

    
    var itemIdCell = row.insertCell(0);
    var itemFirstNameCell = row.insertCell(1);
    var itemLastNameCell = row.insertCell(2);
    var itemEmailCell = row.insertCell(3);
    var itemMobileCell = row.insertCell(4);
    var itemEditDelete= row.insertCell(5);

    console.log(student.id);
    itemIdCell.innerText = student.id;
    itemFirstNameCell.innerText = student.firstName;
    itemLastNameCell.innerText = student.lastName;
    itemEmailCell.innerText = student.email;
    itemMobileCell.innerText = student.mobile;
    itemEditDelete.innerHTML='<button type="button" class="btn btn-primary " onclick="edit(getIndex(this))">Edit</button><button type="button" class="btn btn-primary " onclick="deleteStudent(getIndex(this))">Delete</button>'

    students.push(student)
    console.log(students)
    students.forEach(element => {
        console.log(element.name())
    });
}
function getIndex(el)
{
while( (el = el.parentNode) && el.nodeName.toLowerCase() !== 'tr' );

   if( el ) 
        return el.rowIndex;
}
function edit(a){
    console.log(a);
    console.log(students[a-1]);
    document.getElementById("id").value= students[a-1].id;
    document.getElementById("firstName").value= students[a-1].firstName;
    document.getElementById("lastName").value= students[a-1].lastName;
    document.getElementById("email").value= students[a-1].email;
    document.getElementById("mobile").value= students[a-1].mobile;
    document.getElementById('studentTable').deleteRow(a);

}
function deleteStudent(index){
    var r = confirm("Are you sure you want to delete this record?");
    if (r == true)
        document.getElementById('studentTable').deleteRow(index);
}
// console.log(node.value)

   function checkName(){
    var pattern = /^[A-Z]{1}[a-z ]+$/
    var name = document.testForm.firstName.value;
   if(!pattern.test(name)){
    document.getElementById('firstHelp').innerText="Enter valid name";
    document.getElementById('firstName').value="";
    }
    else
    document.getElementById('firstHelp').innerText="";
    
}
function checkName1(){
    var pattern = /^[A-Z]{1}[a-z ]+$/
    var name = document.testForm.lastName.value;
   if(!pattern.test(name)){
    document.getElementById('lastHelp').innerText="Enter valid name";
    document.getElementById('lastName').value="";
    }
    else
    document.getElementById('lastHelp').innerText="";
    
}

function checkEmail()
{
    // var pattern=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    // var email=document.testForm.email.value;
    // if(!pattern.test(name)){
    //     document.getElementById('emailHelp').innerText="Enter valid email";
    //     document.getElementById('email').value="";
    //     }
    //     else
    //     document.getElementById('emailHelp').innerText="";
        
        var emailID = document.testForm.email.value;
        atpos = emailID.indexOf("@");
        dotpos = emailID.lastIndexOf(".");
        
        if (atpos < 1 || ( dotpos - atpos < 2 )) {
            document.getElementById('emailHelp').innerText="Enter valid email";
              document.getElementById('email').value="";
           
        }
        else
        document.getElementById('emailHelp').innerText="";
}
function checkid()
{
    var id=document.testForm.id.value;
    var pattern=/[a-z]/g;
    var result = id.match(pattern);
    if(result!=null){
    document.getElementById('idHelp').innerText="Enter valid ID";
    document.getElementById('id').value="";
    }
    else
    document.getElementById('idHelp').innerText="";
    
}
// function checkMobile()
// {
//     var pattern=/^[0-9]$/
//     var name=document.testForm.mobile.value;
//     if(!pattern.test(name)){
//         document.getElementById('mobileHelp').innerText="Enter valid mobile no.";
//         document.getElementById('mobile').value="";
//         }
//         else
//         document.getElementById('mobileHelp').innerText="";
//         return true;
// }
