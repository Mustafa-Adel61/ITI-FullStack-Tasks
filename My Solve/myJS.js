function sum(first,second){
    var sum=first+second;
    return sum;
}
function temperature (value){ 
    return (value>=30)?"HOT":"Cold";
}
function Temperature_ActualFeel(Temperature,ActualFeel){ 
    switch(true){
        case((Temperature>=25&&Temperature<=30)&&(ActualFeel>=25&&ActualFeel<=30)):
        alert("Normal");
        break;
        case(Temperature>30&&ActualFeel>30):
        alert("Hot");
        break;
        case(Temperature<25&&ActualFeel<25):
        alert("Cold");
        break;
        default:
            alert("Ambiguous"); 
    }

}
function Student_faculty (faculty){
    switch (true){
        case(faculty=="FCI"):
        alert("You are eligible to Programing tracks")
        break;
        case(faculty=="Engineering"):
        alert("You are eligible to Network and Embedded tracks")
        break;
        case(faculty=="Commerce"):
        alert("You are eligible to ERP and Social media tracks")
        break;
        default:
            alert("You are eligible to SW fundamentals track")
    }
}
function OddNumber(start,end){
    var arr=new Array(end-start+1);
  for(var i=start;i<=end;i++){
    if(i%2!=0){
        arr.push(i);
    }
  }
  alert(`ODD Number between ${start} and ${end} is ${arr}`);

}
function mathExpression (expression){
    
  return eval(expression);
}
/////// Task#8
function UserData(){
    while(true){
        var name=prompt("Enter Your Name");
        if(typeof(name)=="string")
            break;
    }
    while(true){
        var birthYear=parseInt( prompt("Enter Your BirthYear"));
        if(typeof(birthYear)=="number"&&birthYear<2010)
            break;
        else alert("Your birth year must be less than 2010 ")
    }
    var age=2025-birthYear;
     //to display the table 
    document.getElementById("userTable").style.display = "block";
    // to get new row to inseert new value
   let tableBody = document.getElementById("tableBody");
   let newRow = tableBody.insertRow();
   newRow.insertCell(0).innerHTML = name;
   newRow.insertCell(1).innerHTML = birthYear;
   newRow.insertCell(2).innerHTML = age;

}
function bonas(){
    var i=0;
    while(i<6){
        
    }
}