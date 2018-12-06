class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    personDetails(){
        console.log(this.name + " whose age is " + this.age)
    }
}

class Organization{
    constructor(orgname){
        this.orgname = orgname;
    }
}

class Employee extends Organization{
    constructor(orgname,empid){
        super(orgname);
        this.empid = empid;
        Object.assign(this, new Person())
    }

    empDetails(){
        console.log(this.orgname + " 's employee " + this.name + " 's ID is " + this.empid + " and his Age is " + this.age + " who's living in " + this.city);
    }
}

class City{
    constructor(city){
        this.city=city;
    }
}

var emp = new Employee("Google","1806");
Object.assign(emp, new Person("Nishanth","30"),new City("Hyderabad"));
//Object.assign(emp, );
emp.empDetails();

