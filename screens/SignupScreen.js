import { useContext, useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/Auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/auth-context';

function SignupScreen() {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const {authenticate} = useContext(AuthContext);
  const signUpHandler= async ({email, password})=>{
    setIsAuthenticate(true)
    const {idToken} = await createUser(email,password);
    authenticate(idToken);
    setIsAuthenticate(false)
  }
  if(isAuthenticate){
    return <LoadingOverlay message={"Creating User"}/>
  }
  return <AuthContent onAuthenticate={signUpHandler}/>;
}

export default SignupScreen;
