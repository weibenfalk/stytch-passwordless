import { useStytchUser, useStytch } from '@stytch/stytch-react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const stytch = useStytch();
  const user = useStytchUser();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await stytch.session.revoke();
    navigate('/');
  };

  return (
    <div>
      <p>Profile</p>
      <p>{user?.emails[0].email}</p>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Profile;
