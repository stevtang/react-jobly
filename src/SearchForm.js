import { useState } from "react";


function SearchForm({accessInput}) {

   const [formData, setFormData] = useState("")

   function handleSubmission(){
      // TODO: complete this stub with the passed access Input function
   }

   function handleChange(evt){
      const value = evt.target.value
      setFormData(previousData => value)
   }

   return (
      <form className="SearchForm">
         <label htmlFor="userSearchInput"></label>
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