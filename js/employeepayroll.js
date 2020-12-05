class EmployeePayrollData {

    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }

    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name))
            this._name = name;
        else
            throw "Name is incorrect";
    }
    get profilePic() {
        return this._profilePic;
    }
    set profilePic(profilePic) {
        this._profilePic = this.profilePic;
    }
    get gender() {
        return this._gender;
    }
    set gender(gender) {
        this._gender = gender;
    }
    get departnent() {
        return this.department;
    }
    set departnent(department) {
        this._department = department;
    }
    get salary() {
        return this.salary;
    }
    set salary(salary) {
        this._salary = salary;
    }
    get note() {
        return this._department;
    }
    set note(note) {
        this._note = note;
    }
    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        this._startDate = startDate;
    }

    toString() {
        return "id=" + this.id + ", name=" + this.name + ", gender=" + this.gender + ", profilePic=" + this.profilePic +
            ", department=" + this.departnent + ", salary=" + this.salary + ", StartDate=" + this.startDate+
            ", note="+this.note;
    }

}

window.addEventListener('DOMContentLoaded',(event)=>{
const name=document.querySelector('#name');
const textError=document.querySelector('.text-error');
name.addEventListener('input',function(){
    if(name.nodeValue.length==0)
    {
        textError.textContent="";
        return;
    }
    try{
        (new EmployeePayrollData()).name=name.nodeValue;;
        textError.textContent="";
    }catch(e){
        textError.textContent=e;
    }
});
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function () {
    output.textContent = salary.value;
});
});





