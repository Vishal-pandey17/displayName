import React, { use, useState } from "react";

function App() {
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [fullName, setFullName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setFullName(`${firstName} ${lastName}`);
  }
  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" id="fname" value={firstName} required onChange={(e) => setFirstName(e.target.value)}/><br/>
        <label>Last Name:</label>
        <input type="text" id="lname" value={lastName} required onChange={(e) => setLastName(e.target.value)}/><br/>
        <button type="submit">Submit</button>
      </form>
      {fullName && (
        <div>
          <p>Full Name: <span> {fullName}</span></p>
        </div>
      )}
    </div>
  );
}

export default App;
