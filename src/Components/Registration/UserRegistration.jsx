import React from 'react'
import Form from 'react-bootstrap/Form';
import { useState} from 'react';


function UserRegistration() 
{

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleUserNameChange(e)
  {
      setUsername(e.target.value);
  }

  function handlePasswordChange(e)
  {
      setPassword(e.target.value);
  }

  async function handleRegister()
  {
    if (username.length<=5 || password.length<=5)
    {
        alert('The username and password must contain at least 5 characters.');
        setPassword('');
        setUsername('');
    }
    else 
    {
        const newUser = {username, password};

      try {
      const response = await fetch('http://localhost:3000/users', 
      {
        method: 'POST',
        headers: 
        {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser) // skicka som en json-sträng till db.json 
      });
      if (response.ok)
      {
           console.log("success");
      }
      else 
      {
        alert('Failed to register user, please try again.')
      }
    }
      catch (error)
      {
        console.log(error);
      }
   }
}




    return ( <>
    <div className="container mt-3 border border-white ">
        <p>The username and password must contain at least 5 characters</p>
      <Form>
        <div className='row p-3'>
          <div className='col-lg-4 '>
        <Form.Group className="mb-3" controlId="formGroupUserName">
          <Form.Label>Username</Form.Label>
          <Form.Control 
            type="username" 
            placeholder="Enter username" 
            value={username}
            onChange={handleUserNameChange} 
          />
        </Form.Group>
        
        </div>
        </div>
           <div className='row p-3'>
             <div className='col-lg-4'>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={handlePasswordChange} 
          />
        </Form.Group>
        </div>
        </div>
        <div className='row p-3'>
          <div className='col-lg-4'>
        <a variant="light" className='m-1' onClick={handleRegister}>Register</a>
        </div>
        </div>
      </Form>
    </div>
  
    
    </> 
    );
}

export default UserRegistration;