import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useStytch, useStytchSession } from '@stytch/stytch-react';

const Authenticate = () => {
  const [params] = useSearchParams();
  const token = params.get('token');

  const stytch = useStytch();
  const session = useStytchSession();

  const navigate = useNavigate();

  React.useEffect(() => {
    if (session) navigate('/profile');

    if (token && !session) {
      stytch.magicLinks.authenticate(token, {
        session_duration_minutes: 60
      });
    }
  }, [stytch, session]);

  return <div>Authenticating user ...</div>;
};

export default Authenticate;
