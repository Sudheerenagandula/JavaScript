var emp=new Object();  
emp.id=101;  
emp.name="Ravi Malik";  
emp.salary=50000;  
emp.changeSalary=changeSalary;  
function changeSalary(otherSalary){  
emp.salary=otherSalary;  
}  
document.write(emp.id+" "+emp.name+" "+emp.salary);  
emp.changeSalary(45000);  
document.write("<br>"+emp.id+" "+emp.name+" "+emp.salary);  

// function emp(id,name,salary){  
//     this.id=id;  
//     this.name=name;  
//     this.salary=salary;  
      
//     this.changeSalary=changeSalary;  
//     function changeSalary(otherSalary){  
//     this.salary=otherSalary;  
//     }  
//     }  
//     e=new emp(103,"Sonoo Jaiswal",30000);  
//     document.write(e.id+" "+e.name+" "+e.salary);  
//     e.changeSalary(45000);  
//     document.write("<br>"+e.id+" "+e.name+" "+e.salary);

// var emp=new Object();  
// emp.id=101;  
// emp.name="Ravi Malik";  
// emp.salary=50000;  
// document.write(emp.id+" "+emp.name+" "+emp.salary); 