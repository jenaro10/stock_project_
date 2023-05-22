export class LoginUsuarioDto {

    username: string; 
    role: string;
    password: string;

    constructor(nombreUsuario: string, password: string) {
        this.username = nombreUsuario;
        this.password = password;
    }
}
