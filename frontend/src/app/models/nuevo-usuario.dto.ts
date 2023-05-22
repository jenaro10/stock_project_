export class NuevoUsuarioDto {

    name: string;

    username: string;

    password: string;

    constructor(nombre: string, nombreUsuario: string, password: string) {
        this.name = nombre;
        this.username = nombreUsuario;
        this.password = password;
    }
}
