export class TokenDto {
    access_token: string;

    constructor(token: string) {
        this.access_token = token;
    }
}
