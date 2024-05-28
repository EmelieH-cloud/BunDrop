import React, { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';

function SignIn() {

  /* Variabler -------------------------------*/
  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  /* Contextobjekt --------------------------------------*/
  const { users, loading, error, login } = useContext(UserContext);

 /* Eventhandlers--------------------------- */
  const handleUserNameChange = (e) => setUser(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignIn = () => 
  {
    if (loading)
     {
      console.log('Loading user data, please wait...');
      return;
    }
    if (error) 
    {
      console.log('An error occurred while fetching the user database. Please try again later.');
      return;
    }
    const user = users.find(user => user.username === username && user.password === password);

    if (user) 
    {
        login(user.id); // sätt usern som loggedInUser 
        navigate(`/Profile/${user.id}`); // skicka vidare usern till profilsidan 
    } 
    else 
    {
      alert('Invalid username or password');
    }
  };

  return (
    <>
    <div className="container mt-3 ">
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
        <Button variant="light" className='m-1' onClick={handleSignIn}>
          Sign In
        </Button>
           <Button variant="light" className='m-1' onClick={handleSignIn}>
          Register
        </Button>
        </div>
        </div>
      </Form>
    </div>
  
    </>
  );
}

export default SignIn;
