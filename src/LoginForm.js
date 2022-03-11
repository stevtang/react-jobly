import { useState } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function LoginForm({ handleLogin }) {


    // TODO: Update the handleSubmission with correct fn
    // TODO: Style the form

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    console.log("Login formData", formData)

    const [formSubmitted, setFormSubmitted] = useState(false);

    function handleSubmission(evt) {
        evt.preventDefault();
        handleLogin(formData);
        setFormSubmitted(true)
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));
    }

    if(formSubmitted){
        return <Redirect push to="/companies" />
      }

    return (
        <form className="LoginForm" onSubmit={handleSubmission}>
            <div>
                <div>
                    <label htmlFor="username">Username</label>
                </div>
                <input
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                ></input>
            </div>
            <div>
                <div>
                    <label htmlFor="password">Password</label>
                </div>
                <div>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                ></input>
                </div>
            </div>
            
            <button>Submit</button>
            
        </form>
    )
}

export default LoginForm;