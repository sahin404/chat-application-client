import { create } from "zustand";
import {axiosInstance} from "../lib/axios";
import toast from 'react-hot-toast';

export const useChatStore = create((set) => ({
  isUserLoading: false,
  isMessagesLoading: false,
  selectedUser: null,
  users: [],
  messages: [],

  getUser: async () => {
    try {
      const res = await axiosInstance.get("/messages/users");
      set({ users: res.data });
    } catch (err) {
      console.log("Error in chat store: ", err.message);
      toast.error(err.response.data.message);
    } finally {
      set({ isGetUser: false });
    }
  },

  getSelectedUserMessages: async (selectedUserId) => {

    set({ isMessagesLoading: true });

    try {
      const res = await axiosInstance.get(`/messages/${selectedUserId}`);
      set({ messages: res.data });
    } catch (err) {
      console.log("Error in chat store: ", err.message);
      toast.error(err.response.data.message);
    } finally {
      set({ isMessagesLoading: false });
    }
  },

  setSelectedUser:async(selectedUserId)=>{
    set({setSelectedUser:selectedUserId});
  }

}));
