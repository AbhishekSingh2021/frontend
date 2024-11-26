import React from 'react'
import  {  useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Create = ()=> {

 const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState("");

 const navigate = useNavigate();
  console.log(name ,email ,age);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let addUser = { name, email, age };
    console.log(addUser);
    console.log(error);
    const response = await fetch("http://localhost:8000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(addUser) 
    });



    const result = await response.json();

    if (!response.ok) {
      console.log(result.error.status);
      setError(result.error);
    }
    if (response.ok) {
      console.log(result);
      setName("");
      setEmail("");
      setAge(0);
      setError("");
      navigate("/read");
      
    }
  };
 
        return(
        <div>
        
             {error && <div class="alert alert-danger"> {error} </div>}
            <h2  className="container mydata ">ENTER DATA </h2>
           <form onSubmit={handleSubmit}>  
           <div className="mb-3">
           <label className="form-label">Name</label>
           <input type="text" className="form-control" value={name}
           onChange={(e) => setName(e.target.value)} ></input>
           </div>
           <div className="mb-3">
           <label  className="form-label">Email address</label>
           <input type="email" className="form-control"  aria-describedby="emailHelp"  value={email}
            onChange={(e) => setEmail(e.target.value)}></input>
           <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
           </div>
          <div className="mb-3">
          <label className="form-label">age</label>
          <input type="number" className="form-control"  value={age}
            onChange={(e) => setAge(e.target.value)} ></input>
          </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

        </div>
        )}

 export default Create ;