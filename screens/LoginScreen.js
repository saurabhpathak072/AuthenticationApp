import { Alert } from 'react-native';
import AuthContent from '../components/Auth/AuthContent';
import { loginUser } from '../util/Auth';
import { useContext, useState } from 'react';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/auth-context';

function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const {authenticate} = useContext(AuthContext);
  const loginHandler=async ({ email, password })=>{
    try {
      setIsLoading(true);
      const {idToken} =await loginUser(email, password);
      console.log('idToken',idToken);
      setIsLoading(false);
      authenticate(idToken);
      // console.log('result',result);
    } catch (error) {
      console.log("Lo",error);
      Alert.alert("Error","Not able to Login! \n Login Failed")
    }
  }
  if(isLoading){
    return <LoadingOverlay message={"Logging User...."}/>
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
