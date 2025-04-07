class Worker {
    #experience = 1.2
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName,
        this.dayRate = dayRate,
        this.workingDays = workingDays
    }

    getSalary() {
        return this.dayRate * this.workingDays
    }

    getSalaryWithExperience() {
        return this.getSalary() * this.#experience
    }

    showSalary() {
        console.log(this.fullName + ' salary: ' + this.getSalary())
    }

    showSalaryWithExperience() {
        console.log(this.fullName + ' salary: ' + this.getSalaryWithExperience())
    }

    get experience() {
        return this.#experience
    }

    set experience(value) {
        this.#experience = value
    }

}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.experience);
worker1.showSalaryWithExperience();
worker1.experience = 1.5;
console.log("New experience: " + worker1.experience);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Thomson", 48, 22); 
console.log(worker2.fullName);
worker2.showSalary();
console.log("New experience: " + worker2.experience);
worker2.showSalaryWithExperience();
worker2.experience = 1.5;
console.log("New experience: " + worker2.experience);
worker2.showSalaryWithExperience();

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
worker3.showSalary();
console.log("New experience: " + worker3.experience);
worker3.showSalaryWithExperience();
worker3.experience = 1.5;
console.log("New experience: " + worker3.experience);
worker3.showSalaryWithExperience();

function sortBySalaryWithExperience() {
    let res = []
    for (w of arguments) {
        if (res.length === 0) {
            res.push(w)
            continue
        }
        let is_w_added = false
        for (let i = 0; i < res.length; i++) {
            if (res[i].getSalaryWithExperience() > w.getSalaryWithExperience()) {
                res.splice(i, 0, w)
                is_w_added = true
                break
            }
        }
        if (!is_w_added) {
            res.push(w)
        }
    }
    console.log("Sorted salary:")
    for (w of res) {
        w.showSalaryWithExperience()
    }
    return res
}

sortBySalaryWithExperience(worker1, worker2, worker3)
