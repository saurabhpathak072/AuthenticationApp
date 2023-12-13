import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../store/auth-context';

function WelcomeScreen() {

  const [welcomeMessage, setWelcomeMessage] = useState("");
const {token} = useContext(AuthContext);
  useEffect(() => {
    if(token){

      axios.get('https://react-nativa-app-expense-trac-default-rtdb.firebaseio.com/message.json?auth='+token).then(response=>{
       setWelcomeMessage(response.data)
      }).catch(error=>{
        console.log(error);
        Alert.alert("Failed to fetch","Failed on welcome screen")
      })
    }
  
    return () => {
      setWelcomeMessage("")
    }
  }, [])
  
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{welcomeMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
