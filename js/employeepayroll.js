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
            ", department=" + this.departnent + ", salary=" + this.salary + ", StartDate=" + this.startDate +
            ", note=" + this.note;
    }

}

window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        if (name.nodeValue.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayrollData()).name = name.nodeValue;;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function () {
        output.textContent = salary.value;
    });
});

// save method afte submit click
const save = () => {
    try {
        let employeePayrollData = createEmployeePayroll();
    }
    catch (e) {
        return;
    }
}

const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name = getInputValueById('#name');
    } catch (e) {
        setTextValue('.test.error'.e);
        throw e;
    }
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.departnent = getSelectedValues('[name=department]');
    employeePayrollData.salary = getSelectedValues('#salary');
    employeePayrollData.note = getSelectedValues('#notes');
    let date = getInputValueById('#day') + " " + getInputValueById('#month') + " " + getInputValueById('#year');
    employeePayrollData.date = Date.parse(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}
const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let setItem = [];
    allItems.forEach(Item => {
        if (item.checked) setItem.push(item.value);
    });
    return setItem;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const getInputElementValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}
