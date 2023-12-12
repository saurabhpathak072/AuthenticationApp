import axios from 'axios';
import { firebaseApi } from '../constants/APIConstants';

export const authenticateUser=async (mode, email, password)=>{
    console.log(`${firebaseApi.URL}:${mode}?key=${firebaseApi.FIREBASE_KEY}`);
    console.log(email);
    console.log(password);
    try {
        const result = await axios.post(`${firebaseApi.URL}:${mode}?key=${firebaseApi.FIREBASE_KEY}`,{
            email:email,
            password:password,
            returnSecureToken:true
        }).then(res=>{
            console.log(res.data);
            return res.data
        }).catch(err=>{
            console.log("error",err);
            // console.log("error",err?.message);
        });

        return result;
        
    } catch (error) {
        console.log("Err",error);
    }
   
}

export const createUser = async (email, password) => {
    try {
        return authenticateUser('signUp',email,password)
    } catch (error) {
        console.log("Error1",error);
    }
 
};

export const loginUser= async (email, password) =>{
    try {
        return authenticateUser('signInWithPassword',email,password)
    } catch (error) {
        console.log("Error2",error);
    }
}
