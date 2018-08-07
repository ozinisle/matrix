
export class LoginForm {
    public username: MatrixLoginFormInputField = new MatrixLoginFormInputField();
    public password: MatrixLoginFormInputField = new MatrixLoginFormInputField();

    public isValidationSuccess(): boolean {
        return this.username.errors.required || this.password.errors.required;
    }

    public validate() {
        this.username.errors.required = (this.username.value && this.username.value.length > 6) ? false : true;
        this.password.errors.required = (this.password.value && this.password.value.length >= 8) ? false : true;
    }
}

export class MatrixLoginFormInputField {
    public value: string;
    public errors: MatrixLoginFormInputFieldErrors = new MatrixLoginFormInputFieldErrors();
}

export class MatrixLoginFormInputFieldErrors {
    public required: boolean = false;
}
