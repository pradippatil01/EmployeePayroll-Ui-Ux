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
        this._profilePic = profilePic;
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
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this.startDate ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
return "id="           +this.id +
       ",name= "       +this.name+",gender="+this.gender +
       ",profilePic="  +this.profilePic +
       ",department="  +this.departnent +
       ",salary="      +this.salary+",startdate="+empDate;
    }
}