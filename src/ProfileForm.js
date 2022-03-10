import { useState } from "react";




function ProfileForm() {

  // TODO: Update the below state to initialize with a prop about the user
  // TODO: Update the handleSubmission with correct fn
  // TODO: Style the form
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: ""
  })
  console.log("Profile formData", formData)

  function handleSubmission() {
    return null;
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  return (
    <form className="ProfileForm" onSubmit={handleSubmission}>
      <div>
        <label htmlFor="username">Username</label>
      </div>
      <div>
        <input
          disabled
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        ></input>
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

export default ProfileForm;