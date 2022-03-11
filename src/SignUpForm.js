import { useState } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

/**
 *  Handles registering a new user by providing form data to a submission handling
 * function
 *
 *  Props: handleSignup (fn)
 *  State:
 *  - formSubmitted: boolean. Triggers redirect after submission of formData
 *  - formData: like {username, password, ...}
 *
 */
function SignUpForm({ handleSignUp }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const [isError, setIsError] = useState(null);
  console.log("Profile formData", formData);

  async function handleSubmission(evt) {
    evt.preventDefault();
    try {
      await handleSignUp(formData);
      setFormSubmitted(true);
    } catch (error) {
        console.log("error", error);
      setIsError(error);
    }
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  if (formSubmitted) {
    return <Redirect push to="/companies" />;
  }

  return (
    <form className="ProfileForm" onSubmit={handleSubmission}>
      <div>
        {isError && isError.map((e,i) => <p key={i}>{e}</p>)}
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
  );
}

export default SignUpForm;
