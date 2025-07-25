import {create} from 'zustand';
import { axiosInstance } from '../lib/axios';
import toast from 'react-hot-toast';

export const useAuthStore = create((set)=>({
    user:null,
    isLoading:true,
    isSignUp:false,
    isLoggin:false,

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
    signup:async(data)=>{
        try{
            const res = await axiosInstance.post('/auth/signup', data);
            set({user:res.data});
            toast.success('Account Created Successfully!');
        }
        catch{
            toast.error('Something Went Wrong');
        }
        finally{
            set({isSignUp:false});
        }
    },

    //Log in user
    login:async(data)=>{
        try{
            const res = await axiosInstance.post('/auth/login', data);
            set({user:res.data});
            toast.success('Loggin in Successfully!');
             
        }
        catch{
            toast.error('Invalid Credentials');
        }
        finally{
            set({isLoggin:false});
        }
    },

    //Log Out user
    logout:async()=>{
        try{
            await axiosInstance.post('/auth/logout');
            set({user:null});
            toast.success('Account Logout Successfully!');
        }
        catch{
            toast.err('Something Went Wrong!');
        }
    }


}))