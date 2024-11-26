import React from 'react';
import  {  useState , useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


const Update = ()=> {
        
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [age, setAge] = useState(0);
 const [error, setError] = useState("");

 const { id } = useParams();

 const getSingleUser = async () => {
       
        const response = await fetch(`http://localhost:8000/${id}`);
        const result = await response.json();
        console.log("result..", result);
        if (!response.ok) {
           console.log(error);
          setError(result.error);
        }
          if (response.ok) {
                setName(result.name);
                setEmail(result.email);
                setAge(result.age);
                setError("");
            };
        }

        const navigate = useNavigate();
        const handleUpdate = async (e) => {
                
                e.preventDefault();
                const updatedUser = { name, email, age };
                console.log(updatedUser);
                const response = await fetch(`http://localhost:8000/${id}`, {
                  method: "PATCH",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(updatedUser),
                });
                const result = await response.json();
                if (response.ok) {
                  console.log("updated result..", result);
                  setError("");
                  navigate("/read");
                }
                if (!response.ok) {
                  console.log(response.error);
                  setError(response.error);
                }
              };


          useEffect(() => {
                getSingleUser();
              }, []);

        return(
        <div>

        
        {error && <div class="alert alert-danger"> {error} </div>}
       <h2  className="container mydata ">ENTER UPDATED DATA </h2>
      <form onSubmit={handleUpdate}>  
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


export default Update ;

