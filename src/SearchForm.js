import { useState } from "react";


function SearchForm({addSearchCriteria}) {

   const [formData, setFormData] = useState("")

   function handleSubmission(evt){
      evt.preventDefault();
      addSearchCriteria(formData);
   }

   function handleChange(evt){
      const value = evt.target.value
      setFormData(previousData => value)
   }

   return (
      <form className="SearchForm" onSubmit={handleSubmission}>
         <label htmlFor="userSearchInput">Search: </label>
         <input 
         id="userSearchInput" 
         name="userSearchInput"
         value={formData}
         onChange={handleChange}
         ></input>
      </form>
   )
}

export default SearchForm;