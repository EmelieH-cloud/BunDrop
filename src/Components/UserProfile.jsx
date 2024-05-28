import React, { useContext} from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import UserOrders from './UserOrders';


function UserProfile() 
{
  const { loggedInUser} = useContext(UserContext);
  const navigate = useNavigate(); 
  const { id } = useParams();

  if (!loggedInUser)
   {
     navigate('/SignIn');
  }

  return (
    <>
    <div className='container mt-4'>
        <h4> Customer ID: {id} </h4>
        <h3 className='display-3'> Welcome, <em> {loggedInUser.username} </em></h3>
         <UserOrders/>
</div>

    </>
  );
}

export default UserProfile;
