import FormValues from "./formValues.interface";
import { validated } from "./validated.type";

export default class Validator {
    constructor() {}

    registerValidate(data: FormValues): validated {
        const validObj: validated = {
            valid: true,
        };

        if (validObj.valid && !this.userNameValidate(data)) {
            validObj.valid = false;
            validObj.cause = "Username error";
        }

        if (validObj.valid && !this.passwordValidate(data)) {
            validObj.valid = false;
            validObj.cause = "Password error";
        }

        return validObj;
    }

    userNameValidate(data: FormValues): boolean {
        return !/['"]/.test(data.userName);
    }

    passwordValidate(data: FormValues): boolean {
        if (data.password !== data.passwordCheck) {
            return false;
        }

        const minLength: number = 8;
        const hasUppercase: boolean = /[A-Z]/.test(data.password);
        const hasLowercase: boolean = /[a-z]/.test(data.password);
        const hasNumber: boolean = /\d/.test(data.password);
        const hasSpecial: boolean = /[\W_]/.test(data.password);

        return data.password.length >= minLength && hasUppercase && hasLowercase && hasNumber && hasSpecial;
    }
}
