abstract class User {
    private readonly _id: number
    public email: string
    private password: string
    private static nextUserId: number = 1000

    constructor(email: string, password: string) {
        try{
            this.changePassword(password)
            this.email = email
            this._id = User.nextUserId
            User.nextUserId += 1
        }
        catch(error){console.log(error.message)}
    }
    
    public get passwordPreview() : string {
        let re = new RegExp('.', 'g')
        return this.password.at(0) + this.password.slice(1, -1).replaceAll(re, '•') + this.password.at(-1)
    }

    public changePassword(newPass: string) : void {
        if (newPass.length < 6) {
            throw new Error("Password too short!")
        }
        else {
            this.password = newPass
        }
    }

    public get id(): number {
        return this._id
    }

    abstract showProfile(): void
}

interface Printable {
    print: () => void
}

class Admin extends User implements Printable {
    public isActive: boolean = true

    constructor(email: string, password:string) {
        super(email, password)
    }

    showProfile(): void {
        console.log(this.isActive ? `https://softserve/profile/${this.id}` : "https://softserve/login" )
    }

    print(): void {
        console.log(Admin.name)
    }
}

const admin = new Admin('admin@gmail.com', 'Qwerty'); 

try {
    admin.changePassword('Weak'); 
}
catch (error) { 
    console.log(error.message)
}
console.log(admin.passwordPreview);

admin.changePassword('Super-Pass');
console.log(admin.passwordPreview); 

admin.print()

admin.showProfile()

console.log(admin.id)

const admin2 = new Admin('admin@gmail.com', 'Qwerty'); 
console.log(admin2.id)