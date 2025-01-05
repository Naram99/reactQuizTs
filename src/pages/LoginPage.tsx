import { useState } from "react";

export default function LoginPage() {
    const [register, setRegister] = useState(false);

    function toggleRegister(): void {
        setRegister(!register);
    }

    return (
        <div className="loginWrapper">
            <div className="loginFormCt">
                <form action="" id="loginForm">
                    <input type="text" name="userName" id="userNameInput" />
                    <input type="password" name="userPw" id="userPwInput" />
                    {register && <input type="password" name="userPwCheck" id="userPwCheckInput" />}
                </form>
                <button onClick={toggleRegister}>{register ? "Bejelentkezés" : "Regisztráció"}</button>
            </div>
        </div>
    );
}
