import { useState } from "react";
import Validation from "./formValidation";
import axios from "axios";

const Login = () => {
    const [loginData, setloginData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setloginData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const validationErrors = Validation(loginData, null, null);
        setErrors(validationErrors);
        console.table(validationErrors);

        // Check if there are no errors before proceeding
        if (Object.keys(validationErrors).length === 0) {
            console.log("Form submitted successfully:", JSON.stringify(loginData));

            axios.post("http://127.0.0.1:8081/loginform", loginData)
                .then(response => {
                    alert(response.data.message);
                })
                .catch(error => {
                    if (error.response && error.response.status === 409) {
                        alert("Try another password");
                    } else {
                        alert("Failed to insert data");
                    }
                    console.error('Error:', error);
                });
        }
    }

    return (<>
        <div className="loginForm">
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="email" className="inputLabels">Email : </label>
                <input type="email" id="email" name="email" className="inputField" placeholder="enter your email" value={loginData.email} onChange={handleChange} />
                {errors.email && <span className="errorshow">{errors.email}</span>}

                <label htmlFor="password" className="inputLabels">Password : </label>
                <input type="password" id="password" name="password" className="inputField" placeholder="enter password of length 8" value={loginData.password} onChange={handleChange} />
                <button type="submit" className="submitButton">Submit</button>
            </form>
        </div>
    </>);
}

export default Login;