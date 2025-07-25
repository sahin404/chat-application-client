import {create} from 'zustand';
import { axiosInstance } from '../lib/axios';
import toast from 'react-hot-toast';

export const useAuthStore = create((set)=>({
    user:null,
    isLoading:true,
    isSignUp:false,
    isLogin:false,

    //Get User
    checkAuth:async()=>{
        try{
            const res = await axiosInstance.get('/auth/check');
            set({user:res.data});
        }
        catch(err){
            set({user:null});
            console.log(err.response.data.message);
        }
        finally{
            set({isLoading:false});
        }        
        
    },

    //Sign Up User
    signUp:async(data)=>{
        try{
            const res = await axiosInstance.post('/auth/signup', data);
            set({user:res.data});
            toast.success('Account Created Successfully!');
        }
        catch(err){
            toast.error(err.response.data.message);
        }
        finally{
            set({isSignUp:true});
        }
    },

    //sign in user
    Login:async(data)=>{
        try{
            const res = await axiosInstance.post('/auth/login', data);
            set({user:res.data});
            toast.success('Loggin in Successfully!');
        }
        catch(err){
            toast.error(err.response.data.message);
        }
        finally{
            set({isLogin:true});
        }
    }



}))