function withEmploymentDate<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        employmentDate = '2024-04-12'
    }
}

interface classIterface {
    employmentDate: string;
}

interface Manager extends classIterface {}

@withEmploymentDate
class Manager {
    task: string = 'Simple task'
    project: string = 'Simple project'
    
    constructor(){
        console.log('Initializing the Manager class')
    }
    
} 

const man = new Manager()
console.log(man.employmentDate)