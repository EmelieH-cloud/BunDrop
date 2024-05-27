import React, { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';

function SignIn() {

  /* Hooks --------------------------------------*/
  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');
  const { users, loading, error } = useContext(UserContext);
  const navigate = useNavigate(); 

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
        navigate(`/Profile/${user.id}`);
    } 
    else 
    {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="container d-flex">
      <Form className="w-100">
        <Form.Group className="mb-3 mt-5" controlId="formGroupUserName">
          <Form.Label>Username</Form.Label>
          <Form.Control 
            type="username" 
            placeholder="Enter username" 
            value={username}
            onChange={handleUserNameChange} 
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={handlePasswordChange} 
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSignIn}>
          Sign In
        </Button>
      </Form>
    </div>
  );
}

export default SignIn;
