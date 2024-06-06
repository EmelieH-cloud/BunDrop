import React, { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { UserContext } from '../Context/UserContext';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import MemberPerks from '../assets/member-details.png';

function SignIn() {

  /* Variabler -------------------------------*/
  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');
   const navigate = useNavigate();

  /* kontextobjekt --------------------------------------*/
  const { users, loading, error, login } = useContext(UserContext);

   function handleUserNameChange(e)
  {
      setUser(e.target.value);
  }
  
  function handlePasswordChange(e)
  {
      setPassword(e.target.value);
  }

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
      alert('No user was found, please try again.');
    }
  };

  return (
    <>
    <div className="container mt-5">
      <div className='row'>
        <div className='col-lg-4'>
      <Form>
        <h2>Sign in</h2>
        <Form.Group className="mb-3" controlId="formGroupUserName">
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
        <Button variant="light" className='mt-4' onClick={handleSignIn}>
          Sign In
        </Button>
             <Nav.Link as={Link} to="/register" className='fs-4 mt-4' >Not a member yet? register here!</Nav.Link> 
      </Form>
      </div>
      <div className='col-lg-4 mt-4'>
        <h2>Why should you sign up?</h2>
    <p>As a member, you'll enjoy exclusive benefits designed to enhance your experience. Gain early access to new products and special events, and enjoy member-only webinars and premium content. Save with special discounts, seasonal offers, and free or discounted shipping. Benefit from personalized rewards and recommendations, and priority customer support. Join a vibrant community with access to exclusive forums and networking events. Participate in regular contests and giveaways, and enjoy unique experiences like VIP events and behind-the-scenes tours. Our membership program is crafted to reward your loyalty and keep you engaged with the best we have to offer.</p>
      </div>
      <div className='col-lg-4 mt-5'>
       <img src={MemberPerks} className='rounded'/>
      </div>
      </div>
      </div>
    </>
  );
}

export default SignIn;
