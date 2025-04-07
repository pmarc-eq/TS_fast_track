class Person {
    constructor(name, surname) {
        this.name = name
        this.surname = surname
    }

    showFullName() {
        return (this.name + ' ' + this.surname)
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname)
        this.year = year
    }

    showFullName(middleName) {
        let fullName = this.surname + ' ' + this.name + ' ' + middleName
        console.log(fullName)
        return fullName
    }

    showCourse() {
        let currentYear = new Date().getFullYear()
        let course = currentYear - this.year
        console.log(course)
        return course
    }
}

const stud1 = new Student("Petro", " Petrenko ", 2015);

console.log(stud1.showFullName(" Petrovych "));
console.log("Current course: " + stud1.showCourse())