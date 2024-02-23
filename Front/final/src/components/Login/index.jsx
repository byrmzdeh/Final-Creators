import React, { useContext, useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        username: "",
        password: ""
    })
    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3030/api/admin/login', {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                redirect: "follow",
                referrerPolicy: "no-referrer",
                body: JSON.stringify(user),
            });



            const data = await response.json();
            if (response.status === 200) {
                const token = data.token;
                localStorage.setItem('token', token);
                navigate('/dashboard')
            }
            console.log(response);
        } catch (error) {
            console.error("Error during login:", error);
        }
    }
    return (
        <div className="login">
            <div class="box">
                <div class="form">
                    <h2>Sign in</h2>
                    <div class="inputBox">
                        <input type="text" required="required"
                            value={user.username}
                            onChange={(e) => {
                                setUser({ ...user, username: e.target.value })
                            }} />
                        <span>Username</span>
                        <i></i>
                    </div>
                    <div class="inputBox">
                        <input type="password" required="required"
                            value={user.password}

                            onChange={(e) => {

                                setUser({ ...user, password: e.target.value })
                            }} />
                        <span>Password</span>
                        <i></i>
                    </div>
                    <div class="links">
                    </div>
                    <input type="submit" value="Login" onClick={handleLogin} />
                </div>
            </div>
        </div>
    );
};

export default Login;