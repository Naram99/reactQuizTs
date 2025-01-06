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
                    <label htmlFor="userName">Felhasználónév</label>
                    <input type="text" name="userName" id="userNameInput" />
                    <label htmlFor="userName">Jelszó</label>
                    <input type="password" name="userPw" id="userPwInput" />
                    {register && (
                        <>
                            <label htmlFor="userName">Jelszó újra</label>
                            <input type="password" name="userPwCheck" id="userPwCheckInput" />
                        </>
                    )}
                </form>
                <button onClick={toggleRegister}>{register ? "Bejelentkezés" : "Regisztráció"}</button>
            </div>
        </div>
    );
}
