var employee = {
    name: "Alex Brown",
    profession: "doctor",
    worworkingHoursPerDay: 10
};
var premiumData = {
    isPremium: true,
    premium: 1000
};
var payPerHour = 32;
var worworkingDays = 14;
var experienceСoefficients = [1, 1.1, 1.2, 1.3, 1.5];
function getSalaryInfo(employeeData, premiumData, payPerHour, worworkingDays, experienceСoefficients) {
    var salary;
    if (premiumData.isPremium) {
        salary = employeeData.worworkingHoursPerDay * payPerHour * worworkingDays * experienceСoefficients + premiumData.premium;
    }
    else {
        salary = employeeData.worworkingHoursPerDay * payPerHour * worworkingDays * experienceСoefficients;
    }
    return "".concat(employeeData.profession, " ").concat(employeeData.name, " has a salary of ").concat(salary, "$ this month");
}
;
var salaryInfo = getSalaryInfo(employee, premiumData, payPerHour, worworkingDays, experienceСoefficients[2]);
