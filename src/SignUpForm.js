import { useState } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";


function SignUpForm({handleSignUp}) {


    // TODO: Update the handleSubmission with correct fn
    // TODO: Style the form
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: ""
    })
    console.log("Profile formData", formData)

    function handleSubmission(evt) {
        evt.preventDefault();
        handleSignUp(formData);
        setFormSubmitted(true);
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
        <form className="ProfileForm" onSubmit={handleSubmission}>
            <div>
                <label htmlFor="username">Username</label>
            </div>
            <div>
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
            <div>
                <label htmlFor="firstName">First Name</label>
            </div>
            <div>
                <input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                ></input>
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
            </div>
            <div>
                <input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                ></input>
            </div>
            <div>
                <label htmlFor="email">Email</label>
            </div>
            <div>
                <input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                ></input>
            </div>
            <button>Save Changes</button>
        </form>
    )
}

export default SignUpForm;