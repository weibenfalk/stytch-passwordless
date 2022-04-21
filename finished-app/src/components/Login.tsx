import { Stytch, SDKProductTypes } from '@stytch/stytch-react';

const loginOrSignupViewConfig = {
  emailMagicLinksOptions: {
    createUserAsPending: true,
    loginExpirationMinutes: 30,
    loginRedirectURL: 'http://localhost:3000/authenticate',
    signupExpirationMinutes: 30,
    signupRedirectURL: 'http://localhost:3000/authenticate'
  },
  products: [SDKProductTypes.emailMagicLinks]
};

const Login = () => <Stytch loginOrSignupView={loginOrSignupViewConfig} />;

export default Login;
