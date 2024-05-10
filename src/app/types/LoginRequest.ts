
class LoginRequest{
    public userEmail: string;
    public password: string;


    constructor(userEmail: string, password: string){
        this.userEmail = userEmail;
        this.password = password;
    }

}

export default LoginRequest;