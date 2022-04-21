import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    navigate('/');
  };

  return (
    <div>
      <p>Profile</p>
      <p>Email goes here.</p>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Profile;
