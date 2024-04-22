class User {
    private id: number;
    private firstName: string;
    private lastName: string;
    private age: number;
    private email: string;
    private password: string;
    
    constructor(id: number, firstName: string, lastName: string, age: number, email: string, password: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.password = password;
    }

    // get nameE() { return this.name; }
}

export default User;