import { useState } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

/**
 *  Handles user login by providing form data to a submission handling
 * function
 *
 *  Props: handleLogin (fn)
 *  State:
 *  - formSubmitted: boolean. Triggers redirect after submission of formData
 *  - formData: like {username, password}
 *  - isError: holds error array returned by backend for display
 *
 */
function LoginForm({ handleLogin }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  console.log("Login formData", formData);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isError, setIsError] = useState(null);

  async function handleSubmission(evt) {
    evt.preventDefault();
    try {
      await handleLogin(formData);
      setFormSubmitted(true);
    } catch (error) {
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
    <form className="LoginForm" onSubmit={handleSubmission}>
      <div>
        {isError && isError.map((e, i) => <p key={i}>{e}</p>)}
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
  );
}

export default LoginForm;
