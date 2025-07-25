import {create} from 'zustand';
import { axiosInstance } from '../lib/axios';

export const useAuthStore = create((set)=>({
    user:null,
    isLoading:true,

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
        
    }
}))